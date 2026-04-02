import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { formatDate } from '@/lib/content-utils'
import { cn } from '@/lib/utils'

interface BlogCardProps {
  title: string
  description: string
  href: string
  date: string
  category: string
  author?: string
  className?: string
}

/**
 * Card used in blog listing pages. Shows category badge, date, title, excerpt,
 * and optionally the author's name.
 */
export function BlogCard({
  title,
  description,
  href,
  date,
  category,
  author,
  className,
}: BlogCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group flex flex-col rounded-xl border border-border bg-white p-6',
        'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-brand/30',
        'focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2',
        className
      )}
    >
      {/* Meta row */}
      <div className="mb-3 flex items-center gap-3">
        <span className="rounded-full bg-brand-light px-2.5 py-0.5 text-xs font-medium text-brand">
          {category}
        </span>
        <time
          dateTime={date}
          className="text-xs text-muted-foreground"
        >
          {formatDate(date)}
        </time>
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-brand transition-colors leading-snug">
        {title}
      </h3>

      {/* Excerpt */}
      <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
        {description}
      </p>

      {/* Footer row */}
      <div className="mt-4 flex items-center justify-between">
        {author && (
          <span className="text-xs text-muted-foreground">By {author}</span>
        )}
        <span className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-brand opacity-0 group-hover:opacity-100 transition-opacity">
          Read more
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  )
}
