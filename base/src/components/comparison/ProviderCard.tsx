import Image from 'next/image'
import Link from 'next/link'
import { Check, ExternalLink } from 'lucide-react'
import { Star } from 'lucide-react'
import type { Provider } from '@/types'
import { AffiliateLink } from '@/components/common/AffiliateLink'
import { cn } from '@/lib/utils'

interface ProviderCardProps {
  provider: Provider
  /** 'summary' = compact card for grids; 'full' = larger card with more detail */
  variant?: 'summary' | 'full'
  /** Highlight this card as the recommended option. */
  highlighted?: boolean
  className?: string
}

/**
 * Displays a software provider card with logo, pricing, pros, rating, and CTA.
 * Available in summary (grid) and full (detail) variants.
 */
export function ProviderCard({
  provider,
  variant = 'summary',
  highlighted = false,
  className,
}: ProviderCardProps) {
  if (variant === 'full') {
    return <FullProviderCard provider={provider} highlighted={highlighted} className={className} />
  }

  return <SummaryProviderCard provider={provider} highlighted={highlighted} className={className} />
}

/* ---------------------------------------------------------------
   Summary variant
--------------------------------------------------------------- */

function SummaryProviderCard({
  provider,
  highlighted,
  className,
}: {
  provider: Provider
  highlighted: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        'relative rounded-xl border bg-white p-5 flex flex-col',
        'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md',
        highlighted
          ? 'border-brand ring-2 ring-brand/20'
          : 'border-border',
        className
      )}
    >
      {highlighted && (
        <div className="absolute -top-3 left-4">
          <span className="rounded-full bg-brand px-3 py-0.5 text-xs font-semibold text-white shadow-sm">
            Recommended
          </span>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="relative size-10 shrink-0 rounded-lg bg-muted overflow-hidden">
          <Image
            src={provider.logo}
            alt={`${provider.name} logo`}
            fill
            className="object-contain p-1"
          />
        </div>
        <div>
          <h3 className="text-base font-semibold text-foreground">{provider.name}</h3>
          <p className="text-xs text-muted-foreground">{provider.pricingSummary}</p>
        </div>
        {/* Star rating */}
        <div className="ml-auto flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                'size-3',
                i < (provider.suitabilityScore ?? 0)
                  ? 'fill-amber-400 text-amber-400'
                  : 'fill-muted text-muted-foreground'
              )}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      {/* Tagline */}
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{provider.tagline}</p>

      {/* Best for */}
      {provider.bestFor[0] && (
        <p className="text-xs font-medium text-brand mb-4">
          Best for: {provider.bestFor[0]}
        </p>
      )}

      {/* Top pros */}
      <ul className="space-y-1.5 mb-5">
        {provider.pros.slice(0, 3).map((pro, i) => (
          <li key={i} className="flex items-start gap-1.5 text-xs text-foreground">
            <Check className="size-3.5 mt-0.5 text-emerald-500 shrink-0" aria-hidden="true" />
            {pro}
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="mt-auto flex items-center gap-3">
        <AffiliateLink
          provider={provider.name}
          href={provider.affiliateLink}
          className="flex-1 rounded-lg bg-[var(--cta)] px-4 py-2 text-center text-xs font-semibold text-white hover:bg-[var(--cta-hover)] transition-colors"
        >
          Try {provider.name}
          <ExternalLink className="inline size-3 ml-1 opacity-70" />
        </AffiliateLink>
        <Link
          href={`/reviews/${provider.slug}`}
          className="text-xs text-brand hover:underline underline-offset-2"
        >
          Full review
        </Link>
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------
   Full variant
--------------------------------------------------------------- */

function FullProviderCard({
  provider,
  highlighted,
  className,
}: {
  provider: Provider
  highlighted: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        'rounded-xl border bg-white p-6',
        highlighted ? 'border-brand ring-2 ring-brand/20' : 'border-border',
        className
      )}
    >
      {/* Header */}
      <div className="flex flex-wrap items-start gap-4 mb-5">
        <div className="relative size-14 shrink-0 rounded-xl bg-muted overflow-hidden">
          <Image
            src={provider.logo}
            alt={`${provider.name} logo`}
            fill
            className="object-contain p-2"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-foreground">{provider.name}</h3>
              <p className="text-sm text-muted-foreground">{provider.tagline}</p>
            </div>
            {/* Star rating */}
            <div className="flex flex-col items-end shrink-0">
              <span className="text-2xl font-bold text-foreground">
                {provider.suitabilityScore ?? 0}/5
              </span>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'size-3.5',
                      i < (provider.suitabilityScore ?? 0)
                        ? 'fill-amber-400 text-amber-400'
                        : 'fill-muted text-muted-foreground'
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          </div>
          <p className="mt-1 text-sm font-medium text-brand">{provider.pricingSummary}</p>
        </div>
      </div>

      {/* Best for tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {provider.bestFor.map((tag, i) => (
          <span
            key={i}
            className="rounded-full bg-brand-light px-3 py-0.5 text-xs font-medium text-brand"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Provider notes */}
      <p className="text-sm text-muted-foreground bg-muted/50 rounded-lg px-4 py-3 mb-5 border border-border">
        {provider.notes}
      </p>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-3">
        <AffiliateLink
          provider={provider.name}
          href={provider.affiliateLink}
          className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--cta)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--cta-hover)] transition-colors"
        >
          Start free trial
          <ExternalLink className="size-3.5 opacity-80" />
        </AffiliateLink>
        <Link
          href={`/reviews/${provider.slug}`}
          className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:border-brand hover:text-brand transition-colors"
        >
          Read full review
        </Link>
        <a
          href={provider.pricingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors ml-auto"
        >
          View pricing
        </a>
      </div>
    </div>
  )
}
