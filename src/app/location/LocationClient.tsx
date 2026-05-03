'use client';

import { motion } from 'framer-motion';
import { MdCheckCircle } from 'react-icons/md';
import { useLanguage } from '@/context/LanguageContext';

export default function LocationPage() {
  const { t } = useLanguage();
  const l = t.location;

  return (
    <div className="pt-16">
      <div className="gradient-green py-24 px-4 text-white text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="page-hero-badge"
        >
          {l.badge}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-black mt-2"
        >
          {l.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-green-200 mt-3 max-w-xl mx-auto text-sm"
        >
          {l.description}
        </motion.p>
      </div>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Master Plan */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-green-900 mb-2">{l.masterplan_title}</h2>
              <p className="text-gray-500 text-sm mb-5">{l.masterplan_description}</p>

              <div className="rounded-2xl overflow-hidden border border-green-100 shadow-md">
                {/*
                  ASSET REQUIRED:
                  Convert "Aeroland Map.pdf" to an image (PNG/JPG) and place at:
                    /public/assets/aeroland-map.jpg
                  Then replace the placeholder below with:
                    <img src="/assets/aeroland-map.jpg" alt="Aeroland Master Plan" className="w-full h-auto" />
                */}
                <div className="bg-green-50 h-96 flex flex-col items-center justify-center border-2 border-dashed border-green-200 text-green-400">
                  <span className="text-6xl mb-3">🗺️</span>
                  <p className="text-sm font-semibold">Aeroland Master Plan</p>
                  <p className="text-xs mt-1 text-green-300">Place converted image at:</p>
                  <code className="text-xs text-green-500 mt-0.5">/public/assets/aeroland-map.jpg</code>
                </div>
              </div>
            </motion.div>

            {/* Map + Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-green-900 mb-4">{l.map_title}</h2>

              <ul className="space-y-3 mb-7">
                {l.highlights.map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                    <MdCheckCircle className="text-green-500 flex-shrink-0" size={18} />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Google Maps embed — pointing to Aerocity Mohali */}
              <div className="rounded-2xl overflow-hidden shadow-md border border-green-100">
                <iframe
                  title="Aeroland Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27583.45!2d76.7543!3d30.6723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ef96b%3A0xa423bd2a8d5f0b3!2sAerocity%2C%20Mohali%2C%20Punjab%20160059!5e0!3m2!1sen!2sin!4v1714900000000!5m2!1sen!2sin"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
