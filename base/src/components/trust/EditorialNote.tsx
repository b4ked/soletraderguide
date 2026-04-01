import { Info, AlertTriangle, Lightbulb, RefreshCw } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

type EditorialNoteType = 'note' | 'warning' | 'info' | 'update'

interface EditorialNoteProps {
  /** The visual/semantic type of note. */
  type: EditorialNoteType
  /** Optional heading displayed above the content. */
  title?: string
  /** The note content — can be a string or JSX. */
  children: ReactNode
  className?: string
}

const styles: Record<
  EditorialNoteType,
  { border: string; bg: string; iconColor: string; titleColor: string }
> = {
  note: {
    border: 'border-slate-200',
    bg: 'bg-slate-50',
    iconColor: 'text-slate-500',
    titleColor: 'text-slate-700',
  },
  warning: {
    border: 'border-amber-200',
    bg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    titleColor: 'text-amber-800',
  },
  info: {
    border: 'border-blue-200',
    bg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    titleColor: 'text-blue-800',
  },
  update: {
    border: 'border-teal-200',
    bg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    titleColor: 'text-teal-800',
  },
}

const icons: Record<EditorialNoteType, typeof Info> = {
  note: Info,
  warning: AlertTriangle,
  info: Info,
  update: RefreshCw,
}

const defaultTitles: Record<EditorialNoteType, string> = {
  note: 'Note',
  warning: 'Important',
  info: 'Information',
  update: 'Update',
}

/**
 * A styled callout box for editorial notes, caveats, warnings, and updates.
 * Uses icons and colour to communicate the type of notice at a glance.
 */
export function EditorialNote({
  type,
  title,
  children,
  className,
}: EditorialNoteProps) {
  const style = styles[type]
  const Icon = icons[type]
  const resolvedTitle = title ?? defaultTitles[type]

  return (
    <div
      role="note"
      className={cn(
        'rounded-lg border p-4 flex items-start gap-3',
        style.border,
        style.bg,
        className
      )}
    >
      <Icon className={cn('size-4 mt-0.5 shrink-0', style.iconColor)} aria-hidden="true" />
      <div className="text-sm leading-relaxed">
        <strong className={cn('font-semibold block mb-1', style.titleColor)}>
          {resolvedTitle}
        </strong>
        <div className="text-slate-700">{children}</div>
      </div>
    </div>
  )
}
