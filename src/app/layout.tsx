import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialFloat from '@/components/SocialFloat';

const inter = Inter({ subsets: ['latin'] });

const BASE_URL = 'https://aeroland.co.in';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Aeroland — Punjab's Premier Airport Township | GMADA",
    template: '%s | Aeroland',
  },
  description:
    'Aeroland is a GMADA-planned township adjacent to Chandigarh International Airport. Explore Pocket A & B, Aerocity connectivity, and investment opportunities in Punjab.',
  keywords:
    'GMADA Aeroland, Aeroland Mohali, plots near Chandigarh airport, GMADA township Punjab, Aerocity Mohali plots, Expo City Mohali investment, Pocket A Pocket B Aeroland, real estate near Chandigarh airport, best investment opportunity',
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: "Aeroland — Where the Future Takes Flight",
    description: "Punjab's premier planned township adjacent to Chandigarh International Airport.",
    url: BASE_URL,
    siteName: 'Aeroland',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: `${BASE_URL}/og-image.jpg`, width: 1200, height: 630, alt: 'Aeroland GMADA Township — Chandigarh Airport' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Aeroland — Punjab's Premier Airport Township",
    description: "Punjab's premier GMADA planned township adjacent to Chandigarh International Airport.",
    images: [`${BASE_URL}/og-image.jpg`],
  },
  verification: {
    google: 'REPLACE_WITH_GSC_VERIFICATION_CODE',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Aeroland — GMADA Township',
    url: BASE_URL,
    logo: `${BASE_URL}/og-image.jpg`,
    description: 'GMADA-planned township adjacent to Chandigarh International Airport, Punjab.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'GMADA Office, Sector 62',
      addressLocality: 'SAS Nagar, Mohali',
      addressRegion: 'Punjab',
      postalCode: '160062',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-172-2228272',
      contactType: 'customer service',
    },
  };

  const realEstateSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: 'Aeroland — Plot Availability | Pocket A & Pocket B',
    description:
      'GMADA-approved residential and commercial plots in Aeroland township, adjacent to Chandigarh International Airport. Pocket A (near Dyalpur/Nandiali) and Pocket B (near Matran).',
    url: BASE_URL,
    locationCreated: {
      '@type': 'Place',
      name: 'Aeroland Township, Mohali, Punjab',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mohali',
        addressRegion: 'Punjab',
        addressCountry: 'IN',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 30.6723, longitude: 76.7543 },
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="schema-realestate"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateSchema) }}
        />
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <SocialFloat />
        </LanguageProvider>
      </body>
    </html>
  );
}
