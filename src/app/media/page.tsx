import type { Metadata } from 'next';
import MediaClient from './MediaClient';

export const metadata: Metadata = {
  title: 'Aeroland in the News — Press & Media Coverage | GMADA Punjab',
  description:
    'Latest news about Aeroland GMADA township — Aerotropolis 5500 acres, Expo City AI Tower Mohali, Zirakpur bypass, Punjab government announcements 2026.',
  keywords:
    'Aeroland news, GMADA Aerotropolis news, Expo City Mohali news, Chandigarh Airport township media, Punjab real estate news 2026',
  alternates: { canonical: 'https://aeroland.co.in/media' },
  openGraph: {
    title: 'Aeroland Media Coverage — GMADA Punjab Township News',
    description: 'Press coverage of Aeroland GMADA township — AI Tower, bypass, airport connectivity and Punjab government investment plans.',
    url: 'https://aeroland.co.in/media',
    images: [{ url: 'https://aeroland.co.in/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Aeroland in the News — GMADA Punjab', images: ['https://aeroland.co.in/og-image.jpg'] },
};

export default function MediaPage() {
  return <MediaClient />;
}
