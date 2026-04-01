import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { headers } from 'next/headers'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { OrganisationSchema } from '@/components/seo/OrganisationSchema'
import { siteConfig } from '@/data/site-config'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline ?? siteConfig.description}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.publisherName, url: siteConfig.url }],
  creator: siteConfig.publisherName,
  publisher: siteConfig.publisherName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline ?? siteConfig.description}`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.tagline ?? siteConfig.description}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: siteConfig.url,
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const headersList = await headers()
  const isAdmin = headersList.get('x-is-admin') === '1'

  return (
    <html lang="en-GB" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <head>
        {/* Organisation schema — appears on every page */}
        {!isAdmin && <OrganisationSchema />}
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {!isAdmin && (
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
        )}

        {!isAdmin && <Header />}

        <main id="main-content" className="flex-1">
          {children}
        </main>

        {!isAdmin && <Footer />}
        {!isAdmin && <Analytics />}
        {!isAdmin && <SpeedInsights />}
      </body>
    </html>
  )
}
