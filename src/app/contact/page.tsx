import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact GMADA Aeroland Mohali | Register Interest',
  description:
    'Register your interest in GMADA Aeroland Mohali for premium plots near Chandigarh Airport. Get project details, site visit assistance, and investment support.',
  keywords:
    'Aeroland contact, GMADA Aeroland register interest, buy plot Aeroland Mohali, Aeroland investor inquiry, best investment opportunity, GMADA Sector 62 contact',
  alternates: { canonical: 'https://aeroland.co.in/contact' },
  openGraph: {
    title: 'Contact GMADA Aeroland Mohali | Register Interest',
    description: 'Register your interest in GMADA Aeroland Mohali for premium plots near Chandigarh Airport. Get project details, site visit assistance, and investment support.',
    url: 'https://aeroland.co.in/contact',
    images: [{ url: 'https://aeroland.co.in/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Contact GMADA Aeroland Mohali | Register Interest', images: ['https://aeroland.co.in/og-image.jpg'] },
};

export default function ContactPage() {
  return <ContactClient />;
}
