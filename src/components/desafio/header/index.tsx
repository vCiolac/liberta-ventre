import { tw } from 'twind/css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ParticlesComponent from '../particles/ParticlesComponent';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(30 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 30 * 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    const m = String(Math.floor(time / 60)).padStart(2, `0`);
    const s = String(time % 60).padStart(2, `0`);
    return `${m}:${s}`;
  };

  return (
    <motion.div className={tw`flex justify-center text-red-600 bg-red-100 font-bold p-2 rounded-lg text-lg`}>
      ⏳ Oferta especial termina em: {formatTime(timeLeft)}
    </motion.div>
  );
};

const HeaderDesafio = () => (
  <>
    <CountdownTimer />
    <motion.header
      // eslint-disable-next-line max-len
      className={tw`flex flex-col items-center justify-center text-center pb-16 pt-8 bg-gradient-to-b from-yellow-50 to-white`}
      initial="hidden"
      animate="visible"
      variants={{ hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } }}
    >
      <motion.h1
        className={tw`text-2xl xl:text-4xl font-extrabold text-red-600 mb-4`}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      >
        Desafio 7 Dias para o Intestino Livre!
      </motion.h1>

      <Image
        src="/images/desafio-logo.png"
        alt="Logo Desafio 7 Dias"
        width={250}
        height={250}
        className={tw`my-6`}
        style={{ borderRadius: `50%` }}
        priority
      />
      <motion.h2 className={tw`text-2xl xl:text-4xl text-yellow-700 font-semibold px-8 mb-2`}>
        Restaure sua saúde intestinal de forma natural em apenas uma semana
      </motion.h2>
      <motion.span className={tw`text-gray-700 text-lg px-4`}>Um plano simples, eficaz e 100% natural</motion.span>
      <ParticlesComponent />
    </motion.header>
  </>
);

export default HeaderDesafio;
