'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { useLanguage } from '@/context/LanguageContext';

const specs = (fp: ReturnType<typeof useLanguage>['t']['floor_plan']) => [
  { label: fp.type_label,   value: fp.type },
  { label: fp.towers_label, value: fp.towers },
  { label: fp.floors_label, value: fp.floors },
  { label: fp.units_label,  value: fp.units },
];

export default function FloorPlanClient() {
  const { t } = useLanguage();
  const fp = t.floor_plan;

  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="gradient-green py-24 px-4 text-white text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="page-hero-badge"
        >
          {fp.badge}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-black mt-2"
        >
          {fp.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-3 text-green-200 text-lg"
        >
          {fp.subtitle}
        </motion.p>
      </div>

      {/* Spec chips */}
      <section className="bg-green-50 border-b border-green-100 py-6 px-4">
        <div className="container-max flex flex-wrap justify-center gap-4">
          {specs(fp).map((s) => (
            <div key={s.label} className="flex items-center gap-2 bg-white border border-green-100 rounded-full px-5 py-2.5 shadow-sm">
              <span className="text-xs text-green-600 font-semibold uppercase tracking-wide">{s.label}</span>
              <span className="w-px h-4 bg-green-200" />
              <span className="text-sm font-bold text-green-900">{s.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 text-center mb-8 leading-relaxed"
          >
            {fp.description}
          </motion.p>

          {/* Floor plan image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-green-100 shadow-lg"
          >
            <Image
              src="/floor-plan/floor-plan.jpg"
              alt="Aeroland Heights 3BHK Floor Plan — Tower 1,2,4,5,6&7"
              width={1200}
              height={1600}
              className="w-full h-auto object-contain"
              priority
            />
          </motion.div>

          {/* Download + RERA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <p className="text-xs text-gray-400">RERA: {fp.rera} &nbsp;|&nbsp; rera.punjab.gov.in</p>
            <a
              href="/floor-plan/floor-plan.jpg"
              download="Aeroland-Heights-Floor-Plan.jpg"
              className="flex items-center gap-2 bg-green-700 text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-green-800 transition-all hover:scale-105 shadow-md"
            >
              <FiDownload /> {fp.download}
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-green-light py-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-black text-green-900 mb-4">
            Interested in a Unit?
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
