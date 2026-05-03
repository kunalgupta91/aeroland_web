import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Aeroland — Register Your Plot Interest | GMADA Mohali',
  description:
    'Register your interest in Aeroland GMADA plots. Get investor briefings, site visits, and plot availability updates. Best investment opportunity near Chandigarh airport.',
  keywords:
    'Aeroland contact, GMADA Aeroland register interest, buy plot Aeroland Mohali, Aeroland investor inquiry, best investment opportunity, GMADA Sector 62 contact',
  alternates: { canonical: 'https://aeroland.co.in/contact' },
  openGraph: {
    title: 'Register Your Interest in Aeroland — GMADA Mohali',
    description: 'Be among the first to receive plot availability updates and exclusive investor briefings for Aeroland GMADA township.',
    url: 'https://aeroland.co.in/contact',
    images: [{ url: 'https://aeroland.co.in/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Contact Aeroland — Register Interest', images: ['https://aeroland.co.in/og-image.jpg'] },
};

export default function ContactPage() {
  return <ContactClient />;
}
