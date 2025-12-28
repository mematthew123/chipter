/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from '@/lib/sanity.client'
import { allBlogPostsQuery } from '@/lib/sanity.queries'
import { urlFor } from '@/lib/sanity.client'
import Link from 'next/link'
import Image from 'next/image'

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
    image?: any
  }
  categories?: Array<{
    _id: string
    title: string
  }>
  body?: any[]
}

export default async function BlogPage() {
  const posts = await client.fetch<BlogPost[]>(allBlogPostsQuery)

  return (
    <main className="min-h-dvh bg-warm-white">
      {/* Hero Section */}
      <section className="border-b-[3px] border-almost-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1 className="text-headline text-7xl uppercase text-almost-black">
                The Chip<br />Chronicles
              </h1>
              <p className="mt-6 font-instrument-serif text-2xl italic text-almost-black">
                Deep dives into crisp culture, flavor physics, and the art of the crunch.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="border-[3px] border-almost-black bg-chip-yellow p-6 shadow-brutal">
                <p className="text-label text-sm uppercase">Latest Dispatches</p>
                <p className="mt-2 font-jetbrains text-4xl font-bold text-almost-black">
                  {posts.length}
                </p>
                <p className="mt-1 text-sm text-gray">
                  Stories from the field
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post._id}
              className="group border-[3px] border-almost-black bg-warm-white transition-all hover:shadow-brutal"
            >
              {/* Image */}
              {post.mainImage && (
                <div className="relative aspect-video border-b-[3px] border-almost-black bg-gray">
                  <Image
                    src={urlFor(post.mainImage).width(800).height(450).url()}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                {/* Categories */}
                {post.categories && post.categories.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {post.categories.map((category) => (
                      <span
                        key={category._id}
                        className="border-2 border-almost-black bg-chip-yellow px-2 py-1 text-xs font-bold uppercase text-almost-black"
                      >
                        {category.title}
                      </span>
                    ))}
                  </div>
                )}

                {/* Title */}
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="group-hover:text-hot-orange"
                >
                  <h2 className="text-headline text-2xl uppercase text-almost-black transition-colors">
                    {post.title}
                  </h2>
                </Link>

                {/* Meta */}
                <div className="mt-4 flex items-center justify-between border-t-2 border-almost-black pt-4">
                  {post.author && (
                    <div className="flex items-center gap-3">
                      {post.author.image && (
                        <div className="relative size-8 overflow-hidden border-2 border-almost-black">
                          <Image
                            src={urlFor(post.author.image).width(64).height(64).url()}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <span className="text-sm font-medium text-almost-black">
                        {post.author.name}
                      </span>
                    </div>
                  )}
                  <time className="text-label text-xs uppercase text-gray">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </time>
                </div>

                {/* Excerpt */}
                {post.body && post.body.length > 0 && (
                  <div className="mt-4">
                    <p className="line-clamp-3 text-sm leading-relaxed text-almost-black">
                      {post.body
                        .filter((block: any) => block._type === 'block' && block.style === 'normal')
                        .slice(0, 1)
                        .map((block: any) =>
                          block.children
                            ?.filter((child: any) => child._type === 'span')
                            .map((child: any) => child.text)
                            .join('')
                        )
                        .join(' ')}
                    </p>
                  </div>
                )}

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="mt-6 inline-block border-[3px] border-almost-black bg-warm-white px-4 py-2 font-jetbrains text-sm font-bold uppercase text-almost-black transition-all hover:bg-hot-orange hover:text-warm-white hover:shadow-brutal"
                >
                  Read Full Story →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="border-[3px] border-almost-black bg-chip-yellow p-12 text-center">
            <p className="text-headline text-3xl uppercase text-almost-black">
              No Stories Yet
            </p>
            <p className="mt-4 font-instrument-serif text-lg italic text-almost-black">
              The chronicles begin soon. Stay crunchy.
            </p>
          </div>
        )}
      </section>
    </main>
  )
}