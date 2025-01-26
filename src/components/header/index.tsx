import { tw, css } from 'twind/css';
import { motion } from 'framer-motion';
import ParticlesComponent from '../particles/ParticlesComponent';

const headerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 2rem;
  box-sizing: border-box;
  overflow-y: hidden;
  scroll-behavior: smooth;
`;

const emphasizedTextStyle = css`
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  font-size: 1rem;
  font-family: 'bebas', sans-serif;
  font-weight: bold;

  @media (min-width: 1280px) {
    font-size: 2rem;
  }
`;

const h2Style = css`
  font-size: 3rem;
  font-family: 'migae', sans-serif;
  color: #ffe8e8;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: -0.5rem;
`;

const h3Style = css`
  font-family: 'migae', sans-serif;
  color: #e2e2d6;
  padding: 0 2rem;
  font-size: 1.5rem;
  margin-top: -0.5rem;
`;

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Header = () => (
  <motion.header className={tw(headerStyle)} initial="hidden" animate="visible" variants={fadeInVariants}>
    <motion.h1 className={tw(emphasizedTextStyle)} variants={fadeInVariants}>
      Capitã Liberta-Ventre
    </motion.h1>
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
