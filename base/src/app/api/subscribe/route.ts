import { NextRequest, NextResponse } from 'next/server'
import { siteConfig } from '@/data/site-config'

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: NextRequest) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  if (
    typeof body !== 'object' ||
    body === null ||
    !('email' in body) ||
    typeof (body as Record<string, unknown>).email !== 'string'
  ) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 })
  }

  const email = ((body as Record<string, unknown>).email as string).trim()

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: 'A valid email address is required' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.NEWSLETTER_FROM_EMAIL || siteConfig.email
  const fromName = process.env.NEWSLETTER_FROM_NAME || siteConfig.name
  const recipientEmail = process.env.NEWSLETTER_RECIPIENT_EMAIL || siteConfig.email

  if (apiKey) {
    const [ownerRes, welcomeRes] = await Promise.all([
      // Notify site owner of new subscriber
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: `${fromName} <${fromEmail}>`,
          to: recipientEmail,
          subject: `New subscriber: ${email}`,
          html: `<p>New newsletter subscriber: <strong>${email}</strong></p><p>Site: ${siteConfig.name}</p><p>Time: ${new Date().toISOString()}</p>`,
        }),
      }),

      // Send welcome email to subscriber
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: `${fromName} <${fromEmail}>`,
          to: email,
          subject: `Welcome to ${siteConfig.name}`,
          html: `
            <div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;padding:32px 16px">
              <div style="background:#1d4ed8;border-radius:12px;padding:24px;margin-bottom:24px;text-align:center">
                <p style="margin:0;color:#ffffff;font-size:18px;font-weight:700">${siteConfig.name}</p>
                <p style="margin:6px 0 0;color:rgba(255,255,255,0.75);font-size:13px">${siteConfig.description}</p>
              </div>
              <h1 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#0f172a">You're subscribed</h1>
              <p style="margin:0 0 20px;font-size:15px;color:#475569;line-height:1.6">
                Thanks for subscribing to ${siteConfig.name}. We'll send you useful updates — no spam, unsubscribe anytime.
              </p>
              <a href="${siteConfig.url}"
                style="display:inline-block;background:#1d4ed8;color:#ffffff;text-decoration:none;padding:12px 24px;border-radius:8px;font-size:14px;font-weight:600">
                Visit ${siteConfig.name} →
              </a>
              <p style="margin:32px 0 0;font-size:12px;color:#94a3b8;line-height:1.5">
                You're receiving this because you subscribed at
                <a href="${siteConfig.url}" style="color:#1d4ed8;text-decoration:none">${siteConfig.domain}</a>.
              </p>
            </div>
          `,
        }),
      }),
    ])

    if (!ownerRes.ok || !welcomeRes.ok) {
      console.error('[subscribe] Resend error', { owner: ownerRes.status, welcome: welcomeRes.status })
    }
  }

  return NextResponse.json({ success: true })
}
