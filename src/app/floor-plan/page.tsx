import type { Metadata } from 'next';
import FloorPlanClient from './FloorPlanClient';

export const metadata: Metadata = {
  title: 'Aeroland Heights Floor Plan | 3BHK Tower Layout',
  description:
    'View the Aeroland Heights floor plan for 3BHK units (A, B, C, D) across Tower 1, 2, 4, 5, 6 & 7. Typical layout from 1st to 15th floor. RERA registered: PBRERA-SAS79-PR1319.',
  alternates: { canonical: 'https://aeroland.co.in/floor-plan' },
  openGraph: {
    title: 'Aeroland Heights Floor Plan | 3BHK Tower Layout',
    description: 'Typical 3BHK floor plan across Towers 1, 2, 4, 5, 6 & 7 — 4 units per floor, 1st to 15th floor.',
    url: 'https://aeroland.co.in/floor-plan',
    images: [{ url: 'https://aeroland.co.in/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Aeroland Heights Floor Plan | 3BHK', images: ['https://aeroland.co.in/og-image.jpg'] },
};

export default function FloorPlanPage() {
  return <FloorPlanClient />;
}
