import Image from 'next/image'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface QuickVerdictProps {
  verdict: string
  /** Score from 1–5. */
  score: number
  bestFor: string
  price: string
  /** Path to the provider logo file (e.g. provider.logo) */
  logo?: string
  /** Provider name used as alt text */
  name?: string
  className?: string
}

/**
 * Displays a quick verdict box at the top of software review pages.
 * Shows a star rating, best use case, pricing, and a short verdict summary.
 */
export function QuickVerdict({
  verdict,
  score,
  bestFor,
  price,
  logo,
  name,
  className,
}: QuickVerdictProps) {
  return (
    <div
      className={cn(
        'rounded-xl border-2 border-brand/20 bg-brand-light p-5',
        className
      )}
      role="region"
      aria-label="Quick verdict"
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        {/* Score + optional logo */}
        <div className="shrink-0 text-center">
          {logo && (
            <div className="relative mx-auto mb-3 size-14 overflow-hidden rounded-xl bg-white shadow-sm">
              <Image
                src={logo}
                alt={name ? `${name} logo` : 'Provider logo'}
                fill
                className="object-contain p-1.5"
              />
            </div>
          )}
          <div className="text-4xl font-bold text-brand leading-none">{score.toFixed(1)}</div>
          <div className="mt-1 flex justify-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'size-3.5',
                  i < Math.round(score) ? 'fill-brand text-brand' : 'fill-muted text-muted-foreground'
                )}
                aria-hidden="true"
              />
            ))}
          </div>
          <div className="mt-1 text-xs text-muted-foreground">out of 5</div>
        </div>

        {/* Verdict text */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground leading-relaxed">{verdict}</p>

          <dl className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <dt className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">
                Best for
              </dt>
              <dd className="text-sm text-foreground">{bestFor}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">
                Starting price
              </dt>
              <dd className="text-sm font-medium text-foreground">{price}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
