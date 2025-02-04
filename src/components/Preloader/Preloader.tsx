import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { tw } from 'twind';
import { css } from 'twind/css';

interface PreloaderProps {
  onExit: () => void;
}

const preloaderStyle = css`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #db8f76;
  z-index: 50;
`;

const charStyle = css`
  font-family: 'bebas', sans-serif;
  font-size: 3rem;
  @media (min-width: 768px) {
    font-size: 5rem;
  }
  color: white;
  opacity: 0;
  visibility: hidden;
`;

const Preloader = ({ onExit }: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  const text = `Capitã Liberta-Ventre`;

  const generateUniqueKeys = (inputText: string) =>
    inputText.split(``).map((char, index) => `${char}-${index}-${inputText.length}`);

  const uniqueKeys = generateUniqueKeys(text);

  useEffect(() => {
    if (textRef.current && preloaderRef.current) {
      const chars = Array.from(textRef.current.children) as HTMLElement[];

      const tl = gsap.timeline({
        onComplete: () => {
          onExit();
        },
      });

      tl.set(chars, { visibility: `visible` })
        .to(chars, {
          duration: 0.05,
          opacity: 1,
          stagger: 0.05,
        })
        .to(preloaderRef.current, {
          y: `-100%`,
          duration: 0.8,
          ease: `power4.inOut`,
        });
    }
  }, [onExit]);

  return (
    <div ref={preloaderRef} className={tw(preloaderStyle)}>
      <h1 ref={textRef} className={tw(`text-white text-4xl font-bold`)}>
        {text.split(``).map((char, index) => (
          <span
            key={uniqueKeys[index]}
            className={tw(charStyle)}
            style={{ display: char === ` ` ? `inline-block` : `inline` }}
          >
            {char === ` ` ? `\u00A0` : char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default Preloader;
