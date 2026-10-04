import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/cms/'],
      },
      {
        // Ensure Googlebot can crawl everything
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/cms/'],
      },
    ],
    sitemap: 'https://ekodrix.com/sitemap.xml',
    host: 'https://ekodrix.com',
  }
}
