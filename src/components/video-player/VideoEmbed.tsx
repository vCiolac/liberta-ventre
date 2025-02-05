import { useEffect, useRef, useState } from 'react';
import Player from '@vimeo/player';

interface VideoEmbedProps {
  onCTAOpen: () => void;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ onCTAOpen }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [player, setPlayer] = useState<Player | null>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const vimeoPlayer = new Player(iframeRef.current, {
        id: 1053587757,
        width: 640,
      });

      // 🔹 1️⃣ Disparar evento de Lead quando o usuário dá Play
      vimeoPlayer.on(`play`, () => {
        window.fbq(`track`, `Lead`, {
          content_name: `Vídeo da Oferta`,
          event_label: `Usuário deu Play no vídeo`,
        });
      });

      // 🔹 2️⃣ Disparar CTA aos 4m45s
      vimeoPlayer.on(`timeupdate`, (data) => {
        if (Math.floor(data.seconds) === 285) {
          onCTAOpen();
        }
      });

      setPlayer(vimeoPlayer);
    }

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, []);

  return (
    <div className="video-container">
      <iframe
        ref={iframeRef}
        title="Manual da Capitã Liberta-Ventre"
        src="https://player.vimeo.com/video/1053587757?h=0b68877797&badge=0&autopause=0&player_id=0&app_id=58479"
        width="100%"
        height="500"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VideoEmbed;
