/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import ReviewCard from '@/components/ReviewCard';
import { liveClient, urlFor } from '@/lib/sanity.live';
import { allReviewsQuery } from '@/lib/sanity.queries';
import { SanityChipReview, transformReviewForCard } from '@/lib/sanity.types';

// Brutalist animation config
const brutalSpring = {
  type: "spring" as const,
  damping: 25,
  stiffness: 300
};

// Container animation for staggering
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

// Individual card animation
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: brutalSpring
  }
};

interface ReviewsPageLiveProps {
  initialReviews: any[];
}

export default function ReviewsPageLive({ initialReviews }: ReviewsPageLiveProps) {
  const [reviews, setReviews] = useState(initialReviews);
  const [sortBy, setSortBy] = useState<'date' | 'score'>('date');
  const [filterBadge, setFilterBadge] = useState<string>('all');
  const [isLiveUpdating, setIsLiveUpdating] = useState(false);

  // Subscribe to live updates
  useEffect(() => {
    const subscription = liveClient
      .listen<SanityChipReview>('*[_type == "chipReview"]', {}, {
        includeResult: true,
        visibility: 'query',
      })
      .subscribe({
        next: () => {
          setIsLiveUpdating(true);

          // Refetch all reviews to maintain consistency
          liveClient
            .fetch<SanityChipReview[]>(allReviewsQuery)
            .then((freshReviews) => {
              const transformedReviews = freshReviews.map(review =>
                transformReviewForCard(review, (source: any) => urlFor(source).url())
              );
              setReviews(transformedReviews);
              setIsLiveUpdating(false);
            })
            .catch(console.error);
        },
        error: (err) => {
          console.error('Live update error:', err);
          setIsLiveUpdating(false);
        }
      });

    return () => subscription.unsubscribe();
  }, []);

  // Get unique badges from reviews
  const uniqueBadges = useMemo(() => {
    const badges = new Set(reviews.map(r => r.badge).filter(Boolean));
    return Array.from(badges);
  }, [reviews]);

  // Sort and filter reviews
  const processedReviews = useMemo(() => {
    let filtered = [...reviews];

    // Filter by badge
    if (filterBadge !== 'all') {
      filtered = filtered.filter(r => r.badge === filterBadge);
    }

    // Sort
    if (sortBy === 'score') {
      filtered.sort((a, b) => b.overallScore - a.overallScore);
    } else {
      filtered.sort((a, b) => new Date(b.reviewDate).getTime() - new Date(a.reviewDate).getTime());
    }

    return filtered;
  }, [reviews, sortBy, filterBadge]);

  return (
    <main className='w-full py-16 px-4'>
      <div className='max-w-7xl mx-auto'>
        {/* Live Mode Indicator */}
        <motion.div
          className='fixed top-20 right-4 z-50 flex items-center gap-2 px-4 py-2 bg-hot-orange text-warm-white font-mono font-bold text-xs uppercase border-[3px] border-almost-black'
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={brutalSpring}
        >
          <span className={`block size-2 rounded-full ${isLiveUpdating ? 'animate-pulse bg-warm-white' : 'bg-fresh-green'}`} />
          {isLiveUpdating ? 'Updating...' : 'Live Preview'}
        </motion.div>

        {/* Page Title */}
        <motion.div
          className='text-center mb-12'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={brutalSpring}
        >
          <h1 className='font-mono font-extrabold text-4xl md:text-6xl uppercase text-almost-black mb-4'>
            ALL REVIEWS
          </h1>
          <p className='font-serif italic text-lg text-gray'>
            Every chip, measured. Every crunch, documented.
          </p>
        </motion.div>

        {/* Filters and Sort */}
        <motion.div
          className='flex flex-col md:flex-row gap-4 mb-8 p-4 bg-chip-yellow/20 border-[3px] border-almost-black'
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...brutalSpring, delay: 0.1 }}
        >
          {/* Sort Controls */}
          <div className='flex-1'>
            <label className='font-mono font-bold text-xs uppercase tracking-wider text-almost-black mb-2 block'>
              Sort By
            </label>
            <div className='flex gap-2'>
              <button
                onClick={() => setSortBy('date')}
                className={`px-4 py-2 font-mono font-bold uppercase text-sm border-[3px] border-almost-black transition-all ${
                  sortBy === 'date'
                    ? 'bg-almost-black text-warm-white'
                    : 'bg-warm-white text-almost-black hover:bg-chip-yellow'
                }`}
              >
                Latest
              </button>
              <button
                onClick={() => setSortBy('score')}
                className={`px-4 py-2 font-mono font-bold uppercase text-sm border-[3px] border-almost-black transition-all ${
                  sortBy === 'score'
                    ? 'bg-almost-black text-warm-white'
                    : 'bg-warm-white text-almost-black hover:bg-chip-yellow'
                }`}
              >
                Top Rated
              </button>
            </div>
          </div>

          {/* Badge Filter */}
          <div className='flex-1'>
            <label className='font-mono font-bold text-xs uppercase tracking-wider text-almost-black mb-2 block'>
              Filter By Badge
            </label>
            <select
              value={filterBadge}
              onChange={(e) => setFilterBadge(e.target.value)}
              className='w-full px-4 py-2 font-mono font-bold uppercase text-sm bg-warm-white border-[3px] border-almost-black focus:outline-none focus:shadow-[3px_3px_0_var(--almost-black)]'
            >
              <option value='all'>All Badges</option>
              {uniqueBadges.map(badge => (
                <option key={badge} value={badge}>
                  {badge === 'offChipter' ? 'Off the Chipter' :
                   badge === 'epicenter' ? 'Epicenter Elite' :
                   badge === 'tectonic' ? 'Tectonic Crunch' :
                   badge === 'seismic' ? 'Seismic Snack' : badge}
                </option>
              ))}
            </select>
          </div>

          {/* Results Count */}
          <div className='flex items-end'>
            <p className='font-mono font-bold text-sm uppercase text-almost-black'>
              {processedReviews.length} {processedReviews.length === 1 ? 'Review' : 'Reviews'}
            </p>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        {processedReviews.length > 0 ? (
          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            {processedReviews.map((review) => (
              <motion.div
                key={review.id}
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <ReviewCard review={review} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className='text-center py-16'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={brutalSpring}
          >
            <p className='font-mono font-bold text-xl uppercase text-almost-black mb-4'>
              No reviews found
            </p>
            <p className='font-serif italic text-gray'>
              Try adjusting your filters
            </p>
          </motion.div>
        )}
      </div>
    </main>
  );
}