import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const ADMIN_SESSION_COOKIE = 'stg_admin_session'

async function getExpectedToken(secret: string): Promise<string> {
  const enc = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode('stg-admin-v1'))
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const isAdminRoute =
    pathname.startsWith('/admin') || pathname.startsWith('/api/admin')

  // Set header so root layout can conditionally hide public nav
  const response = NextResponse.next()
  response.headers.set('x-is-admin', isAdminRoute ? '1' : '0')

  if (!isAdminRoute) return response

  // Allow login page and login API through without auth check
  if (pathname === '/admin/login' || pathname === '/api/admin/login') {
    return response
  }

  const secret = process.env.ADMIN_SECRET
  if (!secret) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  const sessionToken = request.cookies.get(ADMIN_SESSION_COOKIE)?.value
  if (!sessionToken) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  const expectedToken = await getExpectedToken(secret)
  if (sessionToken !== expectedToken) {
    const redirectResponse = NextResponse.redirect(
      new URL('/admin/login', request.url)
    )
    redirectResponse.cookies.delete(ADMIN_SESSION_COOKIE)
    return redirectResponse
  }

  return response
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}
