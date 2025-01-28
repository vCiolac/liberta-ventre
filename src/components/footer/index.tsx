import Link from 'next/link';
import { tw } from 'twind';

const Footer = () => (
  <footer className={tw(`bg-white border-t border-gray-200 py-6`)}>
    <div className={tw(`max-w-7xl mx-auto px-6 lg:px-12`)}>
      <div className={tw(`flex flex-col lg:flex-row items-center justify-between mb-8`)}>
        <div className={tw(`flex items-center mb-6 lg:mb-0`)}>
          <img src="/images/logo2.png" alt="Logo Capitã Liberta Ventre" className={tw(`h-12 w-12 mr-3`)} />
          <span className={tw(`text-xl font-bold text-gray-800`)}>Capitã Liberta Ventre</span>
        </div>

        <div className={tw(`flex space-x-4 items-center mb-6 lg:mb-0`)}>
          <img src="/images/compra-segura.png" alt="Pagamento Seguro" className={tw(`h-20 w-auto`)} />
          <img src="/images/selossl.png" alt="Site Verificado" className={tw(`h-10 w-auto`)} />
        </div>

        <p className={tw(`text-sm text-gray-500 text-center lg:text-right`)}>
          Transformando vidas com saúde natural e acessível.
        </p>
      </div>

      <div className={tw(`text-center text-xs text-gray-400 mt-8`)}>
        © 2025 Capitã Liberta Ventre. Todos os direitos reservados.
        <span className={tw(`block mt-2`)}>
          Site desenvolvido por{` `}
          <Link href="https://www.vciolac.com.br" className={tw(`text-gray-500 hover:text-gray-700`)}>
            Victor Ciolac
          </Link>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
