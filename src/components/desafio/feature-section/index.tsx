'use client';

import { tw } from 'twind';
import { motion } from 'framer-motion';
import Check from '@/constants/svg/check.svg';
import useIntersectionObserver from '@/hooks/IntersectionObserver';

const features = [
  {
    id: 1,
    title: `Descomplicado`,
    description: `O desafio é fácil de seguir e pode ser aplicado mesmo na rotina mais corrida.`,
  },
  {
    id: 2,
    title: `Sem remédios`,
    description: `Foco total em estratégias naturais, seguras e sem contraindicações.`,
  },
  {
    id: 3,
    title: `Resultados reais`,
    description: `Criado com base em experiências reais e testado com dezenas de mulheres.`,
  },
  {
    id: 4,
    title: `Método aprovado`,
    description: `Conteúdo alinhado com orientações de nutricionistas e educadores em saúde.`,
  },
  {
    id: 5,
    title: `Impacto imediato`,
    description: `Já nos primeiros dias você começa a sentir o corpo mais leve e em equilíbrio.`,
  },
  {
    id: 6,
    title: `Transformação completa`,
    description: `Não é só sobre intestino: é sobre liberdade, autoestima e bem-estar.`,
  },
];

const FeatureSectionDesafio = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className={tw(`bg-yellow-50 pb-12`)}>
      <div className={tw(`max-w-7xl mx-auto px-6 py-12`)}>
        <div className={tw(`text-center mb-12`)}>
          <h4 className={tw(`text-sm text-green-700 font-semibold uppercase tracking-wide`)}>O que torna único</h4>
          <p className={tw(`mt-2 text-4xl lg:text-5xl font-bold text-gray-800`)}>Por que escolher o Desafio 7 Dias</p>
        </div>

        <div className={tw(`flex flex-wrap`)} ref={ref}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className={tw(`w-full md:w-1/2 lg:w-1/3 p-6`)}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2, ease: `easeOut` }}
            >
              <div className={tw(`flex items-start mb-4`)}>
                <Check width={24} height={24} className={tw(`text-green-600 mr-3`)} />
                <h5 className={tw(`text-lg font-semibold text-gray-800`)}>{feature.title}</h5>
              </div>
              <p className={tw(`text-gray-600 leading-relaxed`)}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSectionDesafio;
