import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { ISourceOptions, MoveDirection, OutMode } from '@tsparticles/engine';
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

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: `#0000000`,
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: `push`,
          },
          onHover: {
            enable: true,
            mode: `repulse`,
          },
        },
        modes: {
          push: {
            quantity: 5,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: [`#ffaf40`, `#f54291`, `#42f5dd`, `#ffffff`],
        },
        links: {
          enable: false,
        },
        move: {
          enable: true,
          direction: MoveDirection.none,
          speed: 1,
          outModes: {
            default: OutMode.out,
          },
        },
        number: {
          value: 150,
          density: {
            enable: true,
            area: 800,
          },
        },
        opacity: {
          value: { min: 0.3, max: 0.8 },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.3,
            sync: false,
          },
        },
        shape: {
          type: `circle`,
        },
        size: {
          value: { min: 1, max: 3 },
          animation: {
            enable: true,
            speed: 5,
            minimumValue: 1,
            sync: false,
          },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return <Particles id="tsparticles" options={options} />;
  }

  return <></>;
};

export default ParticlesComponent;
