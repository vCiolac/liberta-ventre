import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { Container, ISourceOptions, MoveDirection, OutMode } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: `#0000000`, // Fundo preto para destacar os brilhos
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: `push`, // Adiciona partículas ao clicar
          },
          onHover: {
            enable: true,
            mode: `repulse`, // Repele partículas ao passar o mouse
          },
        },
        modes: {
          push: {
            quantity: 5, // Quantidade de partículas ao clicar
          },
          repulse: {
            distance: 100, // Distância de repulsão ao passar o mouse
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: [`#ffaf40`, `#f54291`, `#42f5dd`, `#ffffff`], // Cores dos brilhos
        },
        links: {
          enable: false, // Sem links entre as partículas
        },
        move: {
          enable: true,
          direction: MoveDirection.none, // Movimento aleatório
          speed: 1, // Velocidade mais lenta para o efeito
          outModes: {
            default: OutMode.out, // Sai da tela
          },
        },
        number: {
          value: 150, // Quantidade de partículas
          density: {
            enable: true,
            area: 800, // Densidade na tela
          },
        },
        opacity: {
          value: { min: 0.3, max: 0.8 }, // Variação de opacidade
          animation: {
            enable: true,
            speed: 1, // Animação suave de opacidade
            minimumValue: 0.3,
            sync: false,
          },
        },
        shape: {
          type: `circle`, // Forma das partículas
        },
        size: {
          value: { min: 1, max: 3 }, // Tamanho das partículas
          animation: {
            enable: true,
            speed: 5, // Tamanho pulsante
            minimumValue: 1,
            sync: false,
          },
        },
      },
      detectRetina: true, // Suporte para telas Retina
    }),
    [],
  );

  if (init) {
    return <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />;
  }

  return <></>;
};

export default ParticlesComponent;
