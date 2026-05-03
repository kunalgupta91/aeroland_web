import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }],
    sitemap: 'https://aeroland.co.in/sitemap.xml',
    host: 'https://aeroland.co.in',
  };
}
