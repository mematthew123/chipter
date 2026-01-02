'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useTransform, animate, MotionValue } from 'motion/react';
import { useEffect, useState } from 'react';
import Badge from './Badge';

// Brutalist animation config
const brutalSpring = {
  type: "spring" as const,
  damping: 25,
  stiffness: 300
};

// Component to display a MotionValue
const MotionSpan = ({ value }: { value: MotionValue<string> }) => {
  const [display, setDisplay] = useState('0.0');

  useEffect(() => {
    const unsubscribe = value.on("change", (latest) => {
      setDisplay(latest);
    });

    return unsubscribe;
  }, [value]);

  return <span>{display}</span>;
};

// Score counter component
const AnimatedScore = ({ score }: { score: number }) => {
  const count = useMotionValue(0);
  const displayValue = useTransform(count, (value) => {
    const whole = Math.floor(value / 10);
    const decimal = Math.floor(value % 10);
    return `${whole}.${decimal}`;
  });

  useEffect(() => {
    const animation = animate(count, score * 10, {
      type: "spring",
      damping: 30,
      stiffness: 200,
      duration: 2
    });

    return animation.stop;
  }, [score, count]);

  return (
    <motion.div
      className='mt-8 lg:mt-0'
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ ...brutalSpring, delay: 0.8 }}
    >
      <motion.div className='font-mono font-extrabold text-[120px] lg:text-[160px] leading-none text-hot-orange'>
        <MotionSpan value={displayValue} />
      </motion.div>
      <motion.div
        className='font-mono font-bold text-xs uppercase tracking-wider text-gray'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        CHIPTER SCORE
      </motion.div>

      {/* Screen shake for high scores */}
      {score >= 9.0 && (
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: [-2, 2, -2, 2, 0] }}
          transition={{ duration: 0.3, delay: 2 }}
          className="fixed inset-0 pointer-events-none"
        />
      )}
    </motion.div>
  );
};

interface AnimatedFeaturedReviewClientProps {
  id: string;
  chipName: string;
  brandName: string;
  chipterScore: number;
  badge: 'seismic-snack' | 'tectonic-crunch' | 'epicenter-elite' | 'off-the-chipter' | null;
  verdict: string;
  imageUrl: string;
  slug: string;
}

export default function AnimatedFeaturedReviewClient({
  chipName,
  brandName,
  chipterScore,
  badge,
  verdict,
  imageUrl,
  slug
}: AnimatedFeaturedReviewClientProps) {
  return (
    <section className='py-16 px-4 bg-warm-white overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <motion.h2
          className='font-mono font-extrabold text-3xl md:text-4xl uppercase text-almost-black mb-8 text-center'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={brutalSpring}
        >
          FEATURED REVIEW
        </motion.h2>

        <Link
          href={`/reviews/${slug}`}
          className='group block bg-warm-white border-[3px] border-almost-black hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_var(--almost-black)] transition-all duration-200'
        >
          <div className='flex flex-col lg:flex-row'>
            {/* Image slides in from left */}
            <motion.div
              className='relative aspect-[16/9] lg:aspect-auto lg:w-[60%] border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-almost-black bg-gray/10'
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={brutalSpring}
            >
              <Image
                src={imageUrl}
                alt={`${brandName} ${chipName}`}
                fill
                className='object-cover'
                sizes='(max-width: 1024px) 100vw, 60vw'
                priority
              />
            </motion.div>

            {/* Content slides in from right */}
            <motion.div
              className='flex-1 p-6 lg:p-8 flex flex-col justify-between'
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ...brutalSpring, delay: 0.2 }}
            >
              <div>
                {/* Badge with delayed reveal */}
                {badge && (
                  <motion.div
                    className='mb-4'
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ ...brutalSpring, delay: 1.8 }}
                  >
                    <Badge
                      tier={badge === 'seismic-snack' ? 'seismic' :
                            badge === 'tectonic-crunch' ? 'tectonic' :
                            badge === 'epicenter-elite' ? 'epicenter' :
                            badge === 'off-the-chipter' ? 'offChipter' : 'seismic'}
                      size='lg'
                    />
                  </motion.div>
                )}

                {/* Chip Info */}
                <motion.h3
                  className='font-mono font-bold text-2xl lg:text-3xl uppercase text-almost-black'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {brandName}
                </motion.h3>
                <motion.p
                  className='font-mono font-bold text-xl lg:text-2xl uppercase text-hot-orange mb-4'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {chipName}
                </motion.p>

                {/* Review Excerpt */}
                <motion.p
                  className='font-sans text-lg text-almost-black mb-6 line-clamp-3'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {verdict}
                </motion.p>

                {/* Read More */}
                <motion.span
                  className='inline-block font-mono font-bold uppercase tracking-wide text-almost-black group-hover:text-hot-orange transition-colors duration-200'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  READ FULL REVIEW →
                </motion.span>
              </div>

              {/* Animated Score */}
              <AnimatedScore score={chipterScore} />
            </motion.div>
          </div>
        </Link>
      </div>
    </section>
  );
}