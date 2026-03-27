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

    const [ownerRes, welcomeRes] = await Promise.all([
      // Notify site owner
      fetch('https://api.resend.com/emails', {
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
      }),
      // Welcome email to subscriber
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'SoleTraderGuide <hello@soletraderguide.co.uk>',
          to: email,
          subject: 'Your MTD quick-start guide (and what to do before April)',
          html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f6f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:40px 16px">
    <tr><td align="center">
      <table width="100%" style="max-width:580px">

        <!-- Header -->
        <tr>
          <td style="background:#0d6e6e;padding:24px 32px;border-radius:8px 8px 0 0">
            <p style="margin:0;color:#ffffff;font-size:17px;font-weight:700;letter-spacing:-0.3px">SoleTraderGuide</p>
            <p style="margin:3px 0 0;color:#a7d4d4;font-size:12px;letter-spacing:0.3px;text-transform:uppercase">MTD for Sole Traders, Explained Simply</p>
          </td>
        </tr>

        <!-- Main card -->
        <tr>
          <td style="background:#ffffff;padding:36px 32px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0">

            <p style="margin:0 0 6px;font-size:22px;font-weight:700;color:#0f172a;line-height:1.3">You're in. Here's what actually matters.</p>
            <p style="margin:0 0 28px;font-size:14px;color:#64748b">Welcome to SoleTraderGuide — MTD updates, deadline reminders, and tax tips for UK sole traders.</p>

            <!-- Divider -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 28px">
              <tr><td style="border-top:2px solid #e6f3f3"></td></tr>
            </table>

            <!-- 3 key things -->
            <p style="margin:0 0 16px;font-size:13px;font-weight:700;color:#0d6e6e;text-transform:uppercase;letter-spacing:0.8px">Start here — 3 things to know</p>

            <!-- Thing 1 -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 20px">
              <tr>
                <td width="36" valign="top" style="padding-top:2px">
                  <div style="width:28px;height:28px;background:#e6f3f3;border-radius:50%;text-align:center;line-height:28px;font-size:13px;font-weight:700;color:#0d6e6e">1</div>
                </td>
                <td style="padding-left:12px">
                  <p style="margin:0 0 4px;font-size:15px;font-weight:600;color:#0f172a">Making Tax Digital is mandatory from April 2026</p>
                  <p style="margin:0;font-size:14px;color:#475569;line-height:1.6">If your self-employment or property income is over £50,000, you must use HMRC-approved software and submit quarterly updates. £30k threshold follows in 2027, £20k in 2028.</p>
                </td>
              </tr>
            </table>

            <!-- Thing 2 -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 20px">
              <tr>
                <td width="36" valign="top" style="padding-top:2px">
                  <div style="width:28px;height:28px;background:#e6f3f3;border-radius:50%;text-align:center;line-height:28px;font-size:13px;font-weight:700;color:#0d6e6e">2</div>
                </td>
                <td style="padding-left:12px">
                  <p style="margin:0 0 4px;font-size:15px;font-weight:600;color:#0f172a">Your Self Assessment return doesn't go away</p>
                  <p style="margin:0;font-size:14px;color:#475569;line-height:1.6">MTD adds quarterly updates on top of your annual return — it doesn't replace it. You still file a final declaration every January. The software handles both.</p>
                </td>
              </tr>
            </table>

            <!-- Thing 3 -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 32px">
              <tr>
                <td width="36" valign="top" style="padding-top:2px">
                  <div style="width:28px;height:28px;background:#e6f3f3;border-radius:50%;text-align:center;line-height:28px;font-size:13px;font-weight:700;color:#0d6e6e">3</div>
                </td>
                <td style="padding-left:12px">
                  <p style="margin:0 0 4px;font-size:15px;font-weight:600;color:#0f172a">Free options exist — you don't have to pay</p>
                  <p style="margin:0;font-size:14px;color:#475569;line-height:1.6">FreeAgent is free with NatWest, RBS, Ulster Bank, or Mettle. Sage has a free sole trader plan. You may already qualify for free compliant software right now.</p>
                </td>
              </tr>
            </table>

            <!-- CTA block -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0fafa;border-radius:8px;margin:0 0 32px">
              <tr>
                <td style="padding:24px">
                  <p style="margin:0 0 6px;font-size:15px;font-weight:700;color:#0f172a">Not sure if MTD applies to you yet?</p>
                  <p style="margin:0 0 16px;font-size:14px;color:#475569;line-height:1.6">Answer 3 questions and get a clear answer — including your exact deadline and what you need to do.</p>
                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="background:#0d6e6e;border-radius:6px">
                        <a href="https://soletraderguide.co.uk/tools/mtd-eligibility-checker"
                           style="display:inline-block;padding:11px 22px;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none">
                          Check my MTD status →
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Secondary links -->
            <p style="margin:0 0 12px;font-size:13px;font-weight:700;color:#0d6e6e;text-transform:uppercase;letter-spacing:0.8px">Most useful pages on the site</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f1f5f9">
                  <a href="https://soletraderguide.co.uk/software/best-mtd-software-for-sole-traders" style="text-decoration:none">
                    <p style="margin:0;font-size:14px;font-weight:600;color:#0d6e6e">Best MTD software for sole traders →</p>
                    <p style="margin:2px 0 0;font-size:13px;color:#64748b">Xero, QuickBooks, Sage, and FreeAgent compared side by side</p>
                  </a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f1f5f9">
                  <a href="https://soletraderguide.co.uk/reviews/freeagent" style="text-decoration:none">
                    <p style="margin:0;font-size:14px;font-weight:600;color:#0d6e6e">FreeAgent review — is it really free? →</p>
                    <p style="margin:2px 0 0;font-size:13px;color:#64748b">The most sole-trader-friendly option, and when you qualify for it free</p>
                  </a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0">
                  <a href="https://soletraderguide.co.uk/mtd-for-sole-traders/deadlines" style="text-decoration:none">
                    <p style="margin:0;font-size:14px;font-weight:600;color:#0d6e6e">MTD deadlines explained →</p>
                    <p style="margin:2px 0 0;font-size:13px;color:#64748b">All 4 quarterly submission dates, plus the final declaration</p>
                  </a>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f8fafc;padding:20px 32px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 8px 8px">
            <p style="margin:0 0 6px;font-size:12px;color:#94a3b8;line-height:1.6">
              You're receiving this because you subscribed at <a href="https://soletraderguide.co.uk" style="color:#0d6e6e;text-decoration:none">soletraderguide.co.uk</a>.
            </p>
            <p style="margin:0;font-size:12px;color:#94a3b8">
              To unsubscribe, reply to this email with "unsubscribe".
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,
        }),
      }),
    ])

    if (!ownerRes.ok) {
      console.error('[Newsletter] Owner notification error:', ownerRes.status)
      return NextResponse.json({ error: 'Failed to process subscription' }, { status: 500 })
    }

    if (!welcomeRes.ok) {
      console.error('[Newsletter] Welcome email error:', welcomeRes.status)
      // Non-fatal — subscriber was recorded, welcome email failed
    }
  } else {
    console.log(`[Newsletter] New subscriber: ${email}`)
  }

  return NextResponse.json({ success: true })
}
