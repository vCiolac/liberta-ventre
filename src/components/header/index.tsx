import { tw, css } from 'twind/css';
import { motion } from 'framer-motion';
import ParticlesComponent from '../particles/ParticlesComponent';

const headerStyle = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const leftSideStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
  text-align: center;

  @media (min-width: 768px) {
    width: 50%;
    align-items: flex-start;
    padding: 4rem;
    text-align: left;
  }
`;

const rightSideStyle = css`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    min-height: 100vh;
  }
`;

const buttonStyle = css`
  padding: 1.5rem 4rem;
  font-size: 5rem;
  font-family: 'bebas', sans-serif;
  justify-content: center;
  align-self: center;
  min-width: 300px;
  margin-bottom: 6rem;
  border-radius: 12px;
  background-color: #c6973c;
  color: #fff;
  border: 1px solid #d7bf84;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #ffc107;
    border-color: #d7bf84;
  }

  @media (min-width: 768px) {
    padding: 1.5rem 4rem;
    font-size: 2rem;
  }

  @media (min-width: 1280px) {
    font-size: 5rem;
    margin-bottom: 6rem;
  }
`;

const highlightStyle = css`
  background-color: yellow;
  font-family: 'migae', sans-serif;
  color: black;
  padding: 7px 4px 0px 4px;
  border-radius: 4px;
`;

const emphasizedTextStyle = css`
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  font-size: 2rem;
  font-family: 'bebas', sans-serif;
  font-weight: bold;
  padding-top: 0.8rem;
  margin-bottom: 0.3rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1280px) {
    font-size: 4.5rem;
  }
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(leftSideStyle)}>
      <h1 className={tw(`text-5xl font-pogo uppercase text-white pt-16 text-center`)}>
        <span className={tw(highlightStyle)}>Liberte-se</span> da
        <span className={tw(highlightStyle)}> Constipação </span>
        com a Ajuda da
        <span className={tw(emphasizedTextStyle)}> Capitã Liberta-Ventre </span>
        <br />O <span className={tw(highlightStyle)}> manual </span> que transformou a vida de milhares de mulheres e
        agora pode <span className={tw(highlightStyle)}> transformar </span> a sua.
      </h1>
      <h2 className={tw(`text-3xl font-migae text-white text-center`)}>
        Se você está cansada de lutar contra a prisão de ventre, inchaço e desconforto, está no lugar certo. Chegou a
        hora de virar o jogo com dicas, técnicas naturais e uma abordagem revolucionária que realmente funciona!
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
    </div>
    <div className={tw(rightSideStyle)}>
      <ParticlesComponent />
    </div>
  </header>
);

export default Header;
