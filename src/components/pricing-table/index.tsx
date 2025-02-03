import { useEffect } from 'react';
import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Button from '@/components/button';
import { css } from 'twind/css';
import { motion } from 'framer-motion';
import useIntersectionObserver from '@/hooks/IntersectionObserver';

declare global {
  interface Window {
    fbq: (event: string, action: string) => void;
  }
}

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

const buttonStyle = css`
  background-color: #008000;
  color: #fff;
  border-color: #008000;
  font-weight: 700;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  cursor: pointer;
  &:hover {
    background-color: #006400;
    border-color: #006400;
  }
`;

const PricingTable = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  useEffect(() => {
    if (isVisible) {
      window.fbq(`track`, `ViewContent`);
    }
  }, [isVisible]);

  const trackCheckout = () => {
    window.fbq(`track`, `InitiateCheckout`);
  };

  return (
    <section className={tw(`max-w-3xl mt-6 mx-auto bg-white shadow-xl rounded-lg text-center`)}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: `easeOut` }}
        className={tw(`p-8`)}
      >
        <h2 className={tw(`text-4xl lg:text-6xl font-extrabold text-gray-800 mb-8`)}>Transforme sua vida hoje!</h2>
        <p className={tw(`text-gray-700 text-lg mb-4`)}>
          Adquira agora o <strong>Manual da Capitã Liberta-Ventre</strong> e receba um
          <strong> e-book bônus exclusivo!</strong>
        </p>
        <div className={tw(`bg-yellow-200 text-yellow-900 font-semibold py-2 px-4 mb-4 rounded-lg`)}>
          🎁 <strong>Bônus Especial:</strong> Leve um <strong>e-book extra grátis</strong> na compra! 🎁
        </div>
        <h3 className={tw(`text-xl font-bold text-gray-800 mb-4`)}>O que você vai receber:</h3>
        <ul className={tw(`space-y-3 mb-6 text-left mx-auto max-w-lg`)}>
          {features.map((feature) => (
            <li className={tw(`flex items-center`)} key={feature}>
              <Check className={tw(checkStyle)} />
              <p className={tw(`text-gray-700 text-lg`)}>{feature}</p>
            </li>
          ))}
        </ul>
        <div className={tw(`bg-gray-100 p-4 rounded-lg mb-6`)}>
          <p className={tw(`text-gray-500 text-lg line-through`)}>
            De <strong>R$169,00</strong>
          </p>
          <p className={tw(`text-6xl font-extrabold text-green-600`)}>R$57,00</p>
        </div>

        <Button primary modifier="mt-6" className={tw(buttonStyle)} onClick={trackCheckout}>
          COMPRAR AGORA!
        </Button>
        <p className={tw(`text-sm text-gray-500 mt-4`)}>🚀 Acesso imediato e pagamento 100% seguro!</p>
      </motion.div>
    </section>
  );
};

export default PricingTable;
