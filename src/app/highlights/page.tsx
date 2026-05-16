import type { Metadata } from 'next';
import HighlightsClient from './HighlightsClient';

export const metadata: Metadata = {
  title: 'GMADA Aeroland Highlights | Premium Plots Mohali',
  description:
    'Explore GMADA Aeroland Mohali highlights featuring premium plots near Chandigarh Airport, modern infrastructure, Aerocity connectivity, and strong investment potential.',
  keywords:
    'Aeroland investment highlights, GMADA approved plots, Expo City AI Tower Mohali, Zirakpur bypass, plots near Chandigarh airport investment, best investment opportunity Punjab',
  alternates: { canonical: 'https://aeroland.co.in/highlights' },
  openGraph: {
    title: 'GMADA Aeroland Highlights | Premium Plots Mohali',
    description:
      'Explore GMADA Aeroland Mohali highlights featuring premium plots near Chandigarh Airport, modern infrastructure, Aerocity connectivity, and strong investment potential.',
    url: 'https://aeroland.co.in/highlights',
    images: [{ url: 'https://aeroland.co.in/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'GMADA Aeroland Highlights | Premium Plots Mohali', images: ['https://aeroland.co.in/og-image.jpg'] },
};

export default function HighlightsPage() {
  return <HighlightsClient />;
}
