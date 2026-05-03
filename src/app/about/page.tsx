import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Aeroland — GMADA Township Vision & Mission | Mohali Punjab',
  description:
    'Aeroland is developed by GMADA across villages Nandiali, Dyalpur, Bakarpur, and Matran near Chandigarh Airport. Pocket A near Aerocity, Pocket B near Matran. Punjab government backed.',
  keywords:
    'About Aeroland GMADA, Aeroland township Mohali, GMADA Aerotropolis, Chandigarh Airport township, Nandiali Dyalpur Bakarpur Matran, best investment opportunity Mohali',
  alternates: { canonical: 'https://aeroland.co.in/about' },
  openGraph: {
    title: 'About Aeroland — GMADA Punjab Township',
    description:
      'A GMADA-backed township in Mohali adjacent to Chandigarh International Airport — vision, mission, and authority details.',
    url: 'https://aeroland.co.in/about',
    images: [{ url: 'https://aeroland.co.in/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'About Aeroland — GMADA Punjab Township', images: ['https://aeroland.co.in/og-image.jpg'] },
};

export default function AboutPage() {
  return <AboutClient />;
}
