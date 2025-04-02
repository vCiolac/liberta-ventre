'use client';

import { tw } from 'twind';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import useIntersectionObserver from '@/hooks/IntersectionObserver';

const CountUpSectionDesafio = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div ref={ref} className={tw(`text-center pt-6 pb-14`)}>
      <motion.h2
        className={tw(`text-6xl font-extrabold text-green-600 font-migae`)}
        initial={{ opacity: 0, y: -30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
      >
        {isVisible && <CountUp start={0} end={127} duration={3} />}+<span className="ml-2 font-ananda">mulheres</span>
      </motion.h2>
      <motion.p
        className={tw(`text-lg text-gray-700 mt-2 font-medium`)}
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        já conquistaram liberdade intestinal com o
        <span className={tw(`text-green-600 font-semibold`)}> Desafio 7 Dias</span>.
      </motion.p>
    </div>
  );
};

export default CountUpSectionDesafio;
