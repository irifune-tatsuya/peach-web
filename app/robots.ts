import { MetadataRoute } from 'next';

const baseUrl = new URL(process.env.BASE_URL || 'http://localhost:3000');

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/_action/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
