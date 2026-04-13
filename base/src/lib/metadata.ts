import type { Metadata } from 'next'
import { siteConfig } from '@/data/site-config'

interface GenerateMetadataOptions {
  title: string
  description: string
  canonicalPath?: string
  noindex?: boolean
  ogImage?: string
  pageType?: string
  publishedDate?: string
  updatedDate?: string
}

/**
 * Generate a full Next.js Metadata object for standard pages.
 */
export function generateMetadata(opts: GenerateMetadataOptions): Metadata {
  const {
    title,
    description,
    canonicalPath,
    noindex = false,
    ogImage,
    publishedDate,
    updatedDate,
  } = opts

  const canonicalUrl = canonicalPath
    ? `${siteConfig.url}${canonicalPath}`
    : undefined

  const resolvedOgImage = ogImage || siteConfig.ogImage
  const ogImageUrl = resolvedOgImage.startsWith('http')
    ? resolvedOgImage
    : `${siteConfig.url}${resolvedOgImage}`

  // Derive simple keywords from the description
  const stopWords = new Set([
    'a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
    'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
    'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
    'should', 'may', 'might', 'your', 'our', 'their', 'its', 'how', 'what',
    'that', 'this', 'these', 'those',
  ])

  const keywords = description
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split(/\s+/)
    .filter((word) => word.length > 3 && !stopWords.has(word))
    .slice(0, 10)
    .join(', ')

  const metadata: Metadata = {
    title,
    description,
    keywords,
    authors: [{ name: siteConfig.publisherName, url: siteConfig.url }],
    creator: siteConfig.publisherName,
    publisher: siteConfig.publisherName,
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: canonicalUrl || siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
    },
  }

  if (canonicalUrl) {
    metadata.alternates = { canonical: canonicalUrl }
  }

  if (publishedDate || updatedDate) {
    metadata.other = {}
    if (publishedDate) metadata.other['article:published_time'] = publishedDate
    if (updatedDate) metadata.other['article:modified_time'] = updatedDate
  }

  return metadata
}

/**
 * Generate article-specific metadata for blog posts and guides.
 */
export function generateArticleMetadata(
  opts: GenerateMetadataOptions & {
    author?: string
    tags?: string[]
  }
): Metadata {
  const { author, tags, ...rest } = opts
  const base = generateMetadata(rest)

  const canonicalUrl = opts.canonicalPath
    ? `${siteConfig.url}${opts.canonicalPath}`
    : siteConfig.url

  const resolvedOgImage = opts.ogImage || siteConfig.ogImage
  const ogImageUrl = resolvedOgImage.startsWith('http')
    ? resolvedOgImage
    : `${siteConfig.url}${resolvedOgImage}`

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: 'article',
      url: canonicalUrl,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: opts.title,
        },
      ],
      authors: author ? [author] : [siteConfig.publisherName],
      publishedTime: opts.publishedDate,
      modifiedTime: opts.updatedDate,
      tags: tags ?? [],
    },
  }
}
