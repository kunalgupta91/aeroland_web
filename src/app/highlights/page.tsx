import type { Metadata } from 'next';
import HighlightsClient from './HighlightsClient';

export const metadata: Metadata = {
  title: 'Why Invest in Aeroland? — Key Highlights | GMADA Mohali Punjab',
  description:
    "Explore Aeroland's investment highlights: airport proximity, GMADA approval, India's first AI Tower in Expo City, ₹1878 Crore bypass, medical college, and green township design.",
  keywords:
    'Aeroland investment highlights, GMADA approved plots, Expo City AI Tower Mohali, Zirakpur bypass, plots near Chandigarh airport investment, best investment opportunity Punjab',
  alternates: { canonical: 'https://aeroland.co.in/highlights' },
  openGraph: {
    title: 'Why Invest in Aeroland — GMADA Punjab',
    description:
      "Airport proximity, GMADA approval, India's first AI Tower, ₹1878 Cr bypass. The best investment opportunity near Chandigarh.",
    url: 'https://aeroland.co.in/highlights',
    images: [{ url: 'https://aeroland.co.in/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Why Invest in Aeroland — GMADA Punjab', images: ['https://aeroland.co.in/og-image.jpg'] },
};

export default function HighlightsPage() {
  return <HighlightsClient />;
}
