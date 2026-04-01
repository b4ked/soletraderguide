import { NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

export interface PublishedMeta {
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
  url: string
}

export async function GET() {
  try {
    const blogDir = path.join(process.cwd(), 'src', 'content', 'blog')

    if (!fs.existsSync(blogDir)) {
      return NextResponse.json({ posts: [] })
    }

    const files = fs
      .readdirSync(blogDir)
      .filter((f) => f.endsWith('.mdx'))
      .sort()

    const posts: PublishedMeta[] = files
      .map((filename) => {
        const slug = filename.replace(/\.mdx$/, '')
        const filePath = path.join(blogDir, filename)
        const raw = fs.readFileSync(filePath, 'utf-8')
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
          url: `/blog/${slug}`,
        }
      })
      .sort((a, b) => {
        if (!a.publishedAt) return 1
        if (!b.publishedAt) return -1
        return (
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        )
      })

    return NextResponse.json({ posts })
  } catch (error) {
    console.error('Error reading published posts:', error)
    return NextResponse.json(
      { error: 'Failed to read published posts' },
      { status: 500 }
    )
  }
}
