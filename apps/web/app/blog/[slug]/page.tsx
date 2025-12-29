/* eslint-disable @typescript-eslint/no-explicit-any */
import { sanityFetch, baseClient, urlFor } from '@/lib/sanity.live'
import { singleBlogPostQuery } from '@/lib/sanity.queries'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import BlogPostClient from './BlogPostClient'
import VisualEditRefresh from '@/components/VisualEditRefresh'

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  mainImage?: any
  author?: {
    _id: string
    name: string
    slug: { current: string }
    bio?: string
    image?: any
  }
  categories?: Array<{
    _id: string
    title: string
    description?: string
  }>
  body?: any
}

interface PageProps {
  params: Promise<{ slug: string }>
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const { data: post } = await sanityFetch<BlogPost>({
    query: singleBlogPostQuery,
    params: { slug },
  })

  if (!post) {
    return {
      title: 'Post Not Found | Chipter',
      description: 'This blog post could not be found.',
    }
  }

  const description = post.body
    ?.filter((block: any) => block._type === 'block')
    .slice(0, 1)
    .map((block: any) =>
      block.children
        ?.filter((child: any) => child._type === 'span')
        .map((child: any) => child.text)
        .join('')
    )
    .join(' ')
    .slice(0, 160)

  return {
    title: `${post.title} | Chipter Blog`,
    description: description || `Read "${post.title}" on the Chipter blog`,
    openGraph: {
      title: post.title,
      description: description || `Read "${post.title}" on the Chipter blog`,
      images: post.mainImage ? [urlFor(post.mainImage).url()] : [],
    },
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  // Use baseClient directly to avoid draftMode() during build
  const posts = await baseClient.fetch<{ slug: { current: string } }[]>(
    `*[_type == "post"] { slug }`
  )

  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const { data: post } = await sanityFetch<BlogPost>({
    query: singleBlogPostQuery,
    params: { slug },
    revalidate: 3600, // Revalidate every hour for blog posts
  })

  if (!post) {
    notFound()
  }

  const { isEnabled: isDraftMode } = await draftMode()

  return (
    <>
      <BlogPostClient post={post} />
      <VisualEditRefresh isDraftMode={isDraftMode} />
    </>
  )
}