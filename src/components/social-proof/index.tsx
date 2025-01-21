import { tw } from 'twind';
import { useState } from 'react';
import Quote from '@/constants/svg/quote.svg';

const socialProofs = [
  {
    id: 1,
    name: `Ana Clara`,
    company: `Cliente satisfeita`,
    image: `/images/social-1.webp`,
    text: `Com as dicas da Capitã Liberta Ventre, minha vida mudou completamente.
    Hoje me sinto mais leve, saudável e confiante. Recomendo a todas as mulheres
    que buscam uma solução natural e eficaz.`,
  },
  {
    id: 2,
    name: `Juliana Martins`,
    company: `Cliente transformada`,
    image: `/images/social-2.webp`,
    text: `Achei que nunca encontraria uma solução para o meu desconforto.
    Graças ao manual, finalmente consegui resultados incríveis de forma
    simples e prática.`,
  },
  {
    id: 3,
    name: `Carolina Silva`,
    company: `Leitora encantada`,
    image: `/images/social-3.webp`,
    text: `O manual da Capitã Liberta Ventre é tudo o que eu precisava!
    Com dicas fáceis de implementar, minha saúde melhorou em poucos dias.`,
  },
];

const SocialProof = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigation = (direction: 'next' | 'prev') => {
    setCurrentIndex((prevIndex) => {
      if (direction === `next`) {
        return (prevIndex + 1) % socialProofs.length; // Loop para o início
      }
      return (prevIndex - 1 + socialProofs.length) % socialProofs.length; // Loop para o final
    });
  };

  return (
    <section className={tw(`bg-gradient-to-b from-gray-400 to-[#56382D] py-16`)}>
      <div className={tw(`container mx-auto max-w-4xl p-4`)}>
        <h2 className={tw(`text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12`)}>
          O que as leitoras estão dizendo
        </h2>
        <div className={tw(`bg-white rounded-lg shadow-md px-6 pt-12 pb-4 relative`)}>
          <Quote className={tw(`w-10 h-10 text-yellow-500 absolute -top-0 left-5`)} />
          <p className={tw(`text-gray-700 text-lg italic mb-6 leading-relaxed`)}>
            &ldquo;{socialProofs[currentIndex].text}&rdquo;
          </p>
          <div className={tw(`flex items-center`)}>
            <img
              src={socialProofs[currentIndex].image}
              alt={socialProofs[currentIndex].name}
              className={tw(`h-16 w-16 rounded-full shadow-lg`)}
            />
            <div className={tw(`ml-4`)}>
              <h3 className={tw(`text-gray-900 font-bold text-xl`)}>{socialProofs[currentIndex].name}</h3>
              <p className={tw(`text-gray-500 text-sm`)}>{socialProofs[currentIndex].company}</p>
            </div>
          </div>
          <div className={tw(`flex justify-between mt-8`)}>
            <button
              type="button"
              onClick={() => handleNavigation(`prev`)}
              className={tw(`p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none`)}
              aria-label="Previous"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={tw(`h-6 w-6 text-gray-600`)}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <polyline points="15 6 9 12 15 18" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => handleNavigation(`next`)}
              className={tw(`p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none`)}
              aria-label="Next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={tw(`h-6 w-6 text-gray-600`)}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
