import { MetadataRoute } from 'next';

const BASE_URL = 'https://aeroland.co.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '',            priority: 1.0, changeFrequency: 'weekly'  as const },
    { path: '/about',      priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/highlights', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/media',      priority: 0.7, changeFrequency: 'weekly'  as const },
    { path: '/location',   priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/docs',       priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact',    priority: 0.9, changeFrequency: 'monthly' as const },
  ];

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
