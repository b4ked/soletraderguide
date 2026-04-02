import Link from 'next/link'
import { footerNav } from '@/data/navigation'
import { siteConfig } from '@/data/site-config'
import type { FooterNavColumn } from '@/types'

/**
 * Site footer with brand column, link columns, legal row, and copyright.
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300" aria-label="Site footer">
      {/* Main footer grid */}
      <div className="page-container py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column — wider */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-baseline gap-0.5 mb-4"
              aria-label={`${siteConfig.name} — home`}
            >
              <span className="text-lg font-bold text-white">{siteConfig.name}</span>
              {siteConfig.domainSuffix && (
                <span className="text-sm text-slate-400">{siteConfig.domainSuffix}</span>
              )}
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              {siteConfig.description}
            </p>
            <p className="mt-4 text-xs text-slate-500 leading-relaxed max-w-xs">
              {siteConfig.footerDisclaimer ?? (
                <>
                  <strong className="text-slate-400">Independent editorial.</strong>{' '}
                  We may earn a commission if you purchase through our affiliate links — this does not affect our editorial independence.
                </>
              )}
            </p>

            {/* Trust badges area */}
            <div className="mt-6 flex items-center gap-3">
              <div className="rounded-md border border-slate-700 px-3 py-1.5 text-xs text-slate-400">
                Editorially independent
              </div>
              <div className="rounded-md border border-slate-700 px-3 py-1.5 text-xs text-slate-400">
                UK-focused
              </div>
            </div>
          </div>

          {/* Dynamic footer columns — driven by footerNav.columns in navigation.ts */}
          {footerNav.columns.map((col) => (
            <FooterLinkColumn key={col.title} title={col.title} links={col.links} />
          ))}
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-slate-800">
        <div className="page-container py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              &copy; {currentYear} {siteConfig.publisherName}. All rights reserved.
            </p>
            <nav aria-label="Legal navigation">
              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {footerNav.legal.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ---------------------------------------------------------------
   Footer Link Column
--------------------------------------------------------------- */

type FooterLinkColumnProps = FooterNavColumn

function FooterLinkColumn({ title, links }: FooterLinkColumnProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white mb-4">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
