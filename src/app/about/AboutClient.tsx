'use client';

import { motion } from 'framer-motion';
import { FiEye, FiTarget, FiAward } from 'react-icons/fi';
import { useLanguage } from '@/context/LanguageContext';

function PageBanner({ badge, title, subtitle }: { badge: string; title: string; subtitle?: string }) {
  return (
    <div className="gradient-green py-24 px-4 text-white text-center">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="page-hero-badge"
      >
        {badge}
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-5xl font-black mt-2"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-green-200 mt-3 max-w-xl mx-auto text-sm"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

export default function AboutPage() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <div className="pt-16">
      <PageBanner badge={a.badge} title={a.title} />

      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 leading-relaxed mb-5"
          >
            {a.description}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 leading-relaxed mb-12"
          >
            {a.overview}
          </motion.p>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: <FiEye size={22} />, title: a.vision_title, content: a.vision },
              { icon: <FiTarget size={22} />, title: a.mission_title, content: a.mission },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-green-50 rounded-2xl p-7 border-l-4 border-green-600"
              >
                <div className="flex items-center gap-3 mb-3 text-green-700">
                  {item.icon}
                  <h3 className="font-bold text-green-900 text-lg">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Authority badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-green-900 text-white rounded-2xl p-7 flex items-start gap-5"
          >
            <FiAward className="text-green-300 flex-shrink-0 mt-1" size={30} />
            <div>
              <p className="text-green-400 text-xs font-semibold uppercase tracking-wider mb-1">
                Developing Authority
              </p>
              <p className="font-bold text-lg">{a.authority}</p>
              <p className="text-green-300 text-xs mt-2">{a.notification}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
