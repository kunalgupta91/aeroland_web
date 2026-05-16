import type { Metadata } from 'next';
import DocsClient from './DocsClient';

export const metadata: Metadata = {
  title: 'GMADA Aeroland Docs | Master Plan & Project PDFs',
  description:
    'Download GMADA Aeroland Mohali master plan, brochures, layouts, and project documents for plots near Chandigarh Airport and Aerocity Mohali.',
  keywords:
    'Aeroland master plan PDF, GMADA notification Aeroland, Aeroland documents Punjab, GMADA 2026 township plan download',
  alternates: { canonical: 'https://aeroland.co.in/docs' },
  openGraph: {
    title: 'GMADA Aeroland Docs | Master Plan & Project PDFs',
    description: 'Download GMADA Aeroland Mohali master plan, brochures, layouts, and project documents for plots near Chandigarh Airport and Aerocity Mohali.',
    url: 'https://aeroland.co.in/docs',
    images: [{ url: 'https://aeroland.co.in/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'GMADA Aeroland Docs | Master Plan & Project PDFs', images: ['https://aeroland.co.in/og-image.jpg'] },
};

export default function DocsPage() {
  return <DocsClient />;
}
