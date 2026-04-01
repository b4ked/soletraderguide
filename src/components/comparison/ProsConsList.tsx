import { Check, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProsConsListProps {
  pros: string[]
  cons: string[]
  /** 'side-by-side' shows pros and cons in two columns; 'stacked' shows pros then cons vertically. */
  layout?: 'side-by-side' | 'stacked'
  className?: string
}

/**
 * Renders a pros and cons list with green ticks for pros and red crosses for cons.
 */
export function ProsConsList({
  pros,
  cons,
  layout = 'stacked',
  className,
}: ProsConsListProps) {
  return (
    <div
      className={cn(
        layout === 'side-by-side' ? 'grid grid-cols-1 sm:grid-cols-2 gap-6' : 'space-y-5',
        className
      )}
    >
      {/* Pros */}
      <div>
        <h4 className="text-sm font-semibold text-emerald-700 mb-3 flex items-center gap-1.5">
          <Check className="size-4" aria-hidden="true" />
          What we like
        </h4>
        <ul className="space-y-2">
          {pros.map((pro, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-foreground">
              <Check
                className="size-4 mt-0.5 text-emerald-500 shrink-0"
                aria-hidden="true"
              />
              <span>{pro}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Cons */}
      <div>
        <h4 className="text-sm font-semibold text-red-700 mb-3 flex items-center gap-1.5">
          <X className="size-4" aria-hidden="true" />
          Watch out for
        </h4>
        <ul className="space-y-2">
          {cons.map((con, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-foreground">
              <X
                className="size-4 mt-0.5 text-red-400 shrink-0"
                aria-hidden="true"
              />
              <span>{con}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
