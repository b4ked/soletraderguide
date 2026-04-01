import { NextRequest, NextResponse } from 'next/server'

const VPS_API_URL = process.env.VPS_API_URL
const VPS_API_SECRET = process.env.VPS_API_SECRET

function vpsHeaders(): HeadersInit {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${VPS_API_SECRET}`,
  }
}

function notConfigured() {
  return NextResponse.json(
    { error: 'VPS_API_URL not configured' },
    { status: 503 }
  )
}

// PATCH /api/admin/schedules/[id] — update schedule date, notes, or priority
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!VPS_API_URL || !VPS_API_SECRET) return notConfigured()
  const { id } = await params

  try {
    const body = await request.json()
    const res = await fetch(`${VPS_API_URL}/api/schedules/${id}`, {
      method: 'PATCH',
      headers: vpsHeaders(),
      body: JSON.stringify(body),
    })
    const data = await res.json()
    return NextResponse.json(data, { status: res.status })
  } catch {
    return NextResponse.json({ error: 'VPS unreachable' }, { status: 502 })
  }
}

// DELETE /api/admin/schedules/[id] — remove a schedule
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!VPS_API_URL || !VPS_API_SECRET) return notConfigured()
  const { id } = await params

  try {
    const res = await fetch(`${VPS_API_URL}/api/schedules/${id}`, {
      method: 'DELETE',
      headers: vpsHeaders(),
    })
    const data = await res.json()
    return NextResponse.json(data, { status: res.status })
  } catch {
    return NextResponse.json({ error: 'VPS unreachable' }, { status: 502 })
  }
}
