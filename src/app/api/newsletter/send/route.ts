import { NextRequest, NextResponse } from 'next/server'

// Month 1 newsletter — "MTD is now live"
// Sent ~30 days after launch via Vercel Cron (see vercel.json)
// Update NEWSLETTER_EDITION env var to control which edition fires (default: '1')

const NEWSLETTERS: Record<string, { subject: string; html: string }> = {
  '1': {
    subject: 'MTD is now live — what actually changed on 6 April',
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
            <p style="margin:3px 0 0;color:#a7d4d4;font-size:12px;letter-spacing:0.3px;text-transform:uppercase">April 2026 — Monthly Update</p>
          </td>
        </tr>

        <!-- Main card -->
        <tr>
          <td style="background:#ffffff;padding:36px 32px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0">

            <p style="margin:0 0 6px;font-size:22px;font-weight:700;color:#0f172a;line-height:1.3">MTD is now live. Here's what changed.</p>
            <p style="margin:0 0 28px;font-size:14px;color:#64748b">Making Tax Digital for Income Tax came into effect on 6 April 2026. This is what it means for you.</p>

            <!-- Divider -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 28px">
              <tr><td style="border-top:2px solid #e6f3f3"></td></tr>
            </table>

            <!-- Main story -->
            <p style="margin:0 0 12px;font-size:13px;font-weight:700;color:#0d6e6e;text-transform:uppercase;letter-spacing:0.8px">What happened on 6 April</p>
            <p style="margin:0 0 16px;font-size:15px;color:#374151;line-height:1.7">
              Making Tax Digital for Income Tax officially started. If your qualifying income — self-employment plus UK property — exceeds £50,000, you are now required to keep digital records and submit quarterly updates to HMRC through approved software.
            </p>
            <p style="margin:0 0 28px;font-size:15px;color:#374151;line-height:1.7">
              If you're below £50,000, nothing changes yet. The £30,000 threshold follows in April 2027, and £20,000 in April 2028.
            </p>

            <!-- Deadline ticker -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#fff8ed;border:1px solid #fde68a;border-radius:8px;margin:0 0 28px">
              <tr>
                <td style="padding:20px 24px">
                  <p style="margin:0 0 4px;font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:0.6px">Next quarterly deadline</p>
                  <p style="margin:0 0 4px;font-size:20px;font-weight:700;color:#0f172a">7 August 2026</p>
                  <p style="margin:0;font-size:13px;color:#78716c">Q1 submission — covering 6 April to 5 July 2026</p>
                </td>
              </tr>
            </table>

            <!-- Actionable section -->
            <p style="margin:0 0 12px;font-size:13px;font-weight:700;color:#0d6e6e;text-transform:uppercase;letter-spacing:0.8px">One thing to do this month</p>
            <p style="margin:0 0 16px;font-size:15px;color:#374151;line-height:1.7">
              If you're affected and haven't chosen software yet, do it now — before your Q1 deadline. You need software running from the start of the tax year to capture all your records. Starting late means manually importing April–July data, which most software supports but adds friction.
            </p>

            <!-- CTA -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0fafa;border-radius:8px;margin:0 0 32px">
              <tr>
                <td style="padding:24px">
                  <p style="margin:0 0 6px;font-size:15px;font-weight:700;color:#0f172a">Not sure which software to use?</p>
                  <p style="margin:0 0 16px;font-size:14px;color:#475569;line-height:1.6">We've compared Xero, QuickBooks, Sage, and FreeAgent on price, MTD compliance, and sole trader suitability — including which ones are free.</p>
                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="background:#0d6e6e;border-radius:6px">
                        <a href="https://soletraderguide.co.uk/software/best-mtd-software-for-sole-traders"
                           style="display:inline-block;padding:11px 22px;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none">
                          Compare MTD software →
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Tax tip -->
            <p style="margin:0 0 12px;font-size:13px;font-weight:700;color:#0d6e6e;text-transform:uppercase;letter-spacing:0.8px">Tax tip — set aside 25–30% now</p>
            <p style="margin:0 0 28px;font-size:15px;color:#374151;line-height:1.7">
              Your first January tax bill under MTD is the same as before — but if this is your first year owing over £1,000, HMRC will also ask for a payment on account (50% of the following year's estimated bill) at the same time. Setting aside 25–30% of every payment you receive means you'll never be caught short.
            </p>

            <!-- From the site -->
            <p style="margin:0 0 12px;font-size:13px;font-weight:700;color:#0d6e6e;text-transform:uppercase;letter-spacing:0.8px">Worth reading this month</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f1f5f9">
                  <a href="https://soletraderguide.co.uk/blog/first-quarterly-update-what-sole-traders-need-to-do" style="text-decoration:none">
                    <p style="margin:0;font-size:14px;font-weight:600;color:#0d6e6e">Your first quarterly MTD update — what to do →</p>
                    <p style="margin:2px 0 0;font-size:13px;color:#64748b">Step-by-step guide to submitting your Q1 update before 7 August</p>
                  </a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0">
                  <a href="https://soletraderguide.co.uk/reviews/freeagent" style="text-decoration:none">
                    <p style="margin:0;font-size:14px;font-weight:600;color:#0d6e6e">FreeAgent — free with NatWest, RBS, Ulster &amp; Mettle →</p>
                    <p style="margin:2px 0 0;font-size:13px;color:#64748b">Full review — pricing, MTD compliance, and who it suits best</p>
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
  },
}

export async function POST(request: NextRequest) {
  // Verify cron secret so only Vercel Cron (or you manually) can trigger this
  const authHeader = request.headers.get('authorization')
  const cronSecret = process.env.CRON_SECRET
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const audienceId = process.env.RESEND_AUDIENCE_ID

  if (!apiKey || !audienceId) {
    console.error('[Newsletter Send] Missing RESEND_API_KEY or RESEND_AUDIENCE_ID')
    return NextResponse.json({ error: 'Missing configuration' }, { status: 500 })
  }

  const edition = process.env.NEWSLETTER_EDITION ?? '1'
  const newsletter = NEWSLETTERS[edition]

  if (!newsletter) {
    console.error(`[Newsletter Send] No newsletter found for edition: ${edition}`)
    return NextResponse.json({ error: `Unknown edition: ${edition}` }, { status: 400 })
  }

  // Create and immediately send a broadcast to the full audience
  const createRes = await fetch('https://api.resend.com/broadcasts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      audience_id: audienceId,
      from: 'SoleTraderGuide <hello@soletraderguide.co.uk>',
      reply_to: 'hello@soletraderguide.co.uk',
      subject: newsletter.subject,
      html: newsletter.html,
      name: `Month ${edition} Newsletter`,
    }),
  })

  if (!createRes.ok) {
    const err = await createRes.text()
    console.error('[Newsletter Send] Broadcast create error:', err)
    return NextResponse.json({ error: 'Failed to create broadcast' }, { status: 500 })
  }

  const { id: broadcastId } = await createRes.json() as { id: string }

  // Send the broadcast
  const sendRes = await fetch(`https://api.resend.com/broadcasts/${broadcastId}/send`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  })

  if (!sendRes.ok) {
    const err = await sendRes.text()
    console.error('[Newsletter Send] Broadcast send error:', err)
    return NextResponse.json({ error: 'Failed to send broadcast' }, { status: 500 })
  }

  console.log(`[Newsletter Send] Edition ${edition} sent — broadcast ID: ${broadcastId}`)
  return NextResponse.json({ success: true, broadcastId, edition })
}
