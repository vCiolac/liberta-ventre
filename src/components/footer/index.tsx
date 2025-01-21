import Link from 'next/link';
import { tw } from 'twind';

const Footer = () => (
  <footer className={tw(`bg-white border-t border-gray-200 py-8`)}>
    <div className={tw(`max-w-7xl mx-auto px-6 lg:px-12`)}>
      <div className={tw(`flex flex-col md:flex-row items-center justify-between mb-8`)}>
        <div className={tw(`flex items-center mb-6 md:mb-0`)}>
          <img src="logo.svg" alt="Logo Capitã Liberta Ventre" className={tw(`h-12 w-12 mr-3`)} />
          <span className={tw(`text-xl font-bold text-gray-800`)}>Capitã Liberta Ventre</span>
        </div>
        <p className={tw(`text-sm text-gray-500 text-center md:text-right`)}>
          Transformando vidas com saúde natural e acessível.
        </p>
      </div>

      <div className={tw(`grid grid-cols-1 md:grid-cols-2 gap-8 items-center`)}>
        <div className={tw(`flex flex-row md:space-y-4 items-center md:items-start justify-center md:justify-start`)}>
          <div className={tw(`flex items-center`)}>
            <img src="/images/compra-segura.png" alt="Pagamento Seguro" className={tw(`h-20 w-40`)} />
          </div>
          <div className={tw(`flex items-center`)}>
            <img src="/images/selossl.png" alt="Site Verificado" className={tw(`h-10 w-24`)} />
          </div>
        </div>

        <div className={tw(`flex flex-col space-y-4 items-center md:items-end`)}>
          <div className={tw(`flex items-center hidden md:flex`)}>
            <img src="/images/credit-card.svg" alt="Aceitamos Cartões" className={tw(`h-10 w-10`)} />
            <p className={tw(`ml-4 text-sm text-gray-500`)}>Aceitamos Cartões</p>
          </div>
          <div className={tw(`flex flex-wrap gap-2 mt-2`)}>
            <img src="/images/mc.svg" alt="MasterCard" className={tw(`h-8 w-12`)} />
            <img src="/images/visa.svg" alt="Visa" className={tw(`h-8 w-12`)} />
            <img src="/images/hipercard.svg" alt="Hipercard" className={tw(`h-8 w-12`)} />
            <img src="/images/elo.svg" alt="Elo" className={tw(`h-8 w-12`)} />
            <img src="/images/amex.svg" alt="American Express" className={tw(`h-8 w-12`)} />
            <img src="/images/pix.svg" alt="Pix" className={tw(`h-8 w-12`)} />
          </div>
        </div>
      </div>

      <div className={tw(`text-center text-xs text-gray-400 mt-8`)}>
        © 2025 Capitã Liberta Ventre. Todos os direitos reservados.
        <span className={tw(`block mt-2`)}>
          Site desenvolvido por{` `}
          <Link style={{ color: `#56382d9d` }} href="https://www.vciolac.com.br">
            Victor Ciolac{` `}
          </Link>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
