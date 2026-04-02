import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface GuideCardProps {
  title: string
  description: string
  href: string
  category?: string
  badge?: string
  /** Optional Lucide icon component to render in the card. */
  icon?: React.ComponentType<{ className?: string }>
  className?: string
}

/**
 * A card used in guide grids on the homepage and hub pages.
 * Shows an optional icon, category badge, title, description, and an arrow
 * that appears on hover.
 */
export function GuideCard({
  title,
  description,
  href,
  category,
  badge,
  icon: Icon,
  className,
}: GuideCardProps) {
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
      {/* Icon */}
      {Icon && (
        <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-brand-light">
          <Icon className="size-5 text-brand" />
        </div>
      )}

      {/* Badges row */}
      {(category || badge) && (
        <div className="mb-3 flex items-center gap-2">
          {category && (
            <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
              {category}
            </span>
          )}
          {badge && (
            <span className="rounded-full bg-brand-light px-2.5 py-0.5 text-xs font-medium text-brand">
              {badge}
            </span>
          )}
        </div>
      )}

      {/* Title */}
      <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-brand transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
        {description}
      </p>

      {/* Arrow */}
      <div className="mt-4 flex items-center gap-1 text-xs font-medium text-brand opacity-0 group-hover:opacity-100 transition-opacity">
        Read guide
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  )
}
