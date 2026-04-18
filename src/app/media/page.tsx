'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiCalendar, FiTag } from 'react-icons/fi';
import { useLanguage } from '@/context/LanguageContext';

export default function MediaPage() {
  const { t } = useLanguage();
  const m = t.media;

  return (
    <div className="pt-16">
      <div className="gradient-green py-24 px-4 text-white text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="page-hero-badge"
        >
          {m.badge}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-black mt-2"
        >
          {m.title}
        </motion.h1>
      </div>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {m.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(0,0,0,0.1)' }}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all group"
              >
                {/* Image area */}
                <div className="relative h-52 bg-green-50 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.headline}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-green-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-gray-800 text-sm leading-snug mb-4 group-hover:text-green-700 transition-colors line-clamp-3">
                    {item.headline}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <FiCalendar size={11} />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiTag size={11} />
                      {item.source}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-400 mt-10">
            * News content sourced from public media. Images to be placed in <code>/public/assets/</code>.
          </p>
        </div>
      </section>
    </div>
  );
}
