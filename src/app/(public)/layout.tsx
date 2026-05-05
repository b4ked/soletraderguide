import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { OrganisationSchema } from '@/components/seo/OrganisationSchema'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { StickyXeroCTA } from '../../components/StickyXeroCTA'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <OrganisationSchema />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <StickyXeroCTA />
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  )
}
