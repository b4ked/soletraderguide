import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Source {
  title: string
  url: string
  description?: string
  date?: string
}

interface SourceListProps {
  sources: Source[]
  className?: string
}

/**
 * Renders a clean, numbered list of cited sources with external links.
 * All links open in a new tab with noopener noreferrer for security.
 */
export function SourceList({ sources, className }: SourceListProps) {
  return (
    <aside
      className={cn('rounded-lg border border-border bg-muted/30 p-5', className)}
      aria-label="Sources and references"
    >
      <h3 className="text-sm font-semibold text-foreground mb-3">Sources</h3>
      <ol className="space-y-3">
        {sources.map((source, index) => (
          <li key={index} className="flex items-start gap-2.5">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground">
              {index + 1}
            </span>
            <div className="min-w-0">
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline underline-offset-2"
              >
                {source.title}
                <ExternalLink className="size-3 shrink-0" aria-hidden="true" />
              </a>
              {source.description && (
                <p className="mt-0.5 text-xs text-muted-foreground">{source.description}</p>
              )}
              {source.date && (
                <p className="mt-0.5 text-xs text-slate-400">Accessed {source.date}</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </aside>
  )
}
