import { UserCheck } from 'lucide-react'
import { formatDate } from '@/lib/content-utils'
import { cn } from '@/lib/utils'

interface ReviewedByProps {
  /** Full name of the reviewer. */
  name: string
  /** Professional role or qualification (e.g. "Chartered Accountant"). */
  role: string
  /** ISO date string of the last review (e.g. "2025-03-01"). */
  date: string
  className?: string
}

/**
 * Displays a "Reviewed by" trust signal with the reviewer's name, role, and
 * the date of their most recent review. Helps establish editorial credibility.
 */
export function ReviewedBy({ name, role, date, className }: ReviewedByProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-md border border-border bg-muted/50 px-3 py-2',
        className
      )}
    >
      <UserCheck className="size-4 text-brand shrink-0" aria-hidden="true" />
      <p className="text-sm text-muted-foreground">
        <span className="text-foreground font-medium">Reviewed by {name}</span>
        {role && (
          <>
            <span className="mx-1 text-slate-300" aria-hidden="true">·</span>
            <span>{role}</span>
          </>
        )}
        <span className="mx-1 text-slate-300" aria-hidden="true">·</span>
        <span>Last reviewed {formatDate(date)}</span>
      </p>
    </div>
  )
}
