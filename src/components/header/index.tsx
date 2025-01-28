import { tw, css } from 'twind/css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ParticlesComponent from '../particles/ParticlesComponent';

const headerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 1.5rem;
  box-sizing: border-box;
  overflow-y: hidden;
  scroll-behavior: smooth;
  @media (min-width: 1280px) {
    padding-top: 5rem;
  }
`;

const titleContainerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  gap: 1rem;
`;

const emphasizedTextStyle = css`
  color: #f8c75d;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  font-size: 2rem;
  font-family: 'bebas', sans-serif;
  font-weight: bold;

  @media (min-width: 1280px) {
    font-size: 2rem;
  }
`;

const h2Style = css`
  font-size: 2rem;
  font-family: 'migae', sans-serif;
  color: #967878;
  line-height: 1.3;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-top: 0.5rem;

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
  padding: 0 2rem;
  font-size: 1.2rem;
  margin-top: 0.5rem;
  @media (min-width: 1280px) {
    font-size: 1.5rem;
  }
`;

const fadeInVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Header = () => (
  <motion.header className={tw(headerStyle)} initial="hidden" animate="visible" variants={fadeInVariants}>
    <motion.div className={tw(titleContainerStyle)} variants={fadeInVariants}>
      <Image src="/images/logo2.png" alt="Ícone da Capitã Liberta-Ventre" width={75} height={75} />
      <motion.h1 className={tw(emphasizedTextStyle)}>Capitã Liberta-Ventre</motion.h1>
    </motion.div>
    <motion.h2 className={tw(h2Style)} variants={fadeInVariants}>
      Saiba como eliminar a prisão de ventre de forma natural e saudável.
    </motion.h2>
    <motion.h3 className={tw(h3Style)} variants={fadeInVariants}>
      Sinta-se mais leve, confiante e feliz com o seu corpo.
    </motion.h3>
    <ParticlesComponent />
  </motion.header>
);

export default Header;
