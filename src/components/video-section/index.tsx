import { useState } from 'react';
import { tw } from 'twind';
import { motion } from 'framer-motion';
import VideoEmbed from '../video-player/VideoEmbed';

const VideoSection = () => {
  const [showCTA, setShowCTA] = useState(false);

  // 🔹 Função para rolar suavemente até a oferta
  const scrollToOffer = () => {
    const offerSection = document.getElementById(`oferta`);
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: `smooth` });
      setShowCTA(false);
    }
  };

  return (
    <section>
      <div className={tw(`max-w-7xl mx-auto`)}>
        <div id="vsl" className={tw(`flex flex-col max-w-4xl mx-auto pt-8`)}>
          <motion.div
            className={tw(`relative shadow-2xl mx-6 lg:mx-0`)}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: `easeOut` }}
          >
            <VideoEmbed onCTAOpen={() => setShowCTA(true)} />
          </motion.div>
        </div>
      </div>

      <div className={tw(`text-center mt-6`)}>
        <motion.h3
          className={tw(`text-2xl font-semibold text-gray-700 px-16 pt-8`)}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: `easeOut` }}
        >
          Descubra como o <span className={tw(`text-yellow-600`)}>Manual da Capitã Liberta-Ventre</span>
          pode transformar sua saúde e bem-estar de forma natural!
        </motion.h3>
      </div>

      {/* 🔥 POP-UP CTA 🔥 */}
      {showCTA && (
        <div
          className={tw(
            `fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-50`,
          )}
        >
          <div className={tw(`bg-white p-6 rounded-lg shadow-lg text-center`)}>
            <h2 className={tw(`text-2xl font-bold mb-4`)}>🚀 Oferta Especial!</h2>
            <p className={tw(`text-lg`)}>Aproveite agora antes que acabe!</p>
            <button
              type="button"
              onClick={scrollToOffer}
              className={tw(`bg-green-500 text-white py-2 px-6 rounded-lg mt-4 hover:bg-green-700 transition`)}
            >
              VER OFERTA AGORA!
            </button>
            <button
              type="button"
              onClick={() => setShowCTA(false)}
              className={tw(`mt-4 block text-gray-500 hover:text-gray-700`)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
