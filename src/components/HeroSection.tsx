'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import { useLanguage } from '@/context/LanguageContext';

const floatingCircles = [
  { w: 350, h: 350, left: '10%',  top: '15%',  dur: 7 },
  { w: 200, h: 200, left: '75%',  top: '10%',  dur: 9 },
  { w: 150, h: 150, left: '60%',  top: '60%',  dur: 6 },
  { w: 100, h: 100, left: '25%',  top: '70%',  dur: 8 },
  { w: 250, h: 250, left: '85%',  top: '40%',  dur: 10 },
  { w: 80,  h: 80,  left: '5%',   top: '50%',  dur: 5 },
];

export default function HeroSection() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-green" />

      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingCircles.map((c, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-[0.06]"
            style={{ width: c.w, height: c.h, left: c.left, top: c.top }}
            animate={{ y: [0, -25, 0], scale: [1, 1.04, 1] }}
            transition={{ duration: c.dur, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="page-hero-badge"
        >
          {h.badge}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl md:text-9xl font-black tracking-tight mt-2 mb-3"
        >
          {h.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-green-200 font-light italic mb-5"
        >
          {h.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg text-green-100/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {h.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="bg-white text-green-900 px-8 py-3.5 rounded-full font-bold text-sm hover:bg-green-100 transition-all hover:scale-105 shadow-xl"
          >
            {h.cta_primary}
          </Link>
          <Link
            href="/docs"
            className="border-2 border-white text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-white hover:text-green-900 transition-all hover:scale-105"
          >
            {h.cta_secondary}
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <FiArrowDown size={22} />
      </motion.div>
    </section>
  );
}
