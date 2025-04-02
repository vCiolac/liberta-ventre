import { useEffect } from 'react';
import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import { css } from 'twind/css';
import { motion } from 'framer-motion';
import useIntersectionObserver from '@/hooks/IntersectionObserver';
import { trackEvent } from '@/utils/trackEvent';

declare global {
  interface Window {
    fbq: (event: string, action: string, params?: Record<string, any>) => void;
  }
}

const checkStyle = css`
  max-height: 1.2rem;
  color: #16a34a;
  margin-right: 1.5rem;
  margin-left: 2rem;
`;

const PricingTableDesafio = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  useEffect(() => {
    if (isVisible) {
      trackEvent(`ScrollDepth`, {
        content_name: `Desafio 7 Dias`,
        event_label: `Visualizou a oferta do desafio`,
      });
    }
  }, [isVisible]);

  const trackCheckout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    trackEvent(`InitiateCheckout`, {
      content_name: `Desafio 7 Dias`,
      event_label: `Clicou para comprar - Kiwify`,
    });
    setTimeout(() => {
      window.location.href = `https://pay.kiwify.com.br/jmnji5M`;
    }, 300);
  };

  return (
    <section id="oferta" className={tw(`relative text-center bg-orange-50 pt-24 pb-10`)}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: `easeOut` }}
        className={tw(`relative z-10 max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl p-10`)}
      >
        <h2 className={tw(`text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6`)}>Participe do Desafio 7 Dias!</h2>
        <p className={tw(`text-gray-700 text-lg mb-4`)}>
          Adquira agora o <strong>e-book completo</strong> e receba <strong>acessos extras gratuitos</strong> para
          acelerar sua transformação.
        </p>

        <div className={tw(`bg-green-100 text-green-800 font-medium py-2 px-4 mb-4 rounded-lg`)}>
          🎁 <strong>Bônus:</strong> Mini-rotina matinal + Checklist Diário para Liberdade Intestinal 🎁
        </div>

        <h3 className={tw(`text-xl font-semibold text-gray-800 mb-4`)}>Você receberá:</h3>
        <ul className={tw(`space-y-3 mb-6 text-left mx-auto max-w-lg`)}>
          <li className={tw(`flex items-center`)}>
            <Check className={tw(checkStyle)} />
            <p className={tw(`text-gray-700 text-lg`)}>O plano do desafio com passo a passo para 7 dias</p>
          </li>
          <li className={tw(`flex items-center`)}>
            <Check className={tw(checkStyle)} />
            <p className={tw(`text-gray-700 text-lg`)}>Checklist diário para manter o foco e os resultados</p>
          </li>
          <li className={tw(`flex items-center`)}>
            <Check className={tw(checkStyle)} />
            <p className={tw(`text-gray-700 text-lg`)}>Mini e-book bônus: Receita da manhã + alimentos chave</p>
          </li>
        </ul>

        <div className={tw(`bg-orange-100 p-6 rounded-lg mb-10 text-center`)}>
          <p className={tw(`text-gray-500 text-lg line-through`)}>
            De <strong>R$89,00</strong>
          </p>
          <p className={tw(`text-gray-700 text-lg font-bold`)}>por apenas:</p>
          <p className={tw(`text-5xl font-extrabold text-green-600`)}>R$19,90</p>
          <p className={tw(`text-gray-700 text-lg mt-1`)}>ou em até 12x de R$2,40</p>
          <p className={tw(`text-red-600 font-semibold mt-1`)}>🔥 Válido somente por tempo limitado!</p>
        </div>

        <button
          type="button"
          onClick={trackCheckout}
          className={tw(`bg-green-600 text-white text-xl py-4 px-10 rounded-lg hover:bg-green-700 transition`)}
        >
          EU QUERO COMEÇAR O DESAFIO!
        </button>

        <div className={tw(`flex justify-center items-center space-x-4 mt-10 text-gray-500 text-sm`)}>
          <p>🔒 Compra Segura</p>
          <p>✔️ Garantia de Satisfação</p>
          <p>📱 Acesso Imediato</p>
        </div>
      </motion.div>
    </section>
  );
};

export default PricingTableDesafio;
