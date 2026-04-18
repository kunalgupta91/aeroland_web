'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function StatsCounter() {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="bg-green-900 py-16 px-4">
      <div className="container-max grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-white">
        {t.stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="flex flex-col items-center"
          >
            <div className="text-4xl md:text-5xl font-black text-green-300 leading-none">
              {(stat as any).prefix ?? ''}
              {inView ? (
                <CountUp end={stat.value} duration={2.5} separator="," />
              ) : (
                '0'
              )}
              {stat.suffix}
            </div>
            <div className="text-white font-semibold mt-2 text-sm md:text-base">{stat.label}</div>
            <div className="text-green-400 text-xs mt-0.5">{stat.sublabel}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
