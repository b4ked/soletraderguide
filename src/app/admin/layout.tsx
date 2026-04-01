import type { Metadata } from 'next'
import AdminNav from './_components/AdminNav'
import { siteConfig } from '@/data/site-config'

export const metadata: Metadata = {
  title: `Admin — ${siteConfig.name}`,
  robots: { index: false, follow: false },
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-8">{children}</main>
    </div>
  )
}
