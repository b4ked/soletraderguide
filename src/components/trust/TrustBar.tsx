import { Shield, RefreshCw, BookOpen } from 'lucide-react'

/**
 * Compact 3-pillar trust strip for use directly below the hero.
 * Surfaces credibility signals before the user encounters any commercial content.
 */
export function TrustBar() {
  return (
    <div className="border-b border-border bg-white">
      <div className="page-container py-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-12">
          <div className="flex items-center gap-2.5">
            <Shield className="size-4 shrink-0 text-brand" aria-hidden="true" />
            <span className="text-sm text-slate-700">
              <span className="font-semibold">Editorially independent</span>
              <span className="text-muted-foreground"> — not owned by any software company</span>
            </span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-border" aria-hidden="true" />
          <div className="flex items-center gap-2.5">
            <RefreshCw className="size-4 shrink-0 text-brand" aria-hidden="true" />
            <span className="text-sm text-slate-700">
              <span className="font-semibold">Written from HMRC guidance</span>
              <span className="text-muted-foreground"> — we track every update as the rules change</span>
            </span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-border" aria-hidden="true" />
          <div className="flex items-center gap-2.5">
            <BookOpen className="size-4 shrink-0 text-brand" aria-hidden="true" />
            <span className="text-sm text-slate-700">
              <span className="font-semibold">Updated March 2026</span>
              <span className="text-muted-foreground"> — content reflects the latest MTD rules</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
