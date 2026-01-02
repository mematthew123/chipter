'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

// Brutalist animation config
const brutalSpring = {
  type: "spring" as const,
  damping: 25,
  stiffness: 300
};

// Smoother spring for criteria cards - less stiff, more damped
const smoothCardSpring = {
  type: "spring" as const,
  damping: 30,
  stiffness: 120,
  mass: 0.8
};

// Easing curve for smoother entrances - using built-in easing
const smoothEasing = "easeOut"; // Smooth deceleration

export default function AnimatedChipterScale() {
  const [hoveredCriteria, setHoveredCriteria] = useState<string | null>(null);
  const chartRef = useRef(null);
  const chartInView = useInView(chartRef, { once: true });

  const criteria = [
    {
      name: 'CRUNCH',
      description: 'The structural integrity and auditory satisfaction of the bite.',
      abbr: 'CRN',
      number: '01',
    },
    {
      name: 'FLAVOR',
      description: 'Taste profile intensity and authenticity to promised experience.',
      abbr: 'FLV',
      number: '02',
    },
    {
      name: 'AFTERTASTE',
      description: 'The lingering impression. Does it haunt or delight?',
      abbr: 'AFT',
      number: '03',
    },
    {
      name: 'SEASONING',
      description: 'Distribution consistency. No naked chips allowed.',
      abbr: 'SSN',
      number: '04',
    },
    {
      name: 'BAG RATIO',
      description: 'Chip-to-air ratio. We measure disappointment by volume.',
      abbr: 'BAG',
      number: '05',
    },
  ];

  const scalePoints = [
    { value: 1, label: 'TRAGIC', color: 'bg-gray' },
    { value: 2, label: 'WEAK', color: 'bg-gray' },
    { value: 3, label: 'FORGETTABLE', color: 'bg-gray' },
    { value: 4, label: 'MEDIOCRE', color: 'bg-gray' },
    { value: 5, label: 'ACCEPTABLE', color: 'bg-gray' },
    { value: 6, label: 'DECENT', color: 'bg-gray' },
    { value: 7, label: 'SEISMIC', color: 'bg-chip-yellow' },
    { value: 8, label: 'TECTONIC', color: 'bg-hot-orange' },
    { value: 9, label: 'EPICENTER', color: 'bg-almost-black' },
    {
      value: 10,
      label: 'OFF CHIPTER',
      color: 'bg-linear-to-r from-hot-orange to-chip-yellow',
    },
  ];

  return (
    <section className='py-16 px-4 bg-gray/5'>
      <div className='max-w-7xl mx-auto'>
        <motion.h2
          className='font-mono font-extrabold text-3xl md:text-4xl uppercase text-almost-black mb-8 text-center'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={brutalSpring}
          viewport={{ once: true }}
        >
          THE CHIPTER SCALE
        </motion.h2>

        {/* Scale Visualization */}
        <div className='mb-12' ref={chartRef}>
          <div className='relative flex justify-between items-end h-64 border-b-[3px] border-l-[3px] border-almost-black p-4'>
            {/* Average Line - draws from left to right */}
            {chartInView && (
              <motion.div
                className='absolute left-0 right-0 border-t-[3px] border-hot-orange border-dashed opacity-60'
                style={{ bottom: '58%', transformOrigin: 'left' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
              >
                <motion.span
                  className='absolute -top-6 left-2 font-mono font-bold text-xs uppercase text-hot-orange'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  AVG 5.8
                </motion.span>
              </motion.div>
            )}

            {/* Badge Threshold Line at 7.0 - draws from left to right */}
            {chartInView && (
              <motion.div
                className='absolute left-0 right-0 border-t-[3px] border-chip-yellow'
                style={{ bottom: '70%', transformOrigin: 'left' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.7, ease: "easeOut" }}
              >
                <motion.span
                  className='absolute -top-6 right-2 font-mono font-bold text-xs uppercase text-chip-yellow'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2 }}
                >
                  BADGE 7.0+
                </motion.span>
              </motion.div>
            )}

            {scalePoints.map((point, index) => (
              <div
                key={point.value}
                className='flex-1 flex flex-col items-center justify-end group cursor-pointer relative z-10'
              >
                <motion.div
                  className={`w-full mx-1 border-[3px] border-almost-black ${point.color} transition-all duration-200 group-hover:-translate-y-1`}
                  initial={{ height: 0 }}
                  animate={chartInView ? { height: `${point.value * 10}%` } : { height: 0 }}
                  transition={{
                    ...brutalSpring,
                    delay: index * 0.1,
                    duration: 0.5
                  }}
                >
                  <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                    <div className='absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-warm-white border-[3px] border-almost-black px-2 py-1 whitespace-nowrap z-20'>
                      <div className='font-mono font-bold text-xs uppercase'>
                        {point.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className='font-mono font-bold text-sm mt-2 text-almost-black'
                  initial={{ opacity: 0 }}
                  animate={chartInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  {point.value}
                </motion.div>
              </div>
            ))}
          </div>
          <motion.div
            className='font-mono font-bold text-xs uppercase tracking-wider text-center mt-2 text-gray'
            initial={{ opacity: 0 }}
            animate={chartInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 2.5 }}
          >
            CHIPTER SCORE
          </motion.div>
        </div>

        {/* Rating Criteria with smooth stagger animation */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 1 }, // Container stays visible to prevent layout shift
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08, // Slightly faster stagger for smoother flow
                delayChildren: 0.3, // Small delay to let the chart settle first
                when: "beforeChildren"
              }
            }
          }}
        >
          {criteria.map((criterion, index) => (
            <motion.div
              key={criterion.name}
              className='bg-warm-white border-[3px] border-almost-black p-4 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--almost-black)] transition-all duration-200 cursor-pointer'
              onMouseEnter={() => setHoveredCriteria(criterion.name)}
              onMouseLeave={() => setHoveredCriteria(null)}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20, // Reduced from 50 to prevent large jumps
                  scale: 0.95, // Subtle scale instead of rotateY for smoother GPU acceleration
                  filter: "blur(4px)" // Adds a subtle blur that clears up on entry
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                  transition: {
                    ...smoothCardSpring,
                    opacity: { duration: 0.4, ease: smoothEasing },
                    filter: { duration: 0.3, ease: "easeOut" }
                  }
                }
              }}
              style={{
                transformOrigin: "center bottom", // Makes the scale/movement feel more grounded
                willChange: index < 3 ? "transform, opacity, filter" : "auto" // Optimize first few cards
              }}
            >
              <div className='font-mono font-extrabold text-3xl text-hot-orange mb-2'>
                {criterion.number}
              </div>
              <h3 className='font-mono font-bold text-sm uppercase tracking-wider text-almost-black mb-2'>
                {criterion.name}
              </h3>
              <motion.p
                className='font-sans text-xs text-gray overflow-hidden'
                initial={false}
                animate={{
                  opacity: hoveredCriteria === criterion.name ? 1 : 0.7,
                  height: hoveredCriteria === criterion.name ? 'auto' : 0,
                  y: hoveredCriteria === criterion.name ? 0 : -5
                }}
                transition={{
                  duration: 0.25,
                  ease: smoothEasing,
                  opacity: { duration: 0.15 }
                }}
                style={{
                  transformOrigin: "top",
                }}
              >
                {criterion.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Two Column Layout for Badge Info with viewport animations */}
        <motion.div
          className='mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {/* Badge Thresholds */}
          <motion.div
            className='bg-warm-white border-[3px] border-almost-black p-6'
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: brutalSpring }
            }}
          >
            <h3 className='font-mono font-bold text-xl uppercase text-almost-black mb-4'>
              BADGE THRESHOLDS
            </h3>
            <div className='space-y-3'>
              {[
                { score: '7.0+', color: 'bg-chip-yellow', name: 'SEISMIC SNACK' },
                { score: '8.0+', color: 'bg-hot-orange', name: 'TECTONIC CRUNCH' },
                { score: '9.0+', color: 'bg-almost-black', name: 'EPICENTER ELITE' },
                { score: '10.0', color: 'bg-linear-to-r from-hot-orange to-chip-yellow', name: 'OFF THE CHIPTER' },
              ].map((badge, index) => (
                <motion.div
                  key={badge.score}
                  className='flex items-center gap-4'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className='font-mono font-bold text-lg text-hot-orange min-w-[60px]'>
                    {badge.score}
                  </div>
                  <motion.div
                    className={`h-[3px] flex-1 ${badge.color}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
                    style={{ transformOrigin: 'left' }}
                  />
                  <div className='font-mono font-bold uppercase tracking-wider text-sm'>
                    {badge.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Statistical Reality */}
          <motion.div
            className='bg-warm-white border-[3px] border-almost-black p-6'
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: brutalSpring }
            }}
          >
            <h3 className='font-mono font-bold text-xl uppercase text-almost-black mb-4'>
              STATISTICAL REALITY
            </h3>
            <div className='space-y-3'>
              {[
                { label: 'AVERAGE CHIP', value: '5.8', color: 'text-hot-orange' },
                { label: 'CHIPS ABOVE 7.0', value: '23%', color: 'text-almost-black' },
                { label: 'CHIPS ABOVE 8.0', value: '12%', color: 'text-almost-black' },
                { label: 'CHIPS ABOVE 9.0', value: '2%', color: 'text-almost-black' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className='flex justify-between items-center'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <span className='font-mono font-bold text-sm uppercase'>
                    {stat.label}
                  </span>
                  <motion.span
                    className={`font-mono font-extrabold text-lg ${stat.color}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ ...brutalSpring, delay: 1.3 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Score Calculation Example */}
        <motion.div
          className='mt-6 bg-almost-black text-warm-white border-[3px] border-almost-black p-6'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={brutalSpring}
        >
          <h3 className='font-mono font-bold text-xl uppercase mb-4'>
            HOW WE CALCULATE
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <p className='font-mono text-sm uppercase tracking-wider mb-3 text-chip-yellow'>
                EXAMPLE: DORITOS BLAZE
              </p>
              <div className='space-y-1 font-mono text-sm'>
                {[
                  { metric: 'CRUNCH', score: '8.5' },
                  { metric: 'FLAVOR', score: '8.3' },
                  { metric: 'AFTERTASTE', score: '8.2' },
                  { metric: 'SEASONING', score: '8.6' },
                  { metric: 'BAG RATIO', score: '8.4' },
                ].map((item, index) => (
                  <motion.div
                    key={item.metric}
                    className='flex justify-between'
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span>{item.metric}</span>
                    <span className='text-hot-orange'>{item.score}</span>
                  </motion.div>
                ))}
                <motion.div
                  className='border-t-[3px] border-chip-yellow mt-2 pt-2 flex justify-between font-bold'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <span>OVERALL</span>
                  <span className='text-chip-yellow'>8.4</span>
                </motion.div>
              </div>
            </div>
            <motion.div
              className='flex items-center justify-center'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <p className='font-serif italic text-lg text-center'>
                &ldquo;Five metrics. Equal weight. No mercy.&rdquo;
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}