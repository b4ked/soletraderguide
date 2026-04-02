import Link from 'next/link'
import { Info } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AffiliateDisclosureProps {
  /**
   * 'banner'  — Prominent notice at the top of commercial pages.
   * 'inline'  — Small note placed near affiliate links.
   * 'footer'  — Brief statement in page footer areas.
   */
  variant?: 'banner' | 'inline' | 'footer'
  className?: string
}

/**
 * Renders an affiliate disclosure notice appropriate to the given context.
 * All variants include a link to the full /affiliate-disclosure page.
 */
export function AffiliateDisclosure({
  variant = 'inline',
  className,
}: AffiliateDisclosureProps) {
  if (variant === 'banner') {
    return (
      <div
        className={cn(
          'rounded-lg border border-amber-200 bg-amber-50 px-4 py-3',
          'flex items-start gap-3',
          className
        )}
        role="note"
        aria-label="Affiliate disclosure"
      >
        <Info className="size-4 text-amber-600 mt-0.5 shrink-0" aria-hidden="true" />
        <div className="text-sm text-amber-800">
          <strong className="font-semibold">Affiliate disclosure:</strong> This page contains
          links to software products. If you purchase through these links, we may earn a small
          commission at no extra cost to you. This does not affect our editorial independence or
          the objectivity of our reviews.{' '}
          <Link
            href="/affiliate-disclosure"
            className="underline underline-offset-2 hover:text-amber-900 font-medium"
          >
            Read our full affiliate policy
          </Link>
          .
        </div>
      </div>
    )
  }

  if (variant === 'footer') {
    return (
      <p className={cn('text-xs text-muted-foreground', className)}>
        We may earn a commission on referrals.{' '}
        <Link
          href="/affiliate-disclosure"
          className="underline underline-offset-2 hover:text-foreground"
        >
          Affiliate disclosure
        </Link>
        .
      </p>
    )
  }

  // inline (default)
  return (
    <p className={cn('inline text-xs text-muted-foreground', className)}>
      <span aria-hidden="true">*</span>{' '}
      <Link
        href="/affiliate-disclosure"
        className="underline underline-offset-2 hover:text-foreground"
      >
        Affiliate link
      </Link>{' '}
      — we may earn a small commission.
    </p>
  )
}
