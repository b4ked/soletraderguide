import { Info, AlertTriangle, Lightbulb, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

type CalloutType = 'info' | 'warning' | 'tip' | 'deadline'

interface InfoCalloutProps {
  type: CalloutType
  title?: string
  children: ReactNode
  className?: string
}

const config: Record<
  CalloutType,
  {
    icon: typeof Info
    border: string
    bg: string
    iconColor: string
    titleColor: string
    defaultTitle: string
  }
> = {
  info: {
    icon: Info,
    border: 'border-blue-200',
    bg: 'bg-blue-50',
    iconColor: 'text-blue-500',
    titleColor: 'text-blue-800',
    defaultTitle: 'Good to know',
  },
  warning: {
    icon: AlertTriangle,
    border: 'border-amber-200',
    bg: 'bg-amber-50',
    iconColor: 'text-amber-500',
    titleColor: 'text-amber-800',
    defaultTitle: 'Watch out',
  },
  tip: {
    icon: Lightbulb,
    border: 'border-emerald-200',
    bg: 'bg-emerald-50',
    iconColor: 'text-emerald-500',
    titleColor: 'text-emerald-800',
    defaultTitle: 'Tip',
  },
  deadline: {
    icon: Clock,
    border: 'border-red-200',
    bg: 'bg-red-50',
    iconColor: 'text-red-500',
    titleColor: 'text-red-800',
    defaultTitle: 'Deadline',
  },
}

/**
 * Coloured callout boxes for important information in guide pages.
 * Each type has a distinct colour and icon for quick recognition.
 */
export function InfoCallout({ type, title, children, className }: InfoCalloutProps) {
  const { icon: Icon, border, bg, iconColor, titleColor, defaultTitle } = config[type]
  const resolvedTitle = title ?? defaultTitle

  return (
    <div
      role="note"
      className={cn(
        'rounded-lg border p-4 my-5',
        border,
        bg,
        className
      )}
    >
      <div className="flex items-start gap-3">
        <Icon className={cn('size-4 mt-0.5 shrink-0', iconColor)} aria-hidden="true" />
        <div className="flex-1 text-sm leading-relaxed">
          <strong className={cn('font-semibold block mb-1', titleColor)}>
            {resolvedTitle}
          </strong>
          <div className="text-slate-700">{children}</div>
        </div>
      </div>
    </div>
  )
}
