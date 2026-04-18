import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Aeroland — Punjab's Premier Airport Township | GMADA",
  description:
    'Aeroland is a GMADA-planned township adjacent to Chandigarh International Airport. Explore Pocket A & B, Aerocity connectivity, and investment opportunities in Punjab.',
  keywords:
    'Aeroland, GMADA, Chandigarh Airport, Mohali, Punjab, Township, Aerocity, Expo City, Real Estate, Investment',
  openGraph: {
    title: 'Aeroland — Where the Future Takes Flight',
    description:
      "Punjab's premier planned township adjacent to Chandigarh International Airport.",
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
