import { useEffect, useRef, useState } from 'react';
import Player from '@vimeo/player';
import { tw } from 'twind';
import Image from 'next/image';

const VideoEmbed = () => {
  const iframeRef = useRef(null);
  const [player, setPlayer] = useState<Player | null>(null);
  const [showUnmuteOverlay, setShowUnmuteOverlay] = useState(true);
  const [showCTA, setShowCTA] = useState(false);
  const [showPauseOverlay, setShowPauseOverlay] = useState(false);
  const officialPlayRef = useRef(false);
  const hasPausedRef = useRef(false);
  const latestTimeRef = useRef(0);
  const abandonmentTrackedRef = useRef(false);

  useEffect(() => {
    if (iframeRef.current) {
      const vimeoPlayer = new Player(iframeRef.current, {
        id: 1053587757,
        width: 640,
        autoplay: true,
        muted: true,
      });

      setPlayer(vimeoPlayer);

      // Evento de play
      vimeoPlayer.on(`play`, () => {
        hasPausedRef.current = false;
        setShowPauseOverlay(false);
      });

      // Evento de pause
      vimeoPlayer.on(`pause`, (data) => {
        if (!officialPlayRef.current) return;
        if (hasPausedRef.current) return;
        if (data.seconds < 1) return;

        hasPausedRef.current = true;
        setShowPauseOverlay(true);
        window.fbq(`track`, `VideoPause`, {
          content_name: `Vídeo da Oferta`,
          event_label: `Usuário pausou o vídeo no segundo ${data.seconds}`,
        });
      });

      // Evento de tempo para exibir o CTA
      vimeoPlayer.on(`timeupdate`, (data) => {
        latestTimeRef.current = data.seconds;
        if (Math.floor(data.seconds) === 280) {
          setShowCTA(true);
        }
      });

      // Evento de abandono da página usando pagehide e beforeunload como fallback
      const handlePageHide = () => {
        if (abandonmentTrackedRef.current) return;
        abandonmentTrackedRef.current = true;
        const seconds = latestTimeRef.current;
        window.fbq(`track`, `VideoAbandono`, {
          content_name: `Vídeo da Oferta`,
          event_label: `Usuário abandonou o vídeo no segundo ${seconds}`,
        });
      };

      window.addEventListener(`pagehide`, handlePageHide);
      window.addEventListener(`beforeunload`, handlePageHide);

      return () => {
        vimeoPlayer.destroy();
        window.removeEventListener(`pagehide`, handlePageHide);
        window.removeEventListener(`beforeunload`, handlePageHide);
      };
    }
    return () => {
      // Função de cleanup intencionalmente vazia
    };
  }, []);

  // Função para ativar o som e reiniciar do início
  const handleUnmuteClick = () => {
    if (player) {
      player.setCurrentTime(0).then(() => {
        player.setMuted(false);
        officialPlayRef.current = true;
        player.play();
        setShowUnmuteOverlay(false);
        window.fbq(`track`, `PlayVideo`, {
          content_name: `Vídeo da Oferta`,
          event_label: `Usuário deu Play no vídeo com som`,
        });
      });
    }
  };

  // Função para retomar a reprodução após pausa
  const handleResumeAfterPause = () => {
    if (player) {
      player.play();
      setShowPauseOverlay(false);
      hasPausedRef.current = false;
    }
  };

  // Função para rolar até a oferta
  const scrollToOffer = () => {
    const offerSection = document.getElementById(`oferta`);
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: `smooth` });
      setShowCTA(false);
    }
  };

  return (
    <div className="video-container" style={{ position: `relative` }}>
      <iframe
        ref={iframeRef}
        title="Manual da Capitã Liberta-Ventre"
        src="https://player.vimeo.com/video/1053587757?h=0b68877797&autoplay=1&muted=1&playsinline=1"
        width="100%"
        height="500"
        allow="autoplay; fullscreen; picture-in-picture"
      />

      {/* Sobreposição para ativar o som */}
      {showUnmuteOverlay && (
        <div
          className={tw(`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer`)}
          onClick={handleUnmuteClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === `Enter` || e.key === ` `) {
              handleUnmuteClick();
            }
          }}
        >
          <div className={tw(`text-center text-white bg-pink-500 bg-opacity-75 p-4 rounded-lg`)}>
            <p>O vídeo já começou! Clique aqui para assistir.</p>
            <Image
              src="/images/mute.png"
              alt="Ícone de som desativado"
              className={tw(`mx-auto mt-2`)}
              width={64}
              height={64}
            />
          </div>
        </div>
      )}

      {/* ⏸️ Sobreposição ao pausar o vídeo */}
      {showPauseOverlay && (
        <div
          className={tw(
            `absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 text-white p-4`,
          )}
        >
          <p className={tw(`text-xl font-bold`)}>⚠️ Não saia agora!</p>
          <p className={tw(`mt-2 text-lg`)}>Tem algo importante no final do vídeo...</p>
          <button
            type="button"
            onClick={handleResumeAfterPause}
            className={tw(`bg-green-500 text-white py-2 px-6 rounded-lg mt-4 hover:bg-green-700 transition`)}
          >
            Continuar Assistindo
          </button>
        </div>
      )}

      {/* Pop-up CTA */}
      {showCTA && (
        <div
          className={tw(
            `fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-50`,
          )}
        >
          <div className={tw(`bg-white p-6 rounded-lg shadow-lg text-center`)}>
            <h2 className={tw(`text-2xl font-bold mb-4`)}>🚀 Oferta Especial!</h2>
            <p className={tw(`text-lg`)}>Aproveite agora antes que acabe!</p>
            <button
              type="button"
              onClick={scrollToOffer}
              className={tw(`bg-green-500 text-white py-2 px-6 rounded-lg mt-4 hover:bg-green-700 transition`)}
            >
              VER OFERTA AGORA!
            </button>
            <button
              type="button"
              onClick={() => setShowCTA(false)}
              className={tw(`mt-4 block text-gray-500 hover:text-gray-700`)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoEmbed;
