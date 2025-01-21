import { tw, css } from 'twind/css';
import { motion } from 'framer-motion';
import ParticlesComponent from '../particles/ParticlesComponent';

const headerStyle = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: hidden;
  scroll-behavior: smooth;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const leftSideStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  text-align: center;
  width: 100%;

  @media (min-width: 768px) {
    width: 60%;
    align-items: flex-start;
    padding: 2rem;
    text-align: left;
  }
`;

const rightSideStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;

  @media (min-width: 768px) {
    width: 50%;
    min-height: 100vh;
  }
`;

const buttonStyle = css`
  font-size: 3rem;
  font-family: 'bebas', sans-serif;
  justify-content: center;
  align-self: center;
  min-width: 300px;
  border-radius: 12px;
  background-color: #c6973c;
  color: #fff;
  border: 1px solid #d7bf84;
  transition: all 0.3s ease-in-out;
  margin-top: 2rem;

  &:hover {
    background-color: #ffc107;
    border-color: #d7bf84;
  }

  @media (min-width: 768px) {
    padding: 1.5rem 4rem;
    font-size: 2rem;
  }

  @media (min-width: 1280px) {
    font-size: 3rem;
  }
`;

const highlightStyle = css`
  background-color: yellow;
  font-family: 'migae', sans-serif;
  text-align: center;
  color: black;
  padding: 7px 4px 0px 4px;
  border-radius: 4px;
`;

const emphasizedTextStyle = css`
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  font-size: 3.5rem;
  font-family: 'bebas', sans-serif;
  font-weight: bold;
  margin-bottom: 5rem;

  @media (min-width: 1280px) {
    font-size: 4.5rem;
  }
`;

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Header = () => (
  <motion.header className={tw(headerStyle)} initial="hidden" animate="visible" variants={fadeInVariants}>
    <motion.div className={tw(leftSideStyle)} variants={fadeInVariants}>
      <h1 className={tw(`text-4xl md:text-5xl font-pogo uppercase text-white text-center md:pt-0 pt-4`)}>
        <span className={tw(highlightStyle)}>Liberte-se</span>
        <br />
        da
        <br />
        <span className={tw(highlightStyle)}> Constipação</span>
        <br />
        com a Ajuda da
        <br />
        <br />
        <span className={tw(emphasizedTextStyle)}> Capitã Liberta-Ventre</span>
        <br />
        <span>
          <br />O <span className={tw(highlightStyle)}> manual</span> que transformou a vida de milhares de mulheres e
          agora pode <span className={tw(highlightStyle)}> transformar</span> a sua.
        </span>
      </h1>
    </motion.div>
    <motion.div className={tw(rightSideStyle)} variants={fadeInVariants}>
      <h2 className={tw(`text-xl font-migae text-white text-center md:pt-72 px-8`)}>
        Se você está cansada de lutar contra a prisão de ventre, inchaço e desconforto, está no lugar certo!
        <br />
        Chegou a hora de virar o jogo com dicas, técnicas naturais e uma abordagem revolucionária que realmente
        funciona!
      </h2>
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        type="button"
        className={tw(buttonStyle)}
        onClick={() => {
          const element = document.getElementById(`vsl`);
          if (element) {
            element.scrollIntoView({ behavior: `smooth` });
          }
        }}
      >
        Inicie Sua Jornada
      </motion.button>
      <ParticlesComponent />
    </motion.div>
  </motion.header>
);

export default Header;
