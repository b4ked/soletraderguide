import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const VPS_API_URL = process.env.VPS_API_URL
const VPS_API_SECRET = process.env.VPS_API_SECRET

async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  return cookieStore.get('admin_auth')?.value === 'true'
}

// GET /api/admin/vps/logs?lines=100
export async function GET(request: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
  }

  if (!VPS_API_URL || !VPS_API_SECRET) {
    return NextResponse.json({ error: 'VPS not configured' }, { status: 503 })
  }

  const { searchParams } = new URL(request.url)
  const lines = searchParams.get('lines') ?? '100'

  try {
    const res = await fetch(`${VPS_API_URL}/api/logs?lines=${lines}`, {
      headers: { Authorization: `Bearer ${VPS_API_SECRET}` },
      next: { revalidate: 0 },
    })
    const data = await res.json()
    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Could not reach VPS' }, { status: 503 })
  }
}
