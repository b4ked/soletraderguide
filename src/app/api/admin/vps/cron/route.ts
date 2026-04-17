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
  return NextResponse.json({ error: 'VPS not configured' }, { status: 503 })
}

export async function GET() {
  if (!VPS_API_URL || !VPS_API_SECRET) return notConfigured()

  try {
    const res = await fetch(`${VPS_API_URL}/api/cron`, {
      headers: vpsHeaders(),
      cache: 'no-store',
    })
    const data = await res.json()
    return NextResponse.json(data, { status: res.status })
  } catch {
    return NextResponse.json({ error: 'VPS unreachable' }, { status: 502 })
  }
}

export async function POST(request: NextRequest) {
  if (!VPS_API_URL || !VPS_API_SECRET) return notConfigured()

  try {
    const body = await request.json()
    const action = body.action

    let endpoint = '/api/cron'
    let method: 'POST' = 'POST'
    let payload: string | undefined

    if (action === 'pause') {
      endpoint = '/api/cron/pause'
    } else if (action === 'resume') {
      endpoint = '/api/cron/resume'
    } else if (action === 'set-interval') {
      endpoint = '/api/cron/interval'
      payload = JSON.stringify({ minutes: body.minutes })
    } else {
      return NextResponse.json({ error: 'Unsupported cron action' }, { status: 400 })
    }

    const res = await fetch(`${VPS_API_URL}${endpoint}`, {
      method,
      headers: vpsHeaders(),
      body: payload,
    })
    const data = await res.json()
    return NextResponse.json(data, { status: res.status })
  } catch {
    return NextResponse.json({ error: 'VPS unreachable' }, { status: 502 })
  }
}
