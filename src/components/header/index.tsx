import { tw, css } from 'twind/css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ParticlesComponent from '../particles/ParticlesComponent';

const headerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  overflow-y: hidden;
  scroll-behavior: smooth;
`;

const titleContainerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
`;

const h1Style = css`
  font-size: 1.8rem;
  font-family: 'migae', sans-serif;
  color: #996210;
  line-height: 1.3;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  background-color: #f8c75d;
  width: 100%;
  @media (min-width: 1280px) {
    font-size: 2.5rem;
  }
`;

const h2Style = css`
  font-size: 2rem;
  font-family: 'migae', sans-serif;
  color: #996210;
  line-height: 1.3;
  padding-left: 2rem;
  padding-right: 2rem;

  @media (min-width: 1280px) {
    font-size: 3rem;
    padding-left: 6rem;
    padding-right: 6rem;
    line-height: 1.5;
  }
`;

const h3Style = css`
  font-family: 'migae', sans-serif;
  color: #5f5c5c;
  font-size: 1.2rem;
  margin-top: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: 1280px) {
    font-size: 1.5rem;
  }
`;

const countdownContainer = css`
  font-size: 1.2rem;
  font-weight: bold;
  color: #d9534f;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  background-color: rgba(255, 0, 0, 0.1);
  @media (min-width: 1280px) {
    font-size: 1.5rem;
  }
`;

const fadeInVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutos iniciais

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 30 * 60)); // Reinicia a cada 30 min
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, `0`);
    const seconds = (time % 60).toString().padStart(2, `0`);
    return `${minutes}:${seconds}`;
  };

  return (
    <motion.div className={tw(countdownContainer)}>⏳ Oferta especial expira em: {formatTime(timeLeft)}</motion.div>
  );
};

const Header = () => (
  <motion.header className={tw(headerStyle)} initial="hidden" animate="visible" variants={fadeInVariants}>
    <motion.h1 className={tw(h1Style)} variants={fadeInVariants} style={{ color: `#d9534f`, fontWeight: `bold` }}>
      PARE DE SOFRER AGORA!
      <CountdownTimer />
    </motion.h1>
    <motion.div className={tw(titleContainerStyle)} variants={fadeInVariants}>
      <Image
        src="/images/logo_svg.png"
        alt="Ícone da Capitã Liberta-Ventre"
        width={250}
        height={250}
        style={{ width: `auto`, height: `auto` }}
        priority
      />
    </motion.div>
    <motion.h2 className={tw(h2Style)} variants={fadeInVariants}>
      Aprenda a restaurar seu intestino naturalmente e se livre da constipação de uma vez por todas!
    </motion.h2>
    <motion.span className={tw(h3Style)} variants={fadeInVariants}>
      A Fórmula Natural Para se Livrar da Prisão de Ventre em 7 Dias!
    </motion.span>
    <motion.h3 className={tw(h3Style)} variants={fadeInVariants}>
      Sinta-se Mais Leve, Confiante e Feliz com O Seu Corpo.
    </motion.h3>
    <ParticlesComponent />
  </motion.header>
);

export default Header;
