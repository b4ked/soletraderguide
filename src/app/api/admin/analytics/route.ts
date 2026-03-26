import { NextResponse } from 'next/server'

const VERCEL_API_BASE = 'https://vercel.com/api'
const TEAM_ID = 'team_21RcYfzusgjDwFQKWFmUHMQF'
const PROJECT_ID = 'prj_OQ2hJ5DFy9yIDGeksLzRIP5uvgsk'

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

  const now = Date.now()
  const from = now - days * 24 * 60 * 60 * 1000

  try {
    // Fetch web analytics overview
    const statsRes = await fetch(
      `${VERCEL_API_BASE}/v1/web-analytics/stats?teamId=${TEAM_ID}&projectId=${PROJECT_ID}&from=${from}&to=${now}&filter=%7B%7D&environment=production`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    )

    // Fetch top pages
    const pagesRes = await fetch(
      `${VERCEL_API_BASE}/v1/web-analytics/stats?teamId=${TEAM_ID}&projectId=${PROJECT_ID}&from=${from}&to=${now}&filter=%7B%7D&environment=production&breakdown=path&limit=10`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    )

    // Fetch referrers
    const referrersRes = await fetch(
      `${VERCEL_API_BASE}/v1/web-analytics/stats?teamId=${TEAM_ID}&projectId=${PROJECT_ID}&from=${from}&to=${now}&filter=%7B%7D&environment=production&breakdown=referrer&limit=10`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    )

    const [statsData, pagesData, referrersData] = await Promise.all([
      statsRes.ok ? statsRes.json() : null,
      pagesRes.ok ? pagesRes.json() : null,
      referrersRes.ok ? referrersRes.json() : null,
    ])

    if (!statsRes.ok && !pagesRes.ok) {
      const errorText = await statsRes.text().catch(() => 'Unknown error')
      return NextResponse.json(
        {
          error: 'Vercel API error',
          status: statsRes.status,
          details: errorText,
          vercelDashboardUrl: `https://vercel.com/hishan-parrys-projects/soletraderguide/analytics`,
        },
        { status: 502 }
      )
    }

    return NextResponse.json({
      period: { days, from, to: now },
      stats: statsData,
      topPages: pagesData,
      referrers: referrersData,
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
