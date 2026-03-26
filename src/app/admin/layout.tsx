import type { Metadata } from 'next'
import AdminNav from './_components/AdminNav'

export const metadata: Metadata = {
  title: 'Admin — SoleTraderGuide',
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
