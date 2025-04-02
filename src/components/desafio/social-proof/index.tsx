'use client';

import { tw } from 'twind';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Quote from '@/constants/svg/quote.svg';
import useIntersectionObserver from '@/hooks/IntersectionObserver';

const testimonials = [
  {
    name: `Vanessa Rocha`,
    label: `Participante do desafio`,
    image: `/images/client-desafio-1.png`,
    text: `Segui o desafio por 7 dias e meu intestino nunca funcionou tão bem. É fácil, natural e realmente eficaz!`,
  },
  {
    name: `Patrícia Gomes`,
    label: `Conquistou liberdade intestinal`,
    image: `/images/client-desafio-2.png`,
    text: `Eu sofria com constipação há anos. Em poucos dias, tudo mudou. Recomendo muito!`,
  },
  {
    name: `Letícia Mello`,
    label: `Transformada em 7 dias`,
    image: `/images/client-desafio-3.png`,
    // eslint-disable-next-line max-len
    text: `Nunca pensei que algo tão simples fosse tão transformador. O Desafio 7 Dias mudou minha relação com meu corpo.`,
  },
];

const SocialProofDesafio = () => {
  const [current, setCurrent] = useState(0);
  const [ref, visible] = useIntersectionObserver({ threshold: 0.2 });

  const switchTestimonial = (dir: 'next' | 'prev') => {
    setCurrent((i) =>
      dir === `next` ? (i + 1) % testimonials.length : (i - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className={tw`py-16 flex flex-col items-center bg-gray-50`}>
      <Image
        src="/images/womans.png"
        alt="Mulheres que participaram"
        width={300}
        height={200}
        className={tw`mb-8`}
        priority
      />
      <div className={tw`container mx-auto max-w-3xl p-4`} ref={ref}>
        <motion.h2
          className={tw`text-center text-3xl font-bold text-gray-800 mb-10`}
          initial={{ opacity: 0, y: -50 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Depoimentos reais de transformação:
        </motion.h2>
        <motion.div
          className={tw`bg-white rounded-xl shadow-lg px-6 pt-10 pb-6 relative`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={visible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Quote className={tw`w-10 h-10 text-yellow-500 absolute -top-4 left-4`} />
          <p className={tw`text-gray-700 text-lg italic mb-6 leading-relaxed`}>
            &ldquo;{testimonials[current].text}&rdquo;
          </p>
          <div className={tw`flex items-center`}>
            <motion.img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className={tw`h-16 w-16 rounded-full shadow-md`}
              initial={{ opacity: 0, x: -30 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            />
            <div className={tw`ml-4`}>
              <h3 className={tw`text-gray-900 font-semibold text-xl`}>{testimonials[current].name}</h3>
              <p className={tw`text-gray-500 text-sm`}>{testimonials[current].label}</p>
            </div>
          </div>
          <div className={tw`flex justify-between mt-8`}>
            <motion.button
              type="button"
              onClick={() => switchTestimonial(`prev`)}
              className={tw(`p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none`)}
              aria-label="Previous"
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
              onClick={() => switchTestimonial(`next`)}
              className={tw(`p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none`)}
              aria-label="Next"
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

export default SocialProofDesafio;
