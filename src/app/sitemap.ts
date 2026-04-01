import { MetadataRoute } from 'next'
import { siteConfig } from '@/data/site-config'
import { getAllPosts } from '@/lib/content'
import { sitemapRoutes } from '@/data/navigation'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  const now = new Date().toISOString()

  // Dynamically include all MDX blog posts
  const blogPosts = getAllPosts('blog').map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt).toISOString() : now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Static routes are defined per-site in src/data/navigation.ts as sitemapRoutes
  const staticRoutes = (sitemapRoutes ?? []).map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency ?? ('monthly' as const),
    priority: route.priority ?? 0.7,
  }))

  return [
    // Homepage — always included
    { url: baseUrl, lastModified: now, changeFrequency: 'daily', priority: 1 },
    // Blog hub
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    // Dynamic blog posts
    ...blogPosts,
    // Site-specific static routes from navigation.ts
    ...staticRoutes,
  ]
}
