'use client';

import { motion } from 'framer-motion';
import { FiDownload, FiExternalLink, FiFileText } from 'react-icons/fi';
import { useLanguage } from '@/context/LanguageContext';

export default function DocsPage() {
  const { t } = useLanguage();
  const d = t.docs;

  return (
    <div className="pt-16">
      <div className="gradient-green py-24 px-4 text-white text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="page-hero-badge"
        >
          {d.badge}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-black mt-2"
        >
          {d.title}
        </motion.h1>
      </div>

      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">

          {/* Summary card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-green-50 border border-green-100 rounded-2xl p-8 mb-8"
          >
            <div className="flex items-center gap-3 mb-4 text-green-700">
              <FiFileText size={22} />
              <h2 className="text-xl font-bold text-green-900">{d.summary_title}</h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{d.summary}</p>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <a
              href="/assets/aeroland.pdf"
              download="Aeroland-Master-Plan.pdf"
              className="flex items-center justify-center gap-2 bg-green-700 text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-green-800 transition-all hover:scale-105 shadow-md"
            >
              <FiDownload /> {d.download}
            </a>
            <a
              href="/assets/aeroland.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-green-700 text-green-700 px-7 py-3.5 rounded-full font-bold text-sm hover:bg-green-50 transition-all hover:scale-105"
            >
              <FiExternalLink /> {d.view}
            </a>
          </motion.div>

          {/* PDF embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-green-100 shadow-md"
          >
            {/*
              ASSET REQUIRED:
              Copy "Aeroland Map.pdf" to /public/assets/aeroland.pdf
              The PDF will then be viewable inline and downloadable.
            */}
            <iframe
              src="/assets/aeroland.pdf"
              width="100%"
              height="650"
              title="Aeroland Master Plan PDF"
              className="border-0 bg-gray-50"
            />
          </motion.div>

          <p className="text-xs text-gray-400 mt-4 text-center">
            Place <code>Aeroland Map.pdf</code> at <code>/public/assets/aeroland.pdf</code> to enable inline viewing.
          </p>
        </div>
      </section>
    </div>
  );
}
