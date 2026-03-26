import { NextResponse } from 'next/server'

const VERCEL_API_BASE = 'https://vercel.com/api'
const TEAM_ID = 'team_21RcYfzusgjDwFQKWFmUHMQF'
const PROJECT_ID = 'prj_OQ2hJ5DFy9yIDGeksLzRIP5uvgsk'

async function vercelFetch(path: string, token: string) {
  const res = await fetch(`${VERCEL_API_BASE}${path}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: 'no-store',
  })
  const body = await res.text()
  return { ok: res.ok, status: res.status, body }
}

export async function GET(request: Request) {
  const token = process.env.VERCEL_TOKEN
  if (!token) {
    return NextResponse.json(
      {
        error: 'VERCEL_TOKEN not configured',
        instructions:
          'Add VERCEL_TOKEN to your environment variables. Get a token from Vercel → Account Settings → Tokens.',
        setupUrl: 'https://vercel.com/account/tokens',
      },
      { status: 400 }
    )
  }

  const { searchParams } = new URL(request.url)
  const days = parseInt(searchParams.get('days') ?? '30', 10)

  // Vercel Analytics API uses seconds for timestamps
  const nowSec = Math.floor(Date.now() / 1000)
  const fromSec = nowSec - days * 24 * 60 * 60

  const base = `/v1/web-analytics/stats?teamId=${TEAM_ID}&projectId=${PROJECT_ID}&from=${fromSec}&to=${nowSec}&environment=production`

  try {
    const [statsResult, pagesResult, referrersResult] = await Promise.all([
      vercelFetch(base, token),
      vercelFetch(`${base}&breakdown=path&limit=10`, token),
      vercelFetch(`${base}&breakdown=referrer&limit=10`, token),
    ])

    // If the primary stats call failed, return diagnostic info
    if (!statsResult.ok) {
      let parsed: unknown = null
      try {
        parsed = JSON.parse(statsResult.body)
      } catch {
        // body isn't JSON
      }
      return NextResponse.json(
        {
          error: 'Vercel API error',
          httpStatus: statsResult.status,
          vercelResponse: parsed ?? statsResult.body,
          vercelDashboardUrl: `https://vercel.com/hishan-parrys-projects/soletraderguide/analytics`,
          hint: getHint(statsResult.status),
        },
        { status: 502 }
      )
    }

    const parseJson = (r: { ok: boolean; body: string }) => {
      if (!r.ok) return null
      try {
        return JSON.parse(r.body)
      } catch {
        return null
      }
    }

    return NextResponse.json({
      period: { days, from: fromSec * 1000, to: nowSec * 1000 },
      stats: parseJson(statsResult),
      topPages: parseJson(pagesResult),
      referrers: parseJson(referrersResult),
      vercelDashboardUrl: `https://vercel.com/hishan-parrys-projects/soletraderguide/analytics`,
    })
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Failed to fetch analytics',
        message: error instanceof Error ? error.message : 'Unknown error',
        vercelDashboardUrl: `https://vercel.com/hishan-parrys-projects/soletraderguide/analytics`,
      },
      { status: 500 }
    )
  }
}

function getHint(status: number): string {
  switch (status) {
    case 400:
      return 'Bad request — the API parameters may be incorrect or Web Analytics is not enabled on this project.'
    case 401:
      return 'Unauthorised — the VERCEL_TOKEN is invalid or expired. Generate a new one at vercel.com/account/tokens.'
    case 403:
      return 'Forbidden — the token does not have permission to read analytics, or Web Analytics is not available on the Hobby plan via API. Try upgrading to Pro, or use the Vercel dashboard link below.'
    case 404:
      return 'Not found — Web Analytics may not be enabled for this project, or the project/team IDs are incorrect.'
    case 429:
      return 'Rate limited — too many requests. Try again in a moment.'
    default:
      return `Vercel returned HTTP ${status}. Check the vercelResponse field for details.`
  }
}
