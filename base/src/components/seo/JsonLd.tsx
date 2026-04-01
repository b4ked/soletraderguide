/**
 * Generic JSON-LD structured data component.
 * Renders a <script type="application/ld+json"> tag in the document head.
 *
 * Usage:
 *   <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", ... }} />
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
