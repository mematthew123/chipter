/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from '@/lib/sanity.client'
import { singleBlogPostQuery } from '@/lib/sanity.queries'
import { urlFor } from '@/lib/sanity.client'
import PortableText from '@/components/PortableText'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

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

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await client.fetch<{ slug: { current: string } }[]>(
    `*[_type == "post"] { slug }`
  )

  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await client.fetch<BlogPost>(singleBlogPostQuery, { slug })

  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-dvh bg-warm-white">
      {/* Hero Section with Image */}
      {post.mainImage && (
        <section className="relative h-[60vh] border-b-[3px] border-almost-black">
          <Image
            src={urlFor(post.mainImage).width(1920).height(1080).url()}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-almost-black/30" />
          <div className="absolute inset-0 flex items-end">
            <div className="w-full border-t-[3px] border-almost-black bg-warm-white p-8">
              <div className="mx-auto max-w-4xl">
                {/* Categories */}
                {post.categories && post.categories.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {post.categories.map((category) => (
                      <span
                        key={category._id}
                        className="border-2 border-almost-black bg-chip-yellow px-3 py-1 text-xs font-bold uppercase text-almost-black"
                      >
                        {category.title}
                      </span>
                    ))}
                  </div>
                )}

                {/* Title */}
                <h1 className="text-headline text-5xl uppercase text-almost-black md:text-6xl">
                  {post.title}
                </h1>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* If no image, show title in a different layout */}
      {!post.mainImage && (
        <section className="border-b-[3px] border-almost-black bg-chip-yellow py-20">
          <div className="mx-auto max-w-4xl px-6">
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="mb-6 flex flex-wrap gap-2">
                {post.categories.map((category) => (
                  <span
                    key={category._id}
                    className="border-2 border-almost-black bg-warm-white px-3 py-1 text-xs font-bold uppercase text-almost-black"
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-headline text-5xl uppercase text-almost-black md:text-7xl">
              {post.title}
            </h1>
          </div>
        </section>
      )}

      {/* Article Meta */}
      <section className="border-b-[3px] border-almost-black">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Author */}
            {post.author && (
              <div className="flex items-center gap-4">
                {post.author.image && (
                  <div className="relative size-16 overflow-hidden border-[3px] border-almost-black">
                    <Image
                      src={urlFor(post.author.image).width(128).height(128).url()}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="text-label text-xs uppercase text-gray">Written by</p>
                  <p className="font-jetbrains text-lg font-bold text-almost-black">
                    {post.author.name}
                  </p>
                  {post.author.bio && (
                    <div className="mt-1 max-w-sm text-sm text-gray">
                      <PortableText value={post.author.bio} />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Date */}
            <div className="border-[3px] border-almost-black bg-hot-orange px-4 py-2">
              <time className="font-jetbrains text-sm font-bold uppercase text-warm-white">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </time>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          {/* Large first letter style for first paragraph */}
          <div className="prose prose-brutal max-w-none">
            {post.body && <PortableText value={post.body} />}
          </div>
        </div>
      </section>

      {/* Category Info Cards */}
      {post.categories && post.categories.length > 0 && (
        <section className="border-t-[3px] border-almost-black bg-chip-yellow py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-headline text-2xl uppercase text-almost-black">
              Filed Under
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {post.categories.map((category) => (
                <div
                  key={category._id}
                  className="border-[3px] border-almost-black bg-warm-white p-4 shadow-brutal"
                >
                  <h3 className="font-jetbrains text-lg font-bold uppercase text-almost-black">
                    {category.title}
                  </h3>
                  {category.description && (
                    <p className="mt-2 text-sm text-gray">
                      {category.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog Link */}
      <section className="border-t-[3px] border-almost-black bg-warm-white py-12">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            href="/blog"
            className="inline-block border-[3px] border-almost-black bg-warm-white px-6 py-3 font-jetbrains text-sm font-bold uppercase text-almost-black transition-all hover:bg-hot-orange hover:text-warm-white hover:shadow-brutal"
          >
            ← Back to All Chronicles
          </Link>
        </div>
      </section>

      {/* Related Posts Section */}
      <section className="border-t-[3px] border-almost-black bg-almost-black py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-headline text-3xl uppercase text-warm-white">
            More Chronicles
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* We'll fetch related posts here in a future update */}
            <div className="border-[3px] border-warm-white bg-almost-black p-6">
              <p className="font-instrument-serif text-lg italic text-chip-yellow">
                More stories coming soon...
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}