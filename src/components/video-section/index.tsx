import { tw } from 'twind';
import Preferences from '@/constants/svg/preferences.svg';
import Play from '@/constants/svg/play.svg';

const PlayButton = () => (
  <button
    type="button"
    className={tw(
      `w-64 lg:w-auto absolute top-full left-1/2 flex items-center transform
      -translate-y-1/2 -translate-x-1/2 bg-white rounded-full font-medium group p-4 shadow-xl`,
    )}
    aria-label="play video"
  >
    <Play className={tw(`w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0`)} />
    <span className={tw(`ml-3`)}>Assista ao vídeo (5 min)</span>
  </button>
);

const VideoSection = () => (
  <section className={tw(`bg-gradient-to-b from-gray-200 shadow-inner`)}>
    <div className={tw(`max-w-7xl mx-auto`)}>
      <div id="vsl" className={tw(`flex flex-col max-w-4xl mx-auto pt-28`)}>
        <div className={tw(`w-full`)}>
          <div className={tw(`relative shadow-2xl mx-6 lg:mx-0`)}>
            <Preferences width="100%" height="100%" />
            <PlayButton />
          </div>
        </div>
      </div>
    </div>
    <div className={tw(`text-center mt-6`)}>
      <h3 className={tw(`text-2xl font-semibold text-gray-700 px-16 pt-8`)}>
        Descubra como o <span className={tw(`text-yellow-600`)}>manual da Capitã Liberta Ventre</span> pode transformar
        sua saúde e bem-estar de forma natural!
      </h3>
    </div>
  </section>
);

export default VideoSection;
