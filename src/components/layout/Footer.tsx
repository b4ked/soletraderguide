import Link from 'next/link'
import { footerNav } from '@/data/navigation'
import { siteConfig } from '@/data/site-config'

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
              aria-label="SoleTraderGuide — home"
            >
              <span className="text-lg font-bold text-white">SoleTraderGuide</span>
              <span className="text-sm text-slate-400">.co.uk</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Plain-English guidance on Making Tax Digital for sole traders.
              Compare MTD software, check your eligibility, and get ready with confidence.
            </p>
            <p className="mt-4 text-xs text-slate-500 leading-relaxed max-w-xs">
              <strong className="text-slate-400">Not financial or tax advice.</strong>{' '}
              Always verify information with HMRC or a qualified accountant. We may earn a
              commission if you purchase through our affiliate links — this does not affect
              our editorial independence.
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

          {/* MTD Guides column */}
          <FooterLinkColumn title="MTD Guides" links={footerNav.mtdGuides} />

          {/* Software column */}
          <FooterLinkColumn title="Software" links={footerNav.software} />

          {/* Resources column */}
          <FooterLinkColumn title="Resources" links={footerNav.resources} />
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

interface FooterLinkColumnProps {
  title: string
  links: { label: string; href: string }[]
}

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
