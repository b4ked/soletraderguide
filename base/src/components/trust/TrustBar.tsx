import { Shield, RefreshCw, BookOpen } from 'lucide-react'
import { siteConfig } from '@/data/site-config'

interface TrustSignal {
  icon: 'shield' | 'refresh' | 'book'
  label: string
  detail?: string
}

interface TrustBarProps {
  signals?: TrustSignal[]
}

const ICON_MAP = {
  shield: Shield,
  refresh: RefreshCw,
  book: BookOpen,
}

const DEFAULT_SIGNALS: TrustSignal[] = [
  { icon: 'shield', label: 'Editorially independent', detail: 'not owned by any software company' },
  { icon: 'refresh', label: 'Regularly updated', detail: 'we track changes as they happen' },
  { icon: 'book', label: `Updated ${siteConfig.lastReviewedDate}`, detail: 'content reflects the latest information' },
]

/**
 * Compact trust strip — surfaces credibility signals before commercial content.
 * Override signals via props, or use defaults driven by siteConfig.
 */
export function TrustBar({ signals = DEFAULT_SIGNALS }: TrustBarProps) {
  return (
    <div className="border-b border-border bg-white">
      <div className="page-container py-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-12">
          {signals.map((signal, i) => {
            const Icon = ICON_MAP[signal.icon]
            return (
              <div key={i} className="flex items-center gap-2.5">
                {i > 0 && <div className="hidden sm:block h-4 w-px bg-border mr-4" aria-hidden="true" />}
                <Icon className="size-4 shrink-0 text-brand" aria-hidden="true" />
                <span className="text-sm text-slate-700">
                  <span className="font-semibold">{signal.label}</span>
                  {signal.detail && (
                    <span className="text-muted-foreground"> — {signal.detail}</span>
                  )}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
