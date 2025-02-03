'use client';

import { tw } from 'twind';
import { motion } from 'framer-motion';
import Check from '@/constants/svg/check.svg';
import useIntersectionObserver from '@/hooks/IntersectionObserver';

const features = [
  {
    id: 1,
    title: `Conteúdo acessível`,
    description: `Escrito de forma simples e prática, ideal para todas as idades.`,
  },
  {
    id: 2,
    title: `Soluções naturais`,
    description: `Focado em métodos naturais e sem efeitos colaterais.`,
  },
  {
    id: 3,
    title: `Resultados garantidos`,
    description: `Baseado em práticas que já transformaram a vida de milhares de mulheres.`,
  },
  {
    id: 4,
    title: `Aprovado por especialistas`,
    description: `Criado com a colaboração de profissionais da área de saúde.`,
  },
  {
    id: 5,
    title: `Abordagem inovadora`,
    description: `Métodos exclusivos para combater a constipação e melhorar sua qualidade de vida.`,
  },
  {
    id: 6,
    title: `Guia detalhado`,
    description: `Passo a passo para adotar mudanças que realmente fazem a diferença.`,
  },
];

const FeatureSection = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section className={tw(`bg-white pb-0`)}>
      <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-6`)}>
        <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
          <div className={tw(`mb-16 text-center`)}>
            <h4 className={tw(`text-base text-yellow-600 font-semibold tracking-wide uppercase`)}>Diferenciais</h4>
            <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
              Por que escolher o manual
            </p>
          </div>
          <div className={tw(`flex flex-wrap my-12`)} ref={ref}>
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className={tw(
                  `w-full border-b md:w-1/2 md:border-r lg:w-1/3 ${feature.id > 3 ? `lg:border-b-0` : ``} p-8`,
                )}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2, ease: `easeOut` }}
              >
                <div className={tw(`flex items-center mb-6`)}>
                  <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-yellow-500`)} />
                  <div className={tw(`ml-4 text-xl`)}>{feature.title}</div>
                </div>
                <p className={tw(`leading-loose text-gray-500`)}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
