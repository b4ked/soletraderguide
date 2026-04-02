import { NextRequest, NextResponse } from 'next/server'
import { siteConfig } from '@/data/site-config'

// Generic newsletter sender — called by Vercel Cron (see vercel.json)
// The newsletter HTML content is site-specific — override NEWSLETTER_HTML env var
// or replace this route in the site repo with a site-specific version.
// The base implementation sends a simple "latest updates" email.

export async function GET(request: NextRequest) {
  // Allow both cron invocation (GET) and manual trigger
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    // Allow Vercel cron invocations (they set x-vercel-cron header)
    const cronHeader = request.headers.get('x-vercel-cron')
    if (!cronHeader) {
      return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
    }
  }

  const apiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.NEWSLETTER_FROM_EMAIL || siteConfig.email
  const fromName = process.env.NEWSLETTER_FROM_NAME || siteConfig.name
  const audienceId = process.env.RESEND_AUDIENCE_ID

  if (!apiKey) {
    return NextResponse.json({ error: 'RESEND_API_KEY not configured' }, { status: 503 })
  }

  if (!audienceId) {
    return NextResponse.json({ error: 'RESEND_AUDIENCE_ID not configured' }, { status: 503 })
  }

  // Fetch contacts from Resend audience
  const contactsRes = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
    headers: { Authorization: `Bearer ${apiKey}` },
  })

  if (!contactsRes.ok) {
    return NextResponse.json({ error: 'Failed to fetch contacts' }, { status: 502 })
  }

  const { data: contacts } = await contactsRes.json() as { data: { email: string }[] }

  if (!contacts?.length) {
    return NextResponse.json({ sent: 0, message: 'No contacts to send to' })
  }

  const subject = process.env.NEWSLETTER_SUBJECT || `Updates from ${siteConfig.name}`
  const htmlContent = process.env.NEWSLETTER_HTML || `
    <div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;padding:32px 16px">
      <div style="background:#1d4ed8;border-radius:12px;padding:24px;margin-bottom:24px;text-align:center">
        <p style="margin:0;color:#ffffff;font-size:18px;font-weight:700">${siteConfig.name}</p>
      </div>
      <h1 style="font-size:22px;font-weight:700;color:#0f172a">Latest from ${siteConfig.name}</h1>
      <p style="font-size:15px;color:#475569;line-height:1.6">
        Visit <a href="${siteConfig.url}" style="color:#1d4ed8">${siteConfig.name}</a> for the latest guides and comparisons.
      </p>
      <p style="margin-top:32px;font-size:12px;color:#94a3b8">
        You're receiving this because you subscribed at ${siteConfig.domain}.
      </p>
    </div>
  `

  let sent = 0
  let failed = 0

  for (const contact of contacts) {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: `${fromName} <${fromEmail}>`,
        to: contact.email,
        subject,
        html: htmlContent,
      }),
    })
    if (res.ok) { sent++ } else { failed++ }
  }

  return NextResponse.json({ sent, failed, total: contacts.length })
}
