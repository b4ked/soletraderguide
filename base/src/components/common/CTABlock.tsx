'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { trackCTAClick } from '@/lib/analytics'
import { usePathname } from 'next/navigation'

interface CTALink {
  label: string
  href: string
}

interface CTABlockProps {
  heading: string
  description?: string
  primaryCta: CTALink
  secondaryCta?: CTALink
  /** 'brand' = deep teal background; 'light' = pale teal; 'bordered' = white with border */
  variant?: 'brand' | 'light' | 'bordered'
  className?: string
}

/**
 * Call-to-action block used at the end of guides and comparison pages.
 * Tracks CTA clicks via the analytics abstraction.
 */
export function CTABlock({
  heading,
  description,
  primaryCta,
  secondaryCta,
  variant = 'brand',
  className,
}: CTABlockProps) {
  const pathname = usePathname()

  const containerStyles = {
    brand: 'bg-brand text-white',
    light: 'bg-brand-light text-foreground',
    bordered: 'bg-white border-2 border-brand text-foreground',
  }

  const primaryStyles = {
    brand: 'bg-white text-brand hover:bg-slate-100',
    light: 'bg-brand text-white hover:bg-brand-dark',
    bordered: 'bg-brand text-white hover:bg-brand-dark',
  }

  const secondaryStyles = {
    brand: 'text-white/80 hover:text-white underline underline-offset-2',
    light: 'text-brand hover:text-brand-dark underline underline-offset-2',
    bordered: 'text-brand hover:text-brand-dark underline underline-offset-2',
  }

  const headingStyles = {
    brand: 'text-white',
    light: 'text-foreground',
    bordered: 'text-foreground',
  }

  const descStyles = {
    brand: 'text-white/80',
    light: 'text-muted-foreground',
    bordered: 'text-muted-foreground',
  }

  return (
    <div
      className={cn(
        'rounded-xl p-8 text-center',
        containerStyles[variant],
        className
      )}
    >
      <h2 className={cn('text-xl font-bold mb-2', headingStyles[variant])}>
        {heading}
      </h2>
      {description && (
        <p className={cn('text-sm mb-6 max-w-md mx-auto', descStyles[variant])}>
          {description}
        </p>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href={primaryCta.href}
          onClick={() => trackCTAClick(primaryCta.label, pathname)}
          className={cn(
            'inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors',
            primaryStyles[variant]
          )}
        >
          {primaryCta.label}
          <ArrowRight className="size-4" />
        </Link>

        {secondaryCta && (
          <Link
            href={secondaryCta.href}
            onClick={() => trackCTAClick(secondaryCta.label, pathname)}
            className={cn('text-sm font-medium transition-colors', secondaryStyles[variant])}
          >
            {secondaryCta.label}
          </Link>
        )}
      </div>
    </div>
  )
}
