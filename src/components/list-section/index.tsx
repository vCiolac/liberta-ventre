'use client';

import { tw } from 'twind';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { css } from 'twind/css';
import useIntersectionObserver from '@/hooks/IntersectionObserver';

const sectionStyle = css`
  padding-bottom: 4rem;
  padding-top: 4rem;
`;

const listItems = [
  {
    title: `Soluções práticas`,
    description: `Dicas e técnicas naturais para combater a prisão de ventre de forma simples e eficaz.`,
    image: `/images/list-1.png`,
  },
  {
    title: `Mudança de hábitos`,
    description: `Aprenda como pequenos ajustes na sua rotina podem melhorar sua saúde intestinal.`,
    image: `/images/list-2.png`,
  },
  {
    title: `Resultados duradouros`,
    description: `Transforme sua qualidade de vida com estratégias que realmente funcionam.`,
    image: `/images/list-3.png`,
  },
];

const ListSection = () => {
  const [listRef, isListVisible] = useIntersectionObserver({ threshold: 0.2 });
  const imageRefs = listItems.map(() => useIntersectionObserver({ threshold: 0.2 }));
  const [ref1, isVisible1] = useIntersectionObserver({ threshold: 0.2 });
  const [ref2, isVisible2] = useIntersectionObserver({ threshold: 0.2 });
  const [ref3, isVisible3] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className={tw(sectionStyle)}>
      <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
        <div className={tw(`mb-10 text-center`)}>
          <h2 className={tw(`text-base text-yellow-600 font-semibold tracking-wide uppercase`)}>
            Benefícios do e-book
          </h2>
          <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
            Melhore sua saúde hoje
          </p>
        </div>

        {/* Container desktop */}
        <div className={tw(`hidden md:flex flex-wrap mx-8 items-center`)}>
          <motion.div
            ref={listRef}
            initial={{ x: -100, opacity: 0 }}
            animate={isListVisible ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.6, ease: `easeOut` }}
            className={tw(`w-full lg:w-1/2 pl-16`)}
          >
            <ul className={tw(`space-y-12`)}>
              {listItems.map((item, index) => (
                <li className={tw(`flex mx-4`)} key={item.title.replace(/\s+/g, `-`)}>
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
          <div className={tw(`w-full lg:w-1/2 pl-16 flex flex-col items-center justify-center`)}>
            {listItems.map((item, index) => {
              const [ref, isVisible] = imageRefs[index];
              return (
                <motion.div
                  ref={ref}
                  key={item.title.replace(/\s+/g, `-`)}
                  initial={{ x: 100, opacity: 0 }}
                  animate={isVisible ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                  transition={{ duration: 0.6 + index * 0.2, ease: `easeOut` }}
                  className={tw(`relative w-48 h-48 lg:pt-6`)}
                >
                  <Image src={item.image} alt={item.title} width={180} height={180} className={tw(` object-cover`)} />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Container mobile */}
        <div className={tw(`flex md:hidden flex-wrap items-center`)}>
          {/* BLOCO 1 */}
          <div className={tw(`flex flex-col lg:flex-row items-center`)}>
            <motion.div
              ref={ref1}
              initial={{ x: 100, opacity: 0 }}
              animate={isVisible1 ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
              transition={{ duration: 0.6, ease: `easeOut` }}
              className={tw(`relative w-48 lg:w-64 lg:h-64 px-4 lg:px-0 mb-6 lg:my-0 lg:order-2 lg:pt-10`)}
            >
              <Image src="/images/list-1.png" alt="Soluções práticas" width={180} height={180} />
            </motion.div>
            <div className={tw(`text-center lg:text-left lg:px-8`)}>
              <span
                className={tw(
                  `flex w-16 h-16 mx-auto lg:mx-0 items-center justify-center text-2xl font-bold 
                  rounded-full bg-yellow-50 text-yellow-500`,
                )}
              >
                1
              </span>
              <h3 className={tw(`my-4 text-xl font-semibold`)}>Soluções práticas</h3>
              <p className={tw(`text-gray-500 leading-loose`)}>
                Dicas e técnicas naturais para combater a prisão de ventre de forma simples e eficaz.
              </p>
            </div>
          </div>

          {/* BLOCO 2 */}
          <div className={tw(`flex flex-col items-center`)}>
            <motion.div
              ref={ref2}
              initial={{ x: 100, opacity: 0 }}
              animate={isVisible2 ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
              transition={{ duration: 0.8, ease: `easeOut` }}
              className={tw(`relative w-48 px-4 my-6`)}
            >
              <Image src="/images/list-2.png" alt="Mudança de hábitos" width={180} height={180} />
            </motion.div>
            <div className={tw(`text-center px-4`)}>
              <span
                className={tw(
                  `flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold 
                  rounded-full bg-yellow-50 text-yellow-500`,
                )}
              >
                2
              </span>
              <h3 className={tw(`my-4 text-xl font-semibold`)}>Mudança de hábitos</h3>
              <p className={tw(`text-gray-500 leading-loose`)}>
                Aprenda como pequenos ajustes na sua rotina podem melhorar sua saúde intestinal.
              </p>
            </div>
          </div>

          {/* BLOCO 3 - Centralizado abaixo */}
          <div
            className={tw(
              `flex flex-col
              items-center justify-center`,
            )}
          >
            <motion.div
              ref={ref3}
              initial={{ x: 100, opacity: 0 }}
              animate={isVisible3 ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
              transition={{ duration: 1, ease: `easeOut` }}
              className={tw(`relative w-48 px-4 my-6`)}
            >
              <Image src="/images/list-3.png" alt="Resultados duradouros" width={180} height={180} />
            </motion.div>
            <div className={tw(`text-center px-4`)}>
              <span
                className={tw(
                  `flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold 
                  rounded-full bg-yellow-50 text-yellow-500`,
                )}
              >
                3
              </span>
              <h3 className={tw(`my-4 text-xl font-semibold`)}>Resultados duradouros</h3>
              <p className={tw(`text-gray-500 leading-loose`)}>
                Transforme sua qualidade de vida com estratégias que realmente funcionam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListSection;
