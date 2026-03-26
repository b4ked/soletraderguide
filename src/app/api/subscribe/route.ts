import { NextRequest, NextResponse } from 'next/server'

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

  if (apiKey) {
    const recipientEmail =
      process.env.NEWSLETTER_RECIPIENT_EMAIL || 'hello@soletraderguide.co.uk'

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'SoleTraderGuide <noreply@soletraderguide.co.uk>',
        to: recipientEmail,
        subject: `New subscriber: ${email}`,
        html: `<p>New newsletter subscriber: <strong>${email}</strong></p><p>Time: ${new Date().toISOString()}</p>`,
      }),
    })

    if (!resendResponse.ok) {
      console.error('[Newsletter] Resend API error:', resendResponse.status)
      return NextResponse.json({ error: 'Failed to process subscription' }, { status: 500 })
    }
  } else {
    console.log(`[Newsletter] New subscriber: ${email}`)
  }

  return NextResponse.json({ success: true })
}
