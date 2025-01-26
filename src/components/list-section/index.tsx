'use client';

import { tw } from 'twind';
import { motion } from 'framer-motion';
import FeatureSvg from '@/constants/svg/features.svg';
import { css } from 'twind/css';
import useIntersectionObserver from '@/hooks/IntersectionObserver';

const sectionStyle = css`
  background-color: #fff4f4;
  padding-bottom: 4rem;
  padding-top: 4rem;
`;

const listItems = [
  {
    title: `Soluções práticas`,
    description: `Dicas e técnicas naturais para combater a prisão de ventre de forma simples e eficaz.`,
  },
  {
    title: `Mudança de hábitos`,
    description: `Aprenda como pequenos ajustes na sua rotina podem melhorar sua saúde intestinal.`,
  },
  {
    title: `Resultados duradouros`,
    description: `Transforme sua qualidade de vida com estratégias que realmente funcionam.`,
  },
];

const ListSection = () => {
  const [listRef, isListVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [svgRef, isSvgVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className={tw(sectionStyle)}>
      <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h2 className={tw(`text-base text-yellow-600 font-semibold tracking-wide uppercase`)}>
            Benefícios do e-book
          </h2>
          <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
            Melhore sua saúde hoje
          </p>
        </div>
        <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
          <motion.div
            ref={listRef}
            initial={{ x: -100, opacity: 0 }}
            animate={isListVisible ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.6, ease: `easeOut` }}
            className={tw(`w-full lg:w-1/2 px-8`)}
          >
            <ul className={tw(`space-y-12`)}>
              {listItems.map((item, index) => (
                <li className={tw(`flex -mx-4`)} key={item.title}>
                  <div className={tw(`px-4`)}>
                    <span
                      className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-yellow-50 text-yellow-500`)}
                    >
                      {index + 1}
                    </span>
                  </div>
                  <div className={tw(`px-4`)}>
                    <h3 className={tw(`my-4 text-xl font-semibold`)}>{item.title}</h3>
                    <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            ref={svgRef}
            initial={{ x: 100, opacity: 0 }}
            animate={isSvgVisible ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 0.6, ease: `easeOut` }}
            className={tw(`w-full lg:w-1/2 px-8`)}
          >
            <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
              <FeatureSvg width="100%" height="100%" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ListSection;
