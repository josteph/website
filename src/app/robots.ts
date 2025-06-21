import type { MetadataRoute } from 'next';
import { allBlogs } from 'contentlayer/generated';

export default function robots(): MetadataRoute.Robots {
  // For deploy preview, disallow all requests
  if (process.env.NODE_ENV !== 'production' || process.env.VERCEL_ENV !== 'production') {
    return {
      rules: [
        {
          disallow: '*',
          userAgent: '*',
        },
      ],
    };
  }

  const blogPaths = allBlogs.map((blog) => ({ allow: blog.url, userAgent: '*' }));

  return {
    rules: [
      ...blogPaths,
      {
        disallow: '/_next/',
        userAgent: '*',
      },
    ],
    sitemap: 'https://joshuastephen.com/sitemap.xml',
  };
}
