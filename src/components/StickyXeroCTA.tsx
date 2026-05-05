'use client'

import { useState, useEffect } from 'react'

const XERO_AFFILIATE_URL = 'https://referrals.xero.com/0h37y3qct6a6'
const DISMISSED_KEY = 'xero-sticky-cta-dismissed'

export function StickyXeroCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem(DISMISSED_KEY)
    if (!dismissed) {
      // Small delay so the page content renders first
      const t = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(t)
    }
  }, [])

  function dismiss() {
    localStorage.setItem(DISMISSED_KEY, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="complementary"
      aria-label="Try Xero free"
      className="sticky-xero-cta"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: '#1f4e79',
        color: '#ffffff',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        boxShadow: '0 -2px 12px rgba(0,0,0,0.15)',
      }}
    >
      <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>
        MTD-compliant accounting from £16/month — try Xero free for 30 days, no credit card needed.
      </span>
      <a
        href={XERO_AFFILIATE_URL}
        target="_blank"
        rel="noopener noreferrer sponsored"
        style={{
          backgroundColor: '#ffffff',
          color: '#1f4e79',
          padding: '8px 18px',
          borderRadius: '6px',
          fontSize: '0.875rem',
          fontWeight: 700,
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
      >
        Start free trial →
      </a>
      <button
        onClick={dismiss}
        aria-label="Dismiss"
        style={{
          background: 'none',
          border: 'none',
          color: 'rgba(255,255,255,0.7)',
          cursor: 'pointer',
          fontSize: '1.25rem',
          lineHeight: 1,
          padding: '0 4px',
          flexShrink: 0,
        }}
      >
        ×
      </button>
    </div>
  )
}
