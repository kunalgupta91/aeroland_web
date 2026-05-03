import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: "Aeroland — Punjab's Premier Airport Township | GMADA Mohali",
  description:
    'Aeroland is a GMADA-planned township adjacent to Chandigarh International Airport in Mohali, Punjab. Buy plots in Pocket A & B. Government approved best investment opportunity.',
  keywords:
    'GMADA Aeroland, Aeroland Mohali, plots near Chandigarh airport, GMADA township Punjab, Aerocity Mohali plots, real estate near Chandigarh airport, best investment opportunity Punjab',
  alternates: { canonical: 'https://aeroland.co.in' },
  openGraph: {
    title: "Aeroland — Where the Future Takes Flight",
    description:
      "Punjab's most strategically located GMADA township. Adjacent to Chandigarh International Airport, Aerocity, and the upcoming AI-powered Expo City.",
    url: 'https://aeroland.co.in',
    images: [{ url: 'https://aeroland.co.in/og-image.jpg', width: 1200, height: 630, alt: 'Aeroland GMADA Township' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Aeroland — Punjab's Premier Airport Township",
    images: ['https://aeroland.co.in/og-image.jpg'],
  },
};

export default function HomePage() {
  return <HomeClient />;
}
