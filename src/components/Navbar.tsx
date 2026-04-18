'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const navHrefs = ['/', '/about', '/highlights', '/media', '/location', '/docs', '/contact'];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  const navItems = Object.values(t.nav);

  // On non-home pages the hero banner is below the navbar spacer,
  // so transparent + white text would be invisible against white body.
  // Only use the transparent/white-text style on the home page.
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Dark style whenever: scrolled OR not on home page
  const dark = scrolled || !isHome;

  const linkClass = (href: string) =>
    `text-sm font-medium transition-colors hover:text-green-500 ${
      pathname === href
        ? 'text-green-500'
        : dark ? 'text-gray-700' : 'text-white/90'
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        dark ? 'bg-white/95 backdrop-blur shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-max flex items-center justify-between h-16 px-4 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className={`text-2xl font-black tracking-tight transition-colors ${
            dark ? 'text-green-900' : 'text-white'
          }`}
        >
          AERO<span className="text-green-500">LAND</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((label, i) => (
            <Link
              key={navHrefs[i]}
              href={navHrefs[i]}
              className={linkClass(navHrefs[i])}
            >
              {label}
            </Link>
          ))}

          <button
            onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
            className={`px-3 py-1 rounded-full text-xs font-bold border transition-all ${
              dark
                ? 'border-green-700 text-green-700 hover:bg-green-700 hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-green-900'
            }`}
          >
            {language === 'en' ? 'हिंदी' : 'EN'}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden ${dark ? 'text-green-900' : 'text-white'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-green-950 text-white px-6 pb-6 overflow-hidden"
          >
            {navItems.map((label, i) => (
              <Link
                key={navHrefs[i]}
                href={navHrefs[i]}
                onClick={() => setMobileOpen(false)}
                className="block py-2.5 text-sm border-b border-green-800 hover:text-green-300 transition-colors"
              >
                {label}
              </Link>
            ))}
            <button
              onClick={() => {
                setLanguage(language === 'en' ? 'hi' : 'en');
                setMobileOpen(false);
              }}
              className="mt-4 px-4 py-1.5 border border-green-400 rounded-full text-xs font-bold text-green-300 hover:bg-green-700 transition-all"
            >
              {language === 'en' ? 'हिंदी में देखें' : 'View in English'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
