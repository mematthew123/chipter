'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

// Brutalist animation config
const brutalSpring = {
  type: "spring" as const,
  damping: 25,
  stiffness: 300
};

// Stagger container for headline
const headlineContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

// Individual word animation
const wordAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: -90
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: brutalSpring
  }
};

// Counter animation for stats
const CountUp = ({ end, duration = 2 }: { end: number | string; duration?: number }) => {
  const isNumber = typeof end === 'number';

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ...brutalSpring, delay: 1 }}
      className="font-mono font-extrabold text-4xl text-hot-orange"
    >
      {isNumber ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration }}
        >
          {end}+
        </motion.span>
      ) : (
        end
      )}
    </motion.span>
  );
};

export default function AnimatedHero() {
  const headline = ["THE", "SEISMIC", "SCALE"];
  const subheadline = ["FOR", "SNACKS"];

  return (
    <section className="relative min-h-[calc(100vh-64px)] flex flex-col justify-center items-center px-4 py-16 bg-warm-white">
      {/* Background Pattern - fade in */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, var(--almost-black) 0px, var(--almost-black) 3px, transparent 3px, transparent 60px),
                           repeating-linear-gradient(90deg, var(--almost-black) 0px, var(--almost-black) 3px, transparent 3px, transparent 60px)`,
          }}
        ></div>
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Main Headline with stagger */}
        <motion.h1
          className="font-mono font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-almost-black mb-6"
          variants={headlineContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-wrap justify-center gap-x-4">
            {headline.map((word, index) => (
              <motion.span
                key={index}
                variants={wordAnimation}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-4">
            {subheadline.map((word, index) => (
              <motion.span
                key={index}
                variants={wordAnimation}
                className="inline-block text-hot-orange"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.h1>

        {/* Tagline - typewriter effect */}
        <motion.p
          className="font-serif italic text-xl md:text-2xl text-almost-black mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...brutalSpring, delay: 1.2 }}
        >
          Rating chips so you don&apos;t have to guess.
        </motion.p>

        {/* One-liner */}
        <motion.p
          className="font-serif italic text-lg text-gray mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          Professional chip criticism. Seriously.
        </motion.p>

        {/* CTA Button with spring */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ ...brutalSpring, delay: 1.8 }}
        >
          <Link
            href="/reviews"
            className="inline-block font-mono font-bold uppercase tracking-wide px-8 py-4 bg-hot-orange text-warm-white border-[3px] border-almost-black text-lg hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0_var(--almost-black)] transition-all duration-200"
          >
            BROWSE REVIEWS
          </Link>
        </motion.div>

        {/* Stats with counter animation */}
        <motion.div
          className="mt-16 flex justify-center gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...brutalSpring, delay: 2 }}
        >
          <div className="text-center">
            <CountUp end={9} />
            <div className="font-mono font-bold text-xs uppercase tracking-wider text-almost-black">
              Reviews
            </div>
          </div>
          <motion.div
            className="w-[3px] h-16 bg-almost-black"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ ...brutalSpring, delay: 2.2 }}
          />
          <div className="text-center">
            <CountUp end="3" duration={1.5} />
            <div className="font-mono font-bold text-xs uppercase tracking-wider text-almost-black">
              Badge Tiers
            </div>
          </div>
          <motion.div
            className="w-[3px] h-16 bg-almost-black"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ ...brutalSpring, delay: 2.4 }}
          />
          <div className="text-center">
            <CountUp end="10.0" duration={2.5} />
            <div className="font-mono font-bold text-xs uppercase tracking-wider text-almost-black">
              Max Score
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}