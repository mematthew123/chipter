'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import ReviewCard from './ReviewCard';

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
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

// Individual card animation
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: brutalSpring
  }
};

interface AnimatedRecentReviewsClientProps {
  reviews: any[]; // Type will match the transformed review format
}

export default function AnimatedRecentReviewsClient({ reviews }: AnimatedRecentReviewsClientProps) {
  return (
    <section className='w-full py-16 px-4 bg-chip-yellow/10'>
      <div className='max-w-7xl mx-auto'>
        <motion.h2
          className='font-mono font-extrabold text-3xl md:text-4xl uppercase text-almost-black mb-8 text-center'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={brutalSpring}
        >
          RECENT REVIEWS
        </motion.h2>

        {/* Grid of Reviews with stagger animation */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          {reviews.map((review) => (
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

        {/* View All Link */}
        <motion.div
          className='text-center'
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ ...brutalSpring, delay: 0.5 }}
        >
          <Link
            href='/reviews'
            className='inline-block font-mono font-bold uppercase tracking-wide px-6 py-3 bg-almost-black text-warm-white border-[3px] border-almost-black hover:bg-warm-white hover:text-almost-black transition-all duration-200'
          >
            VIEW ALL REVIEWS
          </Link>
        </motion.div>
      </div>
    </section>
  );
}