import type { Metadata } from 'next';
import DocsClient from './DocsClient';

export const metadata: Metadata = {
  title: 'Aeroland Master Plan PDF — GMADA Official Documents | Punjab',
  description:
    'Download or view the official Aeroland Master Plan by GMADA. Notification No. H-U-H1/65/2026-6H1/I/452 dated 03/03/2026. Pocket A & B layout, road networks, green belts.',
  keywords:
    'Aeroland master plan PDF, GMADA notification Aeroland, Aeroland documents Punjab, GMADA 2026 township plan download',
  alternates: { canonical: 'https://aeroland.co.in/docs' },
  openGraph: {
    title: 'Aeroland Master Plan — Official GMADA Documents',
    description: 'Official GMADA master plan for Aeroland township. Download or view the complete Pocket A & B layout and infrastructure plan.',
    url: 'https://aeroland.co.in/docs',
    images: [{ url: 'https://aeroland.co.in/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Aeroland Master Plan — GMADA Docs', images: ['https://aeroland.co.in/og-image.jpg'] },
};

export default function DocsPage() {
  return <DocsClient />;
}
