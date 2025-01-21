import { useEffect, useRef, useState } from 'react';
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
  background-color: #56392f;
  z-index: 50;
`;

const Preloader = ({ onExit }: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [hideChars, setHideChars] = useState(false);

  const text = `Capitã Liberta Ventre`;

  const generateUniqueKeys = (inputText: string) =>
    inputText.split(``).map((char, index) => `${char}-${index}-${inputText.length}`);

  const uniqueKeys = generateUniqueKeys(text);

  useEffect(() => {
    if (textRef.current && preloaderRef.current) {
      const chars = textRef.current.children;
      const tl = gsap.timeline();

      tl.to(chars, {
        duration: 0.05,
        opacity: 1,
        stagger: 0.05,
      })
        .add(() => {
          setHideChars(true);
          onExit();
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
          <span key={uniqueKeys[index]} className={tw(hideChars ? `opacity-0` : `opacity-0`)}>
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default Preloader;
