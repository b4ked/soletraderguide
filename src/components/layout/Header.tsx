'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { ChevronDown, Menu } from 'lucide-react'
import { primaryNav } from '@/data/navigation'
import { MobileMenu } from './MobileMenu'
import { cn } from '@/lib/utils'
import type { NavItem } from '@/types'

/**
 * Sticky site header with desktop dropdown navigation and mobile hamburger menu.
 * Adds a shadow/border on scroll for depth cue.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-30 w-full bg-white transition-shadow duration-200',
          scrolled ? 'shadow-sm border-b border-border' : 'border-b border-transparent'
        )}
      >
        <div className="page-container">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-baseline gap-0.5 shrink-0"
              aria-label="SoleTraderGuide — return to homepage"
            >
              <span className="text-xl font-bold text-brand leading-none">SoleTraderGuide</span>
              <span className="text-xs text-muted-foreground">.co.uk</span>
            </Link>

            {/* Desktop navigation */}
            <nav
              className="hidden lg:flex items-center gap-0.5"
              aria-label="Primary navigation"
            >
              {primaryNav.map((item) =>
                item.children ? (
                  <DesktopDropdown
                    key={item.href}
                    item={item}
                    currentPath={pathname}
                  />
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                      pathname === item.href
                        ? 'text-brand bg-brand-light'
                        : 'text-foreground hover:text-brand hover:bg-brand-light'
                    )}
                    aria-current={pathname === item.href ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/compare"
                className={cn(
                  'inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold text-white',
                  'transition-colors focus-visible:outline-2 focus-visible:outline-offset-2',
                  'bg-[var(--cta)] hover:bg-[var(--cta-hover)]'
                )}
              >
                Compare Software
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden rounded-md p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  )
}

/* ---------------------------------------------------------------
   Desktop Dropdown
--------------------------------------------------------------- */

interface DesktopDropdownProps {
  item: NavItem
  currentPath: string
}

function DesktopDropdown({ item, currentPath }: DesktopDropdownProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const isActive =
    currentPath === item.href ||
    item.children?.some((child) => currentPath.startsWith(child.href))

  // Close when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClick)
    }
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className={cn(
          'inline-flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors',
          isActive
            ? 'text-brand bg-brand-light'
            : 'text-foreground hover:text-brand hover:bg-brand-light'
        )}
      >
        {item.label}
        <ChevronDown
          className={cn(
            'size-3.5 transition-transform duration-150',
            open ? 'rotate-180' : 'rotate-0'
          )}
        />
      </button>

      {open && (
        <div
          role="menu"
          className={cn(
            'absolute top-full left-0 mt-1.5 w-56 rounded-xl bg-white',
            'border border-border shadow-lg ring-1 ring-black/5 z-50',
            'overflow-hidden py-1.5'
          )}
        >
          {item.children?.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className={cn(
                'flex items-center px-4 py-2.5 text-sm transition-colors',
                currentPath === child.href
                  ? 'bg-brand-light text-brand font-medium'
                  : 'text-foreground hover:bg-muted hover:text-brand'
              )}
              aria-current={currentPath === child.href ? 'page' : undefined}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
