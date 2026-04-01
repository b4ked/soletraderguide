import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import type { BreadcrumbItem } from '@/types'
import { siteConfig } from '@/data/site-config'
import { JsonLd } from '@/components/seo/JsonLd'

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

/**
 * Breadcrumb navigation component.
 * Renders visual breadcrumbs with chevron separators and a BreadcrumbList
 * schema.org JSON-LD block for SEO.
 *
 * The Home item is always first. The last item (current page) is not a link.
 */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `${siteConfig.url}${item.href}` : undefined,
    })),
  }

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className="py-3">
        <ol
          className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1

            return (
              <li
                key={`${item.label}-${index}`}
                className="flex items-center gap-1"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {index > 0 && (
                  <ChevronRight className="size-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                )}

                {isLast || !item.href ? (
                  <span
                    className="text-foreground font-medium"
                    aria-current="page"
                    itemProp="name"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-brand transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                )}
                <meta itemProp="position" content={String(index + 1)} />
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
