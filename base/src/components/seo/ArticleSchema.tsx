import { siteConfig } from '@/data/site-config'
import { JsonLd } from './JsonLd'

interface ArticleSchemaProps {
  title: string
  description: string
  canonicalUrl: string
  publishedDate?: string
  updatedDate?: string
  author?: string
  imageUrl?: string
}

/**
 * Generates an Article schema.org JSON-LD block for blog posts and guide pages.
 * Include this component on article/guide pages to enhance search appearance.
 */
export function ArticleSchema({
  title,
  description,
  canonicalUrl,
  publishedDate,
  updatedDate,
  author,
  imageUrl,
}: ArticleSchemaProps) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: canonicalUrl,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.publisherName,
      url: siteConfig.url,
    },
    author: {
      '@type': 'Person',
      name: author ?? siteConfig.publisherName,
    },
  }

  if (publishedDate) schema.datePublished = publishedDate
  if (updatedDate) schema.dateModified = updatedDate
  if (imageUrl) {
    schema.image = {
      '@type': 'ImageObject',
      url: imageUrl,
    }
  }

  return <JsonLd data={schema} />
}
