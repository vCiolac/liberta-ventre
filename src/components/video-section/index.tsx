import { tw } from 'twind';
import { motion } from 'framer-motion';
import VideoEmbed from '../video-player/VideoEmbed';

const VideoSection = () => {
  const handlePlayVideo = () => {
    window.fbq(`track`, `Lead`, {
      content_name: `Vídeo da Oferta`,
      event_label: `Usuário assistiu ao vídeo`,
    });
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
            <VideoEmbed onPlay={handlePlayVideo} />
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
          Descubra como o <span className={tw(`text-yellow-600`)}>Manual da Capitã Liberta-Ventre </span>
          pode transformar sua saúde e bem-estar de forma natural!
        </motion.h3>
      </div>
    </section>
  );
};

export default VideoSection;
