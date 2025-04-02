'use client';

import { tw } from 'twind';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { css } from 'twind/css';
import useIntersectionObserver from '@/hooks/IntersectionObserver';

const sectionStyle = css`
  padding-bottom: 4rem;
  padding-top: 4rem;
  background-color: #fff;
`;

const listItems = [
  {
    title: `Rotina guiada`,
    description: `Um plano simples com ações diárias para resultados consistentes e visíveis em uma semana.`,
    image: `/images/desafio-list-1.png`,
  },
  {
    title: `Transformação de hábitos`,
    description: `Pequenas mudanças que impulsionam a saúde digestiva e o bem-estar geral.`,
    image: `/images/desafio-list-2.png`,
  },
  {
    title: `Alívio natural`,
    description: `Soluções práticas sem remédios, respeitando o ritmo do seu corpo.`,
    image: `/images/desafio-list-3.png`,
  },
];

const ListSectionDesafio = () => {
  const imageRefs = listItems.map(() => useIntersectionObserver({ threshold: 0.2 }));

  return (
    <section className={tw(sectionStyle)}>
      <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
        <div className={tw(`mb-10 text-center`)}>
          <h2 className={tw(`text-sm text-green-600 font-bold tracking-wide uppercase`)}>Benefícios do desafio</h2>
          <p className={tw(`mt-2 pb-4 text-4xl lg:text-6xl font-bold tracking-tight text-gray-900`)}>
            Um novo começo em 7 dias
          </p>
        </div>

        <div className={tw(`grid md:grid-cols-2 gap-12 mt-10`)}>
          {listItems.map((item, index) => {
            const [ref, isVisible] = imageRefs[index];
            return (
              <motion.div
                key={item.title}
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={tw(`flex items-start space-x-6`)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  className={tw(`rounded-lg shadow-md`)}
                />
                <div>
                  <h3 className={tw(`text-xl font-semibold text-gray-800 mb-1`)}>{item.title}</h3>
                  <p className={tw(`text-gray-600`)}>{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ListSectionDesafio;
