'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { X, ChevronDown } from 'lucide-react'
import { primaryNav } from '@/data/navigation'
import { cn } from '@/lib/utils'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

/**
 * Mobile slide-in navigation menu.
 * Slides in from the right, locks body scroll when open,
 * and provides expandable sections for dropdown nav items.
 */
export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Slide-in panel */}
      <div
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          'fixed top-0 right-0 z-50 h-full w-80 max-w-full bg-white shadow-2xl',
          'flex flex-col transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-baseline gap-1"
            aria-label="SoleTraderGuide — home"
          >
            <span className="text-lg font-bold text-brand">SoleTraderGuide</span>
            <span className="text-xs text-muted-foreground">.co.uk</span>
          </Link>
          <button
            onClick={onClose}
            aria-label="Close navigation menu"
            className="rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-4" aria-label="Mobile navigation">
          <ul className="space-y-1">
            {primaryNav.map((item) => (
              <MobileNavItem key={item.href} item={item} onClose={onClose} />
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <div className="px-4 py-4 border-t border-border">
          <Link
            href="/compare"
            onClick={onClose}
            className="block w-full rounded-lg bg-cta px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-cta-hover"
            style={{ backgroundColor: 'var(--cta)' }}
          >
            Compare MTD Software
          </Link>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Not financial advice. We may earn commission on referrals.
          </p>
        </div>
      </div>
    </>
  )
}

interface MobileNavItemProps {
  item: (typeof primaryNav)[number]
  onClose: () => void
}

function MobileNavItem({ item, onClose }: MobileNavItemProps) {
  if (!item.children) {
    return (
      <li>
        <Link
          href={item.href}
          onClick={onClose}
          className="flex items-center rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
        >
          {item.label}
          {item.badge && (
            <span className="ml-auto rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
              {item.badge}
            </span>
          )}
        </Link>
      </li>
    )
  }

  return (
    <li>
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors">
          {item.label}
          <ChevronDown className="size-4 text-muted-foreground transition-transform group-open:rotate-180" />
        </summary>
        <ul className="mt-1 ml-3 space-y-0.5 border-l-2 border-brand-light pl-3">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={onClose}
                className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </details>
    </li>
  )
}
