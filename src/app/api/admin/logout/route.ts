import { NextResponse } from 'next/server'

const ADMIN_SESSION_COOKIE = 'stg_admin_session'

export async function POST() {
  const response = NextResponse.json({ success: true })
  response.cookies.delete(ADMIN_SESSION_COOKIE)
  return response
}
