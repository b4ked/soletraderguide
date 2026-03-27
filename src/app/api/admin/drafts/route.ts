import { NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

export interface DraftMeta {
  slug: string
  filename: string
  title: string
  description: string
  focusKeyword: string
  category: string
  tags: string[]
  wordCount: number
  lastModified: string // ISO string from fs.stat
}

/** Parse the custom **Field:** value format used in draft files */
function parseBoldField(raw: string, field: string): string {
  const match = raw.match(new RegExp(`\\*\\*${field}:\\*\\*\\s*(.+)`, 'i'))
  return match?.[1]?.trim() ?? ''
}

/** Extract title from either YAML frontmatter or **Title:** format */
function extractMeta(raw: string, filename: string) {
  // Try YAML frontmatter first (for any .mdx files)
  try {
    const { data, content } = matter(raw)
    if (data.title) {
      return {
        title: String(data.title),
        description: String(data.description ?? ''),
        focusKeyword: '',
        category: String(data.category ?? ''),
        tags: Array.isArray(data.tags) ? data.tags : [],
        wordCount: content.split(/\s+/).filter(Boolean).length,
      }
    }
  } catch {
    // fall through to custom parser
  }

  // Parse **Title:** custom format
  const title = parseBoldField(raw, 'Title') ||
    parseBoldField(raw, 'title') ||
    filename.replace(/^\d+[a-z]?-/, '').replace(/[-_]/g, ' ').replace(/\.(md|mdx)$/, '')

  const description = parseBoldField(raw, 'Meta description') ||
    parseBoldField(raw, 'meta description') ||
    parseBoldField(raw, 'Description') || ''

  const focusKeyword = parseBoldField(raw, 'Focus keyword') ||
    parseBoldField(raw, 'focus keyword') || ''

  // Count words (rough, excluding markdown syntax lines)
  const wordCount = raw
    .split('\n')
    .filter((l) => !l.startsWith('**') && l.trim().length > 0)
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length

  return { title, description, focusKeyword, category: '', tags: [], wordCount }
}

export async function GET() {
  try {
    const draftsDir = path.join(process.cwd(), 'drafts')

    if (!fs.existsSync(draftsDir)) {
      return NextResponse.json({ drafts: [] })
    }

    const files = fs
      .readdirSync(draftsDir)
      .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))

    const drafts: DraftMeta[] = files.map((filename) => {
      const slug = filename.replace(/\.(mdx?$)/, '').replace(/^\d+[a-z]?-/, '')
      const filePath = path.join(draftsDir, filename)
      const raw = fs.readFileSync(filePath, 'utf-8')
      const stat = fs.statSync(filePath)
      const meta = extractMeta(raw, filename)

      return {
        slug,
        filename,
        ...meta,
        lastModified: stat.mtime.toISOString(),
      }
    })

    // Sort alphabetically by filename (preserves numbered content pipeline order)
    drafts.sort((a, b) => a.filename.localeCompare(b.filename))

    return NextResponse.json({ drafts })
  } catch (error) {
    console.error('Error reading drafts:', error)
    return NextResponse.json(
      { error: 'Failed to read drafts', details: String(error) },
      { status: 500 }
    )
  }
}
