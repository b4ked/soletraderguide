import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface HeroCTA {
  label: string
  href: string
}

interface HeroSectionProps {
  /** Small badge/eyebrow text above the heading. */
  badge?: string
  heading: string
  subheading: string
  primaryCta: HeroCTA
  secondaryCta?: HeroCTA
  /** Small trust note below CTAs (e.g. "Used by 5,000+ sole traders"). */
  trustNote?: string
  className?: string
}

/**
 * Full-width hero section for the homepage and hub pages.
 * Uses the brand gradient as a subtle background.
 */
export function HeroSection({
  badge,
  heading,
  subheading,
  primaryCta,
  secondaryCta,
  trustNote,
  className,
}: HeroSectionProps) {
  return (
    <section
      className={cn('brand-gradient py-16 sm:py-20 lg:py-24', className)}
      aria-label="Hero"
    >
      <div className="page-container text-center">
        {/* Badge */}
        {badge && (
          <div className="mb-5 inline-flex items-center rounded-full border border-brand/20 bg-white px-4 py-1.5 shadow-sm">
            <span className="text-xs font-semibold text-brand">{badge}</span>
          </div>
        )}

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
          {heading}
        </h1>

        {/* Subheading */}
        <p className="mt-5 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {subheading}
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={primaryCta.href}
            className={cn(
              'inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white',
              'transition-colors focus-visible:outline-2 focus-visible:outline-offset-2',
              'bg-[var(--brand)] hover:bg-[var(--brand-dark)]'
            )}
          >
            {primaryCta.label}
            <ArrowRight className="size-4" />
          </Link>

          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className={cn(
                'inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold',
                'border border-slate-200 bg-white text-slate-700',
                'transition-colors hover:border-brand hover:text-brand hover:bg-brand-light',
                'focus-visible:outline-2 focus-visible:outline-offset-2'
              )}
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>

        {/* Trust note */}
        {trustNote && (
          <p className="mt-5 text-xs text-muted-foreground">{trustNote}</p>
        )}
      </div>
    </section>
  )
}
