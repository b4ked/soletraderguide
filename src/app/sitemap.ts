import { MetadataRoute } from 'next'
import { siteConfig } from '@/data/site-config'
import { getAllPosts } from '@/lib/content'

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

  return [
    // Homepage
    { url: baseUrl, lastModified: now, changeFrequency: 'daily', priority: 1 },

    // MTD section
    { url: `${baseUrl}/mtd-for-sole-traders`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/mtd-for-sole-traders/what-is-mtd-income-tax`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/mtd-for-sole-traders/am-i-affected`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/mtd-for-sole-traders/deadlines`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/mtd-for-sole-traders/records-you-need-to-keep`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/mtd-for-sole-traders/spreadsheets`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/mtd-for-sole-traders/sole-trader-and-landlord-income`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Software section
    { url: `${baseUrl}/software`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/software/best-mtd-software-for-sole-traders`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/software/best-free-mtd-software`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/software/cheapest-mtd-software`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/software/best-mtd-software-for-spreadsheet-users`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Reviews
    { url: `${baseUrl}/reviews`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/reviews/xero`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/reviews/quickbooks`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/reviews/sage`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/reviews/freeagent`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Comparisons
    { url: `${baseUrl}/comparisons`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/comparisons/xero-vs-quickbooks`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/comparisons/xero-vs-freeagent`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/comparisons/quickbooks-vs-sage`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/comparisons/free-vs-paid-mtd-software`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Tools
    { url: `${baseUrl}/tools`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/tools/mtd-eligibility-checker`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/tools/mtd-software-chooser`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Blog hub (individual posts added dynamically below)
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    ...blogPosts,

    // Legal / About
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/editorial-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/affiliate-disclosure`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/terms-and-conditions`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/sources-methodology`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ]
}
