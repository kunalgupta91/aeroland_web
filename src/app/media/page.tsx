import type { Metadata } from 'next';
import MediaClient from './MediaClient';

export const metadata: Metadata = {
  title: 'GMADA Aeroland Media | Mohali Real Estate Updates',
  description:
    'Explore the latest GMADA Aeroland Mohali news, media coverage, project updates, and real estate developments near Chandigarh Airport and Aerocity Mohali.',
  keywords:
    'Aeroland news, GMADA Aerotropolis news, Expo City Mohali news, Chandigarh Airport township media, Punjab real estate news 2026',
  alternates: { canonical: 'https://aeroland.co.in/media' },
  openGraph: {
    title: 'GMADA Aeroland Media | Mohali Real Estate Updates',
    description: 'Explore the latest GMADA Aeroland Mohali news, media coverage, project updates, and real estate developments near Chandigarh Airport and Aerocity Mohali.',
    url: 'https://aeroland.co.in/media',
    images: [{ url: 'https://aeroland.co.in/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'GMADA Aeroland Media | Mohali Real Estate Updates', images: ['https://aeroland.co.in/og-image.jpg'] },
};

export default function MediaPage() {
  return <MediaClient />;
}
