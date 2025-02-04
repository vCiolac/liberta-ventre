'use client';

import { tw } from 'twind';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import useIntersectionObserver from '@/hooks/IntersectionObserver';

const CountUpSection = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div ref={ref} className={tw(`text-center pt-6 pb-14`)}>
      <motion.h2
        className={tw(`text-7xl font-bold text-yellow-600 font-migae`)}
        initial={{ opacity: 0, y: -30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
      >
        {isVisible && <CountUp start={0} end={127} duration={3} />}
        <span className="font-ananda">+ Mulheres</span>
      </motion.h2>
      <motion.p
        className={tw(`text-lg text-gray-700 mt-2 font-medium`)}
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        já transformaram suas vidas com o<span className={tw(`text-yellow-600`)}> Manual da Capitã Liberta-Ventre</span>
        .
      </motion.p>
    </div>
  );
};

export default CountUpSection;
