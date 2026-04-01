import Image from 'next/image'
import { Check, X, Minus } from 'lucide-react'
import type { Provider, ComparisonFeature } from '@/types'
import { cn } from '@/lib/utils'

interface ComparisonTableProps {
  providers: Provider[]
  features: ComparisonFeature[]
  /** Slug of the provider column to highlight as recommended. */
  highlightedProvider?: string
  className?: string
}

/**
 * Full comparison table with sticky first column.
 * Boolean feature values render as tick/cross icons.
 * Horizontally scrollable on smaller screens.
 */
export function ComparisonTable({
  providers,
  features,
  highlightedProvider,
  className,
}: ComparisonTableProps) {
  return (
    <div
      className={cn('overflow-x-auto rounded-xl border border-border', className)}
      role="region"
      aria-label="Software comparison table"
      tabIndex={0}
    >
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-border">
            {/* Feature column header */}
            <th
              scope="col"
              className="sticky left-0 z-10 bg-white min-w-[160px] w-48 px-5 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wide border-r border-border"
            >
              Feature
            </th>

            {/* Provider column headers */}
            {providers.map((provider) => (
              <th
                key={provider.id}
                scope="col"
                className={cn(
                  'min-w-[140px] px-5 py-4 text-center',
                  highlightedProvider === provider.slug
                    ? 'bg-brand-light'
                    : 'bg-white'
                )}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="relative size-9 overflow-hidden rounded-lg bg-muted">
                    <Image
                      src={provider.logo}
                      alt={`${provider.name} logo`}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <span className="font-semibold text-foreground">{provider.name}</span>
                  {highlightedProvider === provider.slug && (
                    <span className="rounded-full bg-brand px-2.5 py-0.5 text-[10px] font-bold text-white">
                      Recommended
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-border">
          {features.map((feature, rowIndex) => (
            <tr
              key={rowIndex}
              className={cn('transition-colors', rowIndex % 2 === 0 ? 'bg-white' : 'bg-muted/20')}
            >
              {/* Feature name — sticky */}
              <td className="sticky left-0 z-10 bg-inherit px-5 py-3.5 font-medium text-foreground border-r border-border">
                {feature.name}
                {feature.description && (
                  <p className="text-xs font-normal text-muted-foreground mt-0.5">
                    {feature.description}
                  </p>
                )}
              </td>

              {/* Provider values */}
              {providers.map((provider) => {
                const value = feature.values[provider.id]
                return (
                  <td
                    key={provider.id}
                    className={cn(
                      'px-5 py-3.5 text-center',
                      highlightedProvider === provider.slug ? 'bg-brand-light/30' : ''
                    )}
                  >
                    <FeatureValue value={value} />
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ---------------------------------------------------------------
   Feature value cell renderer
--------------------------------------------------------------- */

function FeatureValue({ value }: { value: string | boolean | null }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center size-6 rounded-full bg-emerald-100 mx-auto">
        <Check className="size-3.5 text-emerald-600" aria-label="Yes" />
      </span>
    )
  }

  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center size-6 rounded-full bg-red-100 mx-auto">
        <X className="size-3.5 text-red-500" aria-label="No" />
      </span>
    )
  }

  if (value === null) {
    return (
      <span className="inline-flex items-center justify-center size-6 rounded-full bg-muted mx-auto">
        <Minus className="size-3.5 text-muted-foreground" aria-label="Not available" />
      </span>
    )
  }

  return <span className="text-sm text-foreground">{value}</span>
}
