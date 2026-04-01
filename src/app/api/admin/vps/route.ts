import { NextResponse } from 'next/server'

const VPS_API_URL = process.env.VPS_API_URL
const VPS_API_SECRET = process.env.VPS_API_SECRET

// GET /api/admin/vps — returns VPS status + all schedules in one call
export async function GET() {
  if (!VPS_API_URL || !VPS_API_SECRET) {
    return NextResponse.json({ error: 'VPS not configured' }, { status: 503 })
  }

  try {
    const [statusRes, schedulesRes] = await Promise.all([
      fetch(`${VPS_API_URL}/api/status`, {
        headers: { Authorization: `Bearer ${VPS_API_SECRET}` },
        next: { revalidate: 0 },
      }),
      fetch(`${VPS_API_URL}/api/schedules`, {
        headers: { Authorization: `Bearer ${VPS_API_SECRET}` },
        next: { revalidate: 0 },
      }),
    ])

    const [status, schedules] = await Promise.all([
      statusRes.json(),
      schedulesRes.json(),
    ])

    return NextResponse.json({ status, schedules: schedules.schedules ?? [] })
  } catch {
    return NextResponse.json({ error: 'Could not reach VPS' }, { status: 503 })
  }
}
