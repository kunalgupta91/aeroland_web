'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const navHrefs = ['/', '/about', '/highlights', '/media', '/location', '/docs', '/contact'];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-green-950 text-white">
      <div className="container-max px-4 md:px-8 lg:px-16 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-3xl font-black mb-2">
              AERO<span className="text-green-400">LAND</span>
            </div>
            <p className="text-green-300 text-sm mb-3">{t.footer.tagline}</p>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
              A Greater Mohali Area Development Authority (GMADA) initiative.
              Government of Punjab, Department of Housing &amp; Urban Development.
            </p>
            <div className="flex gap-3 mt-5">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                <span
                  key={i}
                  className="w-8 h-8 rounded-full bg-green-800 flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer"
                >
                  <Icon size={13} />
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-green-300 font-semibold text-sm mb-4">{t.footer.links.title}</h4>
            <ul className="space-y-2">
              {t.footer.links.items.map((item, i) => (
                <li key={i}>
                  <Link
                    href={navHrefs[i] ?? '/'}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-green-300 font-semibold text-sm mb-4">{t.footer.legal.title}</h4>
            <ul className="space-y-2">
              {t.footer.legal.items.map((item, i) => (
                <li key={i}>
                  <button className="text-gray-400 text-sm hover:text-white transition-colors text-left">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-3 rounded-lg bg-green-900 border border-green-800">
              <p className="text-xs text-green-400 font-semibold mb-1">RERA Compliant</p>
              <p className="text-xs text-gray-500">
                This project is registered under GMADA and complies with applicable real estate regulations.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-900 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-xs">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
