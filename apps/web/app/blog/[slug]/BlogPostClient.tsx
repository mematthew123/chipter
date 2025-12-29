/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { motion, Variants } from 'motion/react'
import { urlFor } from '@/lib/sanity.live'
import PortableText from '@/components/PortableText'
import Image from 'next/image'
import Link from 'next/link'

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

interface BlogPostClientProps {
  post: BlogPost
}

// Animation variants with proper types
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100
    }
  }
}

const heroVariants: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const
    }
  }
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  return (
    <article className="w-full">
      {/* Full Hero Image - No overlay */}
      {post.mainImage && (
        <motion.section
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          className="relative h-[60vh] md:h-[70vh] border-b-[3px] border-almost-black overflow-hidden"
        >
          <Image
            src={urlFor(post.mainImage).width(1920).height(1080).url()}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </motion.section>
      )}

      {/* Title and Date Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="border-b-[3px] border-almost-black bg-chip-yellow"
      >
        <div className="mx-auto max-w-5xl px-8 py-12 md:py-16">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 60 }}
            className="text-headline text-4xl md:text-6xl lg:text-7xl text-almost-black mb-6"
          >
            {post.title}
          </motion.h1>

          {/* Date Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="inline-block"
          >
            <div className="card-brutal bg-hot-orange px-6 py-3 shadow-brutal">
              <p className="text-label text-xs text-warm-white/80 mb-1">PUBLISHED</p>
              <time className="text-headline text-sm text-warm-white">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </time>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* If no image, show title in different style */}
      {!post.mainImage && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="border-b-[3px] border-almost-black bg-linear-to-br from-chip-yellow to-hot-orange/20 py-24"
        >
          <div className="mx-auto max-w-5xl px-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 50 }}
              className="text-headline text-5xl md:text-7xl lg:text-8xl text-almost-black mb-8"
            >
              {post.title}
            </motion.h1>

            {/* Date */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-block"
            >
              <div className="card-brutal bg-warm-white px-6 py-3 shadow-brutal">
                <p className="text-label text-xs text-gray mb-1">PUBLISHED</p>
                <time className="text-headline text-sm text-almost-black">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </time>
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Article Content */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="py-16 md:py-24 bg-warm-white"
      >
        <div className="mx-auto max-w-4xl px-8">
          {/* Content with proper typography */}
          <div className="prose-brutal">
            {post.body && <PortableText value={post.body} />}
          </div>
        </div>
      </motion.section>

      {/* Navigation Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t-[3px] border-almost-black bg-warm-white py-12"
      >
        <div className="mx-auto max-w-5xl px-8">
          <Link href="/blog">
            <motion.div
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <button className="button-brutal bg-warm-white text-almost-black hover:bg-hot-orange hover:text-warm-white">
                <span className="text-headline">← BACK TO CHRONICLES</span>
              </button>
            </motion.div>
          </Link>
        </div>
      </motion.section>

      {/* Author Section - Moved to bottom */}
      {post.author && (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t-[3px] border-almost-black bg-chip-yellow py-16"
        >
          <div className="mx-auto max-w-5xl px-8">
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-headline text-2xl text-almost-black mb-8"
            >
              ABOUT THE AUTHOR
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-start gap-8"
            >
              {/* Author Image */}
              {post.author.image && (
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="relative size-32 md:size-40 overflow-hidden border-[3px] border-almost-black shadow-brutal"
                >
                  <Image
                    src={urlFor(post.author.image).width(320).height(320).url()}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              )}

              {/* Author Info */}
              <div className="flex-1">
                <h3 className="text-headline text-2xl text-almost-black mb-4">
                  {post.author.name}
                </h3>
                {post.author.bio && (
                  <div className="font-inter text-base text-almost-black">
                    <PortableText value={post.author.bio} />
                  </div>
                )}

                {/* Author's Articles Link */}
                <motion.div
                  whileHover={{ x: 2 }}
                  className="inline-block mt-6"
                >
                  <Link
                    href={`/blog/author/${post.author.slug.current}`}
                    className="button-brutal bg-almost-black text-warm-white hover:bg-warm-white hover:text-almost-black text-sm"
                  >
                    VIEW ALL ARTICLES BY {post.author.name.toUpperCase()}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}
    </article>
  )
}