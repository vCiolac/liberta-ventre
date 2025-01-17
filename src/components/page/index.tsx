import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { tw } from 'twind';

interface IProps {
  children: React.ReactNode;
}

const Page = ({ children }: IProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener(`resize`, handleResize);
    return () => window.removeEventListener(`resize`, handleResize);
  }, []);

  const backgroundImage = isMobile ? `/images/bg-mobile.jpg` : `/images/bg.png`;

  return (
    <div className={tw(`relative min-h-screen`)}>
      <Head>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Image
        src={backgroundImage}
        alt="Background"
        fill
        style={{
          objectFit: `contain`,
          objectPosition: `top center`,
          zIndex: -1,
        }}
        quality={85}
        priority
      />

      <div className={tw(`absolute inset-0 bg-black opacity-60`)} />
      <div className={tw(`relative z-10 flex flex-col`)}>{children}</div>
    </div>
  );
};

export default Page;
