import { NextResponse } from 'next/server'

const VERCEL_API_BASE = 'https://api.vercel.com'
const TEAM_ID = 'team_21RcYfzusgjDwFQKWFmUHMQF'
const PROJECT_ID = 'prj_OQ2hJ5DFy9yIDGeksLzRIP5uvgsk'

export interface DeploymentMeta {
  uid: string
  url: string
  state: string
  createdAt: number
  meta?: { githubCommitMessage?: string; githubCommitRef?: string }
}

export async function GET() {
  const token = process.env.VERCEL_TOKEN
  if (!token) {
    return NextResponse.json(
      { error: 'VERCEL_TOKEN not configured', deployments: [] },
      { status: 400 }
    )
  }

  try {
    // Fetch recent deployments — this IS documented in the Vercel public REST API
    const res = await fetch(
      `${VERCEL_API_BASE}/v6/deployments?teamId=${TEAM_ID}&projectId=${PROJECT_ID}&limit=8&target=production`,
      {
        headers: { Authorization: `Bearer ${token}` },
        cache: 'no-store',
      }
    )

    if (!res.ok) {
      const body = await res.text()
      return NextResponse.json(
        { error: `Vercel API error (HTTP ${res.status})`, details: body, deployments: [] },
        { status: 502 }
      )
    }

    const data = await res.json()
    const deployments: DeploymentMeta[] = (data.deployments ?? []).map(
      (d: Record<string, unknown>) => ({
        uid: d.uid,
        url: d.url,
        state: d.state,
        createdAt: d.createdAt,
        meta: d.meta,
      })
    )

    return NextResponse.json({ deployments })
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Failed to fetch deployments',
        message: error instanceof Error ? error.message : 'Unknown error',
        deployments: [],
      },
      { status: 500 }
    )
  }
}
