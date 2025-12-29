'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import PortableText from '@/components/PortableText';
import { urlFor } from '@/lib/sanity.live';
import { SanityChipReview } from '@/lib/sanity.types';
import { LikeButton } from '@/components/LikeButton';
import { LikeCounter } from '@/components/LikeCounter';

// Brutalist animation config
const brutalSpring = {
  type: "spring" as const,
  damping: 25,
  stiffness: 300
};

interface ReviewPageClientProps {
  review: SanityChipReview;
  badgeTier: 'seismic' | 'tectonic' | 'epicenter' | 'offChipter' | null;
}

export default function ReviewPageClient({ review }: ReviewPageClientProps) {
  // Calculate average score from breakdown
  const scoreBreakdown = review.scoreBreakdown;
  const scoreItems = [
    { label: 'Crunch', value: scoreBreakdown?.crunch || 0 },
    { label: 'Flavor Intensity', value: scoreBreakdown?.flavorIntensity || 0 },
    { label: 'Aftertaste', value: scoreBreakdown?.aftertaste || 0 },
    { label: 'Seasoning Distribution', value: scoreBreakdown?.seasoningDistribution || 0 },
    { label: 'Bag-to-Chip Ratio', value: scoreBreakdown?.bagToChipRatio || 0 },
  ];

  return (
    <>
      {/* Score Breakdown */}
      {scoreBreakdown && (
        <motion.section
          className='w-full py-12 px-4 bg-warm-white'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...brutalSpring, delay: 0.2 }}
        >
          <div className='max-w-7xl mx-auto'>
            <h2 className='font-mono font-bold text-2xl uppercase text-almost-black mb-8'>
              Score Breakdown
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
              {scoreItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  className='border-[3px] border-almost-black p-4 bg-warm-white'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...brutalSpring, delay: 0.1 * index }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '6px 6px 0 var(--almost-black)',
                    transition: { duration: 0.2 }
                  }}
                >
                  <p className='font-mono text-xs uppercase tracking-wider text-gray mb-2'>
                    {item.label}
                  </p>
                  <div className='font-mono font-extrabold text-3xl text-hot-orange'>
                    {item.value.toFixed(1)}
                  </div>
                  {/* Visual bar */}
                  <div className='mt-2 h-2 bg-gray/20 border border-almost-black'>
                    <motion.div
                      className='h-full bg-hot-orange'
                      initial={{ width: 0 }}
                      animate={{ width: `${(item.value / 10) * 100}%` }}
                      transition={{ ...brutalSpring, delay: 0.3 + (0.1 * index) }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Main Review Content */}
      <section className='w-full py-12 px-4'>
        <div className='max-w-4xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {/* Main Content */}
            <motion.div
              className='lg:col-span-2'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={brutalSpring}
            >
              {/* Review Summary */}
              <div className='mb-8'>
                <h2 className='font-mono font-bold text-2xl uppercase text-almost-black mb-4'>
                  Review Summary
                </h2>
                {review.reviewSummary && (
                  <div className='font-sans text-lg/8 text-almost-black'>
                    {typeof review.reviewSummary === 'string' ? (
                      <p>{review.reviewSummary}</p>
                    ) : Array.isArray(review.reviewSummary) ? (
                      <PortableText value={review.reviewSummary} />
                    ) : (
                      <p>{String(review.reviewSummary)}</p>
                    )}
                  </div>
                )}
              </div>

              {/* Full Review Content */}
              {review.reviewContent && (
                <div className='mb-8'>
                  <h2 className='font-mono font-bold text-2xl uppercase text-almost-black mb-4'>
                    Full Review
                  </h2>
                  <PortableText value={review.reviewContent} />
                </div>
              )}

              {/* Pros and Cons */}
              {(review.pros || review.cons) && (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                  {/* Pros */}
                  {review.pros && review.pros.length > 0 && (
                    <motion.div
                      className='p-4 bg-fresh-green/10 border-[3px] border-almost-black'
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ ...brutalSpring, delay: 0.3 }}
                    >
                      <h3 className='font-mono font-bold text-lg uppercase text-almost-black mb-3'>
                        Pros
                      </h3>
                      <ul className='space-y-2'>
                        {review.pros.map((pro, index) => (
                          <li key={index} className='flex items-start'>
                            <span className='font-mono text-fresh-green mr-2'>+</span>
                            <span className='font-sans text-sm text-almost-black'>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Cons */}
                  {review.cons && review.cons.length > 0 && (
                    <motion.div
                      className='p-4 bg-hot-orange/10 border-[3px] border-almost-black'
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ ...brutalSpring, delay: 0.4 }}
                    >
                      <h3 className='font-mono font-bold text-lg uppercase text-almost-black mb-3'>
                        Cons
                      </h3>
                      <ul className='space-y-2'>
                        {review.cons.map((con, index) => (
                          <li key={index} className='flex items-start'>
                            <span className='font-mono text-hot-orange mr-2'>-</span>
                            <span className='font-sans text-sm text-almost-black'>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className='lg:col-span-1'
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...brutalSpring, delay: 0.2 }}
            >
              {/* Product Details */}
              <div className='p-4 bg-chip-yellow/20 border-[3px] border-almost-black mb-6'>
                <h3 className='font-mono font-bold text-lg uppercase text-almost-black mb-4'>
                  Product Details
                </h3>

                {review.bagSize && (
                  <div className='mb-3'>
                    <p className='font-mono text-xs uppercase text-gray'>Bag Size</p>
                    <p className='font-sans text-sm text-almost-black'>{review.bagSize}</p>
                  </div>
                )}

                {review.pricePoint && (
                  <div className='mb-3'>
                    <p className='font-mono text-xs uppercase text-gray'>Price Point</p>
                    <p className='font-sans text-sm text-almost-black capitalize'>
                      {review.pricePoint}
                    </p>
                  </div>
                )}

                {review.purchaseLocation && (
                  <div className='mb-3'>
                    <p className='font-mono text-xs uppercase text-gray'>Where to Buy</p>
                    <p className='font-sans text-sm text-almost-black'>
                      {review.purchaseLocation}
                    </p>
                  </div>
                )}

                {review.chipProduct.isLimitedEdition && (
                  <div className='mt-3 pt-3 border-t-2 border-almost-black'>
                    <span className='font-mono font-bold text-xs uppercase text-hot-orange'>
                      Limited Edition
                    </span>
                  </div>
                )}

                {review.chipProduct.isDiscontinued && (
                  <div className='mt-3 pt-3 border-t-2 border-almost-black'>
                    <span className='font-mono font-bold text-xs uppercase text-gray'>
                      Discontinued
                    </span>
                  </div>
                )}
              </div>

              {/* Best For */}
              {review.bestFor && (
                <div className='p-4 bg-warm-white border-[3px] border-almost-black mb-6'>
                  <h3 className='font-mono font-bold text-lg uppercase text-almost-black mb-2'>
                    Best For
                  </h3>
                  <p className='font-serif italic text-base text-almost-black'>
                    {review.bestFor}
                  </p>
                </div>
              )}

              {/* Pairs Well With */}
              {review.pairsWellWith && review.pairsWellWith.length > 0 && (
                <div className='p-4 bg-warm-white border-[3px] border-almost-black mb-6'>
                  <h3 className='font-mono font-bold text-lg uppercase text-almost-black mb-3'>
                    Pairs Well With
                  </h3>
                  <ul className='space-y-1'>
                    {review.pairsWellWith.map((pairing, index) => (
                      <li key={index} className='font-sans text-sm text-almost-black'>
                        • {pairing}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Categories */}
              {review.categories && review.categories.length > 0 && (
                <div className='p-4 bg-warm-white border-[3px] border-almost-black'>
                  <h3 className='font-mono font-bold text-lg uppercase text-almost-black mb-3'>
                    Categories
                  </h3>
                  <div className='flex flex-wrap gap-2'>
                    {review.categories.map((category) => (
                      <Link
                        key={category._id}
                        href={`/categories/${category.slug.current}`}
                        className='inline-block font-mono text-xs uppercase px-3 py-1 bg-chip-yellow text-almost-black border-[2px] border-almost-black hover:bg-hot-orange hover:text-warm-white transition-colors'
                      >
                        {category.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Review Images Gallery */}
          {review.reviewImages && review.reviewImages.length > 0 && (
            <motion.section
              className='mt-12'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...brutalSpring, delay: 0.5 }}
            >
              <h2 className='font-mono font-bold text-2xl uppercase text-almost-black mb-6'>
                Gallery
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {review.reviewImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className='relative aspect-square border-[3px] border-almost-black bg-warm-white overflow-hidden'
                    whileHover={{
                      scale: 1.02,
                      boxShadow: '6px 6px 0 var(--almost-black)',
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Image
                      src={urlFor(image.asset).url()}
                      alt={image.alt || `Review image ${index + 1}`}
                      fill
                      className='object-cover'
                    />
                    {image.caption && (
                      <div className='absolute bottom-0 left-0 right-0 bg-almost-black/90 text-warm-white p-2'>
                        <p className='font-mono text-xs uppercase'>{image.caption}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Like Section */}
          {review.likesEnabled && (
            <motion.div
              className='mt-12 pt-8 border-t-[3px] border-almost-black'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...brutalSpring, delay: 0.6 }}
            >
              <div className='flex items-center justify-center gap-6'>
                <LikeButton
                  documentId={review._id}
                  documentType="chipReview"
                  initialCount={review.likeCount || 0}
                />
                {(review.likeCount || 0) > 0 && (
                  <LikeCounter count={review.likeCount || 0} />
                )}
              </div>
            </motion.div>
          )}

          {/* Back to Reviews */}
          <motion.div
            className='mt-12 text-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...brutalSpring, delay: 0.7 }}
          >
            <Link
              href='/reviews'
              className='inline-block font-mono font-bold uppercase tracking-wide px-6 py-3 bg-almost-black text-warm-white border-[3px] border-almost-black hover:bg-warm-white hover:text-almost-black transition-all duration-200'
            >
              ← Back to All Reviews
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}