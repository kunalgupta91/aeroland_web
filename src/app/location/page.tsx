import type { Metadata } from 'next';
import LocationClient from './LocationClient';

export const metadata: Metadata = {
  title: 'Aeroland Location — Adjacent to Chandigarh Airport | Aerocity Mohali',
  description:
    'Aeroland is located adjacent to Chandigarh International Airport, 5 minutes from Aerocity Mohali, with direct 200ft road access and 6-lane Zirakpur bypass connectivity.',
  keywords:
    'Aeroland location, plots near Chandigarh airport, Aerocity Mohali location, GMADA Aeroland map, Pocket A Pocket B location, real estate near airport Punjab',
  alternates: { canonical: 'https://aeroland.co.in/location' },
  openGraph: {
    title: 'Aeroland Location — Next to Chandigarh Airport, Aerocity Mohali',
    description: 'Adjacent to Chandigarh International Airport and 5 minutes from Aerocity Mohali. Direct access via 200ft wide road.',
    url: 'https://aeroland.co.in/location',
    images: [{ url: 'https://aeroland.co.in/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Aeroland Location — Chandigarh Airport', images: ['https://aeroland.co.in/og-image.jpg'] },
};

export default function LocationPage() {
  return <LocationClient />;
}
