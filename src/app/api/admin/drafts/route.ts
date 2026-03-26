import { NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

export interface DraftMeta {
  slug: string
  title: string
  description: string
  publishedAt: string
  updatedAt: string
  category: string
  tags: string[]
  readingTime: string
  affiliateDisclosure: boolean
  wordCount: number
  fileSizeBytes: number
  lastModified: string // ISO string from fs.stat
}

export async function GET() {
  try {
    const draftsDir = path.join(process.cwd(), 'drafts')

    if (!fs.existsSync(draftsDir)) {
      return NextResponse.json({ drafts: [] })
    }

    const files = fs
      .readdirSync(draftsDir)
      .filter((f) => f.endsWith('.mdx'))
      .sort()

    const drafts: DraftMeta[] = files.map((filename) => {
      const slug = filename.replace(/\.mdx$/, '')
      const filePath = path.join(draftsDir, filename)
      const raw = fs.readFileSync(filePath, 'utf-8')
      const stat = fs.statSync(filePath)
      const { data, content } = matter(raw)

      const wordCount = content
        .replace(/<[^>]+>/g, ' ')
        .split(/\s+/)
        .filter(Boolean).length

      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? '',
        publishedAt: data.publishedAt ?? '',
        updatedAt: data.updatedAt ?? '',
        category: data.category ?? '',
        tags: data.tags ?? [],
        readingTime: data.readingTime ?? '',
        affiliateDisclosure: data.affiliateDisclosure ?? false,
        wordCount,
        fileSizeBytes: stat.size,
        lastModified: stat.mtime.toISOString(),
      }
    })

    return NextResponse.json({ drafts })
  } catch (error) {
    console.error('Error reading drafts:', error)
    return NextResponse.json(
      { error: 'Failed to read drafts' },
      { status: 500 }
    )
  }
}
