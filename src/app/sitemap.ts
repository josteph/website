import type { MetadataRoute } from 'next';
import { allBlogs } from 'contentlayer/generated';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://joshuastephen.com';

  const staticRoutes: string[] = [
    '', // home page
    ...allBlogs.map((blog) => blog.url), // blog posts
  ];

  const staticRoutesSitemap = staticRoutes.map((route) => {
    const changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency'] = 'weekly';

    const priority = 1.0;

    return {
      changeFrequency,
      lastModified: new Date(),
      priority,
      url: `${baseUrl}${route}`,
    };
  });

  return staticRoutesSitemap;
}
