import { NextRequest, NextResponse } from 'next/server'

const VPS_API_URL = process.env.VPS_API_URL
const VPS_API_SECRET = process.env.VPS_API_SECRET

function vpsHeaders(): HeadersInit {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${VPS_API_SECRET}`,
  }
}

// POST /api/admin/schedules/[id]/complete — mark a schedule as published
// Called by the VPS cron runner after a successful pipeline run
export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!VPS_API_URL || !VPS_API_SECRET) {
    return NextResponse.json({ error: 'VPS_API_URL not configured' }, { status: 503 })
  }
  const { id } = await params

  try {
    const res = await fetch(`${VPS_API_URL}/api/schedules/${id}/complete`, {
      method: 'POST',
      headers: vpsHeaders(),
    })
    const data = await res.json()
    return NextResponse.json(data, { status: res.status })
  } catch {
    return NextResponse.json({ error: 'VPS unreachable' }, { status: 502 })
  }
}
