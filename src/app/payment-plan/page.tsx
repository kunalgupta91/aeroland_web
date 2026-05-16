import type { Metadata } from 'next';
import PaymentPlanClient from './PaymentPlanClient';

export const metadata: Metadata = {
  title: 'Aeroland Heights Payment Plan | 3BHK Construction Linked',
  description:
    'Explore the Aeroland Heights payment plan for 3BHK (1850 sq.ft, BSP Rs.1.25Cr). Construction linked & down payment options. RERA: PBRERA-SAS79-PR1319.',
  alternates: { canonical: 'https://aeroland.co.in/payment-plan' },
  openGraph: {
    title: 'Aeroland Heights Payment Plan | 3BHK',
    description: 'Construction linked and down payment plans for Aeroland Heights 3BHK. BSP Rs. 1,25,00,000 for 1850 sq.ft.',
    url: 'https://aeroland.co.in/payment-plan',
    images: [{ url: 'https://aeroland.co.in/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Aeroland Heights Payment Plan | 3BHK', images: ['https://aeroland.co.in/og-image.jpg'] },
};

export default function PaymentPlanPage() {
  return <PaymentPlanClient />;
}
