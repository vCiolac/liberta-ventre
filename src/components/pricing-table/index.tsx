import { useEffect } from 'react';
import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import { css } from 'twind/css';
import { motion } from 'framer-motion';
import useIntersectionObserver from '@/hooks/IntersectionObserver';

declare global {
  interface Window {
    fbq: (event: string, action: string, params?: Record<string, any>) => void;
  }
}

const checkStyle = css`
  max-height: 1.2rem;
  color: #d69e2e;
  margin-right: 1.5rem;
  margin-left: 2rem;
`;

const shapeDividerStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
`;

const PricingTable = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  useEffect(() => {
    if (isVisible) {
      window.fbq(`track`, `RolouTodaPagina`, {
        content_name: `Página de Venda`,
        event_label: `Visualizou a oferta`,
      });
    }
  }, [isVisible]);

  const trackCheckout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.fbq(`track`, `ClicouKiwify`, {
      content_name: `Página de Venda`,
      event_label: `Clicou para comprar - Redirecionado para Kiwify`,
    });
    setTimeout(() => {
      window.location.href = `https://pay.kiwify.com.br/jmnji5M`;
    }, 300);
  };

  return (
    <section
      id="oferta"
      className={tw(`relative text-center bg-center bg-no-repeat pt-24`)}
      style={{
        backgroundImage: `url('/images/bg_woman.jpeg')`,
        backgroundSize: `120% auto`,
      }}
    >
      <div className={tw(shapeDividerStyle)}>
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#ffffff"
            // eslint-disable-next-line max-len
            d="M0,70L48,90C96,110,192,145,288,155C384,165,480,140,576,120C672,100,768,80,864,72C960,64,1056,75,1152,95C1248,115,1344,145,1392,160L1440,175L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: `easeOut` }}
        className={tw(`relative z-10 max-w-3xl mx-auto bg-white shadow-xl rounded-lg p-8`)}
      >
        <h2 className={tw(`text-4xl lg:text-6xl font-extrabold text-gray-800 mb-8`)}>Transforme sua vida hoje!</h2>

        <p className={tw(`text-gray-700 text-lg mb-4`)}>
          Adquira agora o <strong>Manual da Capitã Liberta-Ventre</strong> e receba{` `}
          <strong>dois e-books bônus gratuitos!</strong>
        </p>

        <div className={tw(`bg-yellow-200 text-yellow-900 font-semibold py-2 px-4 mb-4 rounded-lg`)}>
          🎁 <strong>Bônus Especial:</strong>
          {` `}
          <span className={tw(`underline`)}>Receitas Poderosas para um Intestino Saudável</span> +{` `}
          <span className={tw(`underline`)}>Como Colocar Tudo em Prática: Rotina Simples e Eficiente</span>! 🎁
        </div>

        <h3 className={tw(`text-xl font-bold text-gray-800 mb-4`)}>O que você vai receber:</h3>
        <ul className={tw(`space-y-3 mb-6 text-left mx-auto max-w-lg `)}>
          <li className={tw(`flex items-center`)}>
            <Check className={tw(checkStyle)} />
            <p className={tw(`text-gray-700 text-lg`)}>Manual completo para aliviar a constipação naturalmente</p>
          </li>
          <li className={tw(`flex items-center`)}>
            <Check className={tw(checkStyle)} />
            <p className={tw(`text-gray-700 text-lg`)}>Dois e-books bônus com estratégias práticas</p>
          </li>
          <li className={tw(`flex items-center`)}>
            <Check className={tw(checkStyle)} />
            <p className={tw(`text-gray-700 text-lg`)}>Acesso imediato e suporte exclusivo</p>
          </li>
        </ul>

        <div className={tw(`bg-gray-100 p-6 rounded-lg mb-12 text-center`)}>
          <p className={tw(`text-gray-500 text-lg line-through`)}>
            De <strong>R$169,00</strong>
          </p>
          <p className={tw(`text-gray-700 text-lg font-bold`)}>por:</p>
          <p className={tw(`text-6xl font-extrabold text-green-600`)}>R$57,00</p>
          <p className={tw(`text-gray-700 text-lg mt-2`)}>
            Ou 12x de <strong>R$5,72</strong>
          </p>
          <p className={tw(`text-red-600 font-semibold mt-1`)}>🔥 Promoção por tempo limitado!</p>
        </div>
        <button
          type="button"
          onClick={trackCheckout}
          className={tw(`bg-green-500 text-white text-lg py-4 px-10 rounded-lg mt-4 hover:bg-green-700 transition`)}
        >
          QUERO COMEÇAR AGORA!
        </button>
        <div className={tw(`flex justify-center items-center space-x-4 mt-12 text-gray-500 text-sm`)}>
          <p>🔒 Compra Segura</p>
          <p>✔️ Satisfação Garantida</p>
          <p>🔐 Privacidade Protegida</p>
        </div>
      </motion.div>
    </section>
  );
};

export default PricingTable;
