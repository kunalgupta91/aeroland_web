import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About GMADA Aeroland Mohali | Premium Township Punjab',
  description:
    'Explore GMADA Aeroland Mohali, a premium township near Chandigarh Airport with modern infrastructure, strategic connectivity, and excellent real estate investment potential.',
  keywords:
    'About Aeroland GMADA, Aeroland township Mohali, GMADA Aerotropolis, Chandigarh Airport township, Nandiali Dyalpur Bakarpur Matran, best investment opportunity Mohali',
  alternates: { canonical: 'https://aeroland.co.in/about' },
  openGraph: {
    title: 'About GMADA Aeroland Mohali | Premium Township Punjab',
    description:
      'Explore GMADA Aeroland Mohali, a premium township near Chandigarh Airport with modern infrastructure, strategic connectivity, and excellent real estate investment potential.',
    url: 'https://aeroland.co.in/about',
    images: [{ url: 'https://aeroland.co.in/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'About GMADA Aeroland Mohali | Premium Township Punjab', images: ['https://aeroland.co.in/og-image.jpg'] },
};

export default function AboutPage() {
  return <AboutClient />;
}
