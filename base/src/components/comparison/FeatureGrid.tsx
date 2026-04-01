import { cn } from '@/lib/utils'
import { CheckCircle } from 'lucide-react'
import type { ComponentType } from 'react'

interface Feature {
  name: string
  description: string
  /** Optional Lucide icon component. */
  icon?: ComponentType<{ className?: string }>
}

interface FeatureGridProps {
  features: Feature[]
  /** Number of columns on wider viewports. */
  columns?: 2 | 3
  className?: string
}

/**
 * A 2–3 column grid of feature cards.
 * Used in software review pages to highlight key capabilities.
 */
export function FeatureGrid({
  features,
  columns = 3,
  className,
}: FeatureGridProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-4',
        columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3',
        className
      )}
    >
      {features.map((feature, index) => {
        const Icon = feature.icon ?? CheckCircle
        return (
          <div
            key={index}
            className="rounded-lg border border-border bg-white p-5"
          >
            <div className="mb-3 inline-flex size-9 items-center justify-center rounded-lg bg-brand-light">
              <Icon className="size-4 text-brand" aria-hidden="true" />
            </div>
            <h3 className="text-sm font-semibold text-foreground mb-1.5">{feature.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
          </div>
        )
      })}
    </div>
  )
}
