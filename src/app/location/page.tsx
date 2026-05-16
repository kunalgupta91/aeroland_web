import type { Metadata } from 'next';
import LocationClient from './LocationClient';

export const metadata: Metadata = {
  title: 'Aeroland Mohali Location | Near Chandigarh Airport',
  description:
    'Explore GMADA Aeroland Mohali location near Chandigarh Airport with seamless connectivity to Aerocity, Expo City, Mohali, Zirakpur, and key investment hubs.',
  keywords:
    'Aeroland location, plots near Chandigarh airport, Aerocity Mohali location, GMADA Aeroland map, Pocket A Pocket B location, real estate near airport Punjab',
  alternates: { canonical: 'https://aeroland.co.in/location' },
  openGraph: {
    title: 'Aeroland Mohali Location | Near Chandigarh Airport',
    description: 'Explore GMADA Aeroland Mohali location near Chandigarh Airport with seamless connectivity to Aerocity, Expo City, Mohali, Zirakpur, and key investment hubs.',
    url: 'https://aeroland.co.in/location',
    images: [{ url: 'https://aeroland.co.in/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Aeroland Mohali Location | Near Chandigarh Airport', images: ['https://aeroland.co.in/og-image.jpg'] },
};

export default function LocationPage() {
  return <LocationClient />;
}
