'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MdAirplanemodeActive, MdAccountBalance, MdLocationOn } from 'react-icons/md';
import { FiArrowRight } from 'react-icons/fi';
import HeroSection from '@/components/HeroSection';
import StatsCounter from '@/components/StatsCounter';
import RegistrationModal from '@/components/RegistrationModal';
import { useLanguage } from '@/context/LanguageContext';

const cards = [
  {
    icon: <MdAirplanemodeActive className="text-green-600" size={34} />,
    title: 'Airport Adjacent',
    desc: 'Directly connected to Chandigarh International Airport ecosystem.',
    href: '/highlights',
  },
  {
    icon: <MdAccountBalance className="text-green-600" size={34} />,
    title: 'GMADA Approved',
    desc: 'Backed by the Government of Punjab with full regulatory clearances.',
    href: '/about',
  },
  {
    icon: <MdLocationOn className="text-green-600" size={34} />,
    title: 'Prime Location',
    desc: 'Pocket A & B — strategically placed within the Aerocity master plan.',
    href: '/location',
  },
];

export default function HomePage() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <HeroSection />
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <StatsCounter />

      {/* Quick value props */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="badge">Why Aeroland</span>
            <h2 className="text-3xl md:text-4xl font-black text-green-900 mt-1">
              A Township Built for Tomorrow
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(22,101,52,0.12)' }}
                className="bg-green-50 border border-green-100 rounded-2xl p-7 transition-all group"
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-lg font-bold text-green-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">{card.desc}</p>
                <Link
                  href={card.href}
                  className="text-green-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Learn More <FiArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="gradient-green py-20 px-4">
        <div className="container-max text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Ready to Invest in Punjab&apos;s Future?
            </h2>
            <p className="text-green-200 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
              Secure your plot in Aeroland today. Limited availability in Pocket A &amp; Pocket B.
              GMADA-backed, government approved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-green-900 px-8 py-3.5 rounded-full font-bold text-sm hover:bg-green-100 transition-all hover:scale-105 shadow-lg"
              >
                Register Your Interest
              </button>
              <Link
                href="/docs"
                className="border-2 border-white text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-white hover:text-green-900 transition-all hover:scale-105"
              >
                {t.hero.cta_secondary}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
