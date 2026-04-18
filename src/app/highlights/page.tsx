'use client';

import { motion } from 'framer-motion';
import {
  MdAirplanemodeActive,
  MdAccountBalance,
  MdSmartToy,
  MdDirectionsCar,
  MdLocalHospital,
  MdPark,
} from 'react-icons/md';
import { useLanguage } from '@/context/LanguageContext';

const iconMap: Record<string, React.ReactNode> = {
  airplane:    <MdAirplanemodeActive size={38} />,
  government:  <MdAccountBalance    size={38} />,
  ai:          <MdSmartToy          size={38} />,
  road:        <MdDirectionsCar     size={38} />,
  hospital:    <MdLocalHospital     size={38} />,
  sustainable: <MdPark              size={38} />,
};

export default function HighlightsPage() {
  const { t } = useLanguage();
  const h = t.highlights;

  return (
    <div className="pt-16">
      <div className="gradient-green py-24 px-4 text-white text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="page-hero-badge"
        >
          {h.badge}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-black mt-2"
        >
          {h.title}
        </motion.h1>
      </div>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {h.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(22,101,52,0.13)' }}
                className="bg-white border border-green-100 rounded-2xl p-8 transition-all cursor-default"
              >
                <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 mb-5">
                  {iconMap[feature.icon]}
                </div>
                <h3 className="text-lg font-bold text-green-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="gradient-green-light py-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-black text-green-900 mb-4">
            Convinced? Let&apos;s Talk Investment.
          </h2>
          <a
            href="/contact"
            className="inline-block bg-green-700 text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-green-800 transition-all hover:scale-105 shadow-lg"
          >
            Register Your Interest
          </a>
        </motion.div>
      </section>
    </div>
  );
}
