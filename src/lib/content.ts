import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { BlogPostFrontmatter, BlogPostMeta } from '@/types'

const contentDir = path.join(process.cwd(), 'src/content')

/**
 * Read a single MDX file by type and slug.
 * Returns frontmatter data and raw MDX content string.
 */
export function getPostBySlug(
  type: string,
  slug: string
): { frontmatter: BlogPostFrontmatter; content: string; slug: string } {
  const filePath = path.join(contentDir, type, `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { frontmatter: data as BlogPostFrontmatter, content, slug }
}

/**
 * Read all MDX files of a given type (e.g. 'blog').
 * Returns sorted frontmatter + slug for each post, newest first.
 */
export function getAllPosts(type: string): BlogPostMeta[] {
  const dir = path.join(contentDir, type)

  if (!fs.existsSync(dir)) return []

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'))

  const posts = files.map((file) => {
    const slug = file.replace('.mdx', '')
    const filePath = path.join(dir, file)
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(raw)
    const frontmatter = data as BlogPostFrontmatter
    return {
      slug,
      title: frontmatter.title,
      description: frontmatter.description,
      publishedAt: frontmatter.publishedAt,
      updatedAt: frontmatter.updatedAt,
      author: frontmatter.author,
      category: frontmatter.category,
      tags: frontmatter.tags,
      readingTime: frontmatter.readingTime,
    } satisfies BlogPostMeta
  })

  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

/**
 * Return all slugs for a given content type.
 * Used by generateStaticParams() in dynamic routes.
 */
export function getAllSlugs(type: string): string[] {
  const dir = path.join(contentDir, type)
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter((f) => f.endsWith('.mdx')).map((f) => f.replace('.mdx', ''))
}
