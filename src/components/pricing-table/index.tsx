import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Button from '@/components/button';
import { css } from 'twind/css';
import { motion } from 'framer-motion';
import useIntersectionObserver from '@/hooks/IntersectionObserver';

const features = [
  `Conteúdo acessível e prático`,
  `Soluções naturais e sem efeitos colaterais`,
  `Resultados comprovados por milhares de mulheres`,
  `Aprovado por especialistas em saúde`,
  `Abordagem inovadora contra a constipação`,
  `Guia detalhado com passo a passo`,
  `Dicas para melhorar sua qualidade de vida`,
  `Métodos exclusivos e eficazes`,
];

const checkStyle = css`
  max-height: 1.2rem;
  color: #d69e2e;
  margin-right: 1rem;
`;

const PricingTable = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section>
      <motion.div
        className={tw(`relative max-w-7xl mx-auto mb-24`)}
        ref={ref}
        initial={{ opacity: 0, x: 100 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.8, ease: `easeOut` }}
      >
        <motion.div
          className={tw(
            `overflow-hidden lg:max-w-none lg:flex shadow-xl rounded-lg 
          bg-gradient-to-b from-yellow-100 via-white to-yellow-50`,
          )}
          initial={{ scale: 0.9 }}
          animate={isVisible ? { scale: 1 } : { scale: 0.9 }}
          transition={{ duration: 0.6, ease: `easeOut` }}
        >
          <div className={tw(`py-8 px-6 md:px-8 bg-yellow-50 lg:flex-shrink-1`)}>
            <h2 className={tw(`text-4xl lg:text-6xl font-extrabold text-gray-800 mb-8`)}>Transforme sua vida hoje!</h2>
            <p className={tw(`text-lg leading-7 text-gray-700 mb-8`)}>
              Descubra como o e-book &quot;Capitã Liberta-Ventre&quot; pode ajudá-la a superar a constipação de forma
              natural e eficaz. Com métodos comprovados e aprovados por especialistas, você estará no caminho para uma
              vida mais saudável e confortável.
            </p>
            <div>
              <h3 className={tw(`text-base font-semibold text-yellow-600 uppercase mb-4 tracking-wide`)}>
                O que você vai encontrar:
              </h3>
              <ul className={tw(`space-y-4 lg:grid lg:grid-cols-2 lg:gap-x-6`)}>
                {features.map((feature) => (
                  <li className={tw(`flex items-center`)} key={feature}>
                    <Check className={tw(checkStyle)} />
                    <p className={tw(`text-gray-700 text-base md:w-72`)}>{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className={tw(
              `py-12 px-4 bg-white text-center lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center rounded-lg`,
            )}
          >
            <h3 className={tw(`text-2xl font-bold text-gray-800 mb-4`)}>Aproveite a oferta</h3>
            <p className={tw(`text-6xl font-extrabold text-yellow-600 mb-6`)}>R$19,90</p>
            <p className={tw(`text-gray-500 text-base mb-6`)}>
              Um guia completo para transformar sua saúde. Pagamento seguro e acesso imediato.
            </p>
            <Button primary modifier="mt-6">
              Compre Agora
            </Button>
            <p className={tw(`text-sm text-gray-400 mt-4`)}>*Oferta válida por tempo limitado.</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PricingTable;
