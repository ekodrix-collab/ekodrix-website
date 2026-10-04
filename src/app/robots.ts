import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/cms/', '/ekodrix-panel/'],
      },
      {
        // Ensure Googlebot can crawl everything
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/cms/', '/ekodrix-panel/'],
      },
    ],
    sitemap: 'https://www.ekodrix.com/sitemap.xml',
    host: 'https://www.ekodrix.com',
  }
}
