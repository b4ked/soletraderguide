import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  /** Small eyebrow text displayed above the heading. */
  eyebrow?: string
  heading: string
  description?: string
  /** Whether to centre-align the content. */
  centered?: boolean
  className?: string
}

/**
 * Reusable section heading with optional eyebrow and description.
 * Used consistently across homepage sections, hub pages, and guide introductions.
 */
export function SectionHeader({
  eyebrow,
  heading,
  description,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && 'text-center', className)}>
      {eyebrow && (
        <p className={cn(
          'text-xs font-semibold uppercase tracking-widest text-brand mb-2',
          centered && 'text-center'
        )}>
          {eyebrow}
        </p>
      )}
      <h2 className={cn(
        'text-2xl sm:text-3xl font-bold text-foreground tracking-tight leading-snug',
        centered && 'text-center'
      )}>
        {heading}
      </h2>
      {description && (
        <p className={cn(
          'mt-3 text-base text-muted-foreground leading-relaxed max-w-2xl',
          centered && 'mx-auto text-center'
        )}>
          {description}
        </p>
      )}
    </div>
  )
}
