'use client';

import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'motion/react';

interface VisualEditRefreshProps {
  isDraftMode: boolean;
}

export default function VisualEditRefresh({ isDraftMode }: VisualEditRefreshProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleToggle = () => {
    if (isDraftMode) {
      // Disable draft mode
      router.push(`/api/draft/disable?redirect=${encodeURIComponent(pathname)}`);
    } else {
      // Enable draft mode
      router.push(`/api/draft/enable?redirect=${encodeURIComponent(pathname)}`);
    }
  };

  return (
    <motion.button
      onClick={handleToggle}
      className={`fixed bottom-4 right-4 z-50 px-4 py-2 font-mono font-bold text-xs uppercase border-[3px] border-almost-black transition-all ${
        isDraftMode
          ? 'bg-hot-orange text-warm-white hover:bg-almost-black'
          : 'bg-chip-yellow text-almost-black hover:bg-hot-orange hover:text-warm-white'
      }`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: 'spring',
        damping: 25,
        stiffness: 300,
        delay: 0.5
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center gap-2">
        <span className={`block size-2 rounded-full ${isDraftMode ? 'bg-fresh-green animate-pulse' : 'bg-almost-black'}`} />
        {isDraftMode ? 'Exit Preview' : 'Enter Preview'}
      </div>
    </motion.button>
  );
}