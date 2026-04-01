import { Clock } from 'lucide-react'
import { formatDate } from '@/lib/content-utils'
import { cn } from '@/lib/utils'

interface LastUpdatedProps {
  /** ISO date string (e.g. "2026-03-31"). */
  date: string
  className?: string
}

/**
 * Displays a "Last updated" timestamp in a muted style.
 * Helps users and search engines understand content freshness.
 */
export function LastUpdated({ date, className }: LastUpdatedProps) {
  return (
    <p className={cn('flex items-center gap-1.5 text-sm text-muted-foreground', className)}>
      <Clock className="size-3.5 shrink-0" aria-hidden="true" />
      <span>
        Last updated: <time dateTime={date}>{formatDate(date)}</time>
      </span>
    </p>
  )
}
