'use client';

import { tw } from 'twind';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Quote from '@/constants/svg/quote.svg';
import useIntersectionObserver from '@/hooks/IntersectionObserver';
import CountUpSection from '../countup/CountUpSection';

const socialProofs = [
  {
    id: 1,
    name: `Ana Clara`,
    company: `Cliente satisfeita`,
    image: `/images/client-3.png`,
    text: `Com as dicas da Capitã Liberta-Ventre, minha vida mudou completamente.
    Hoje me sinto mais leve, saudável e confiante. Recomendo a todas as mulheres
    que buscam uma solução natural e eficaz.`,
  },
  {
    id: 2,
    name: `Juliana Martins`,
    company: `Cliente transformada`,
    image: `/images/client-2.png`,
    text: `Achei que nunca encontraria uma solução para o meu desconforto.
    Graças ao manual, finalmente consegui resultados incríveis de forma
    simples e prática.`,
  },
  {
    id: 3,
    name: `Carolina Silva`,
    company: `Leitora encantada`,
    image: `/images/client-1.png`,
    text: `O manual da Capitã Liberta-Ventre é tudo o que eu precisava!
    Com dicas fáceis de implementar, minha saúde melhorou em poucos dias.`,
  },
];

const SocialProof = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  const handleNavigation = (direction: 'next' | 'prev') => {
    setCurrentIndex((prevIndex) => {
      if (direction === `next`) {
        return (prevIndex + 1) % socialProofs.length; // Loop para o início
      }
      return (prevIndex - 1 + socialProofs.length) % socialProofs.length; // Loop para o final
    });
  };

  return (
    <section className={tw(`py-16 flex flex-col items-center`)}>
      <Image src="/images/womans.png" alt="Social Proof" width={350} height={250} className={tw(`mb-8`)} />
      <CountUpSection />
      <div className={tw(`container mx-auto max-w-4xl p-4`)} ref={ref}>
        <motion.h2
          className={tw(`text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12`)}
          initial={{ opacity: 0, y: -50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          O que as leitoras estão dizendo
        </motion.h2>
        <motion.div
          className={tw(`bg-white rounded-lg shadow-md px-6 pt-12 pb-4 relative`)}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          <Quote className={tw(`w-10 h-10 text-yellow-500 absolute -top-0 left-5`)} />
          <p className={tw(`text-gray-700 text-lg italic mb-6 leading-relaxed`)}>
            &ldquo;{socialProofs[currentIndex].text}&rdquo;
          </p>
          <div className={tw(`flex items-center`)}>
            <motion.img
              src={socialProofs[currentIndex].image}
              alt={socialProofs[currentIndex].name}
              className={tw(`h-16 w-16 rounded-full shadow-lg`)}
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            />
            <div className={tw(`ml-4`)}>
              <motion.h3
                className={tw(`text-gray-900 font-bold text-xl`)}
                initial={{ opacity: 0, x: 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {socialProofs[currentIndex].name}
              </motion.h3>
              <p className={tw(`text-gray-500 text-sm`)}>{socialProofs[currentIndex].company}</p>
            </div>
          </div>
          <div className={tw(`flex justify-between mt-8`)}>
            <motion.button
              type="button"
              onClick={() => handleNavigation(`prev`)}
              className={tw(`p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none`)}
              aria-label="Previous"
              initial={{ opacity: 0, scale: 0 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={tw(`h-6 w-6 text-gray-600`)}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <polyline points="15 6 9 12 15 18" />
              </svg>
            </motion.button>
            <motion.button
              type="button"
              onClick={() => handleNavigation(`next`)}
              className={tw(`p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none`)}
              aria-label="Next"
              initial={{ opacity: 0, scale: 0 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={tw(`h-6 w-6 text-gray-600`)}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
