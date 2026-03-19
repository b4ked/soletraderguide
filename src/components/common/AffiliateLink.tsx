'use client'

import { trackAffiliateClick } from '@/lib/analytics'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface AffiliateLinkProps {
  /** The name of the software provider (used for analytics). */
  provider: string
  /** The affiliate destination URL. */
  href: string
  children: ReactNode
  className?: string
  /** Show a small "Sponsored" badge alongside the link. */
  showBadge?: boolean
}

/**
 * Wrapper for all affiliate outbound links.
 * Automatically adds rel="noopener sponsored", target="_blank",
 * and tracks the click via the analytics abstraction.
 */
export function AffiliateLink({
  provider,
  href,
  children,
  className,
  showBadge = false,
}: AffiliateLinkProps) {
  const handleClick = () => {
    trackAffiliateClick(provider, href)
  }

  return (
    <span className="inline-flex items-center gap-1.5">
      <a
        href={href}
        target="_blank"
        rel="noopener sponsored"
        onClick={handleClick}
        className={cn('transition-colors', className)}
        aria-label={`Visit ${provider} (opens in new tab)`}
      >
        {children}
      </a>
      {showBadge && (
        <span className="rounded-sm bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-500 leading-none">
          Ad
        </span>
      )}
    </span>
  )
}
