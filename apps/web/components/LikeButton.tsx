'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LikeButtonProps {
  documentId: string
  documentType: 'post' | 'chipReview'
  initialCount: number
  initialLiked?: boolean
}

export function LikeButton({
  documentId,
  documentType,
  initialCount,
  initialLiked = false
}: LikeButtonProps) {
  const [count, setCount] = useState(initialCount)
  const [isLiked, setIsLiked] = useState(initialLiked)
  const [isAnimating, setIsAnimating] = useState(false)

  // Check localStorage on mount for existing like status
  useEffect(() => {
    const likeKey = `liked_${documentType}_${documentId}`
    const liked = localStorage.getItem(likeKey) === 'true'
    setIsLiked(liked)
  }, [documentId, documentType])

  const handleLike = async () => {
    if (isAnimating) return

    setIsAnimating(true)
    const endpoint = isLiked ? '/api/likes/unlike' : '/api/likes/like'

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ documentId, documentType })
      })

      if (response.ok) {
        setIsLiked(!isLiked)
        setCount(prev => isLiked ? Math.max(0, prev - 1) : prev + 1)

        // Store in localStorage for anonymous persistence
        const likeKey = `liked_${documentType}_${documentId}`
        if (!isLiked) {
          localStorage.setItem(likeKey, 'true')
        } else {
          localStorage.removeItem(likeKey)
        }
      }
    } catch (error) {
      console.error('Failed to update like:', error)
    } finally {
      setTimeout(() => setIsAnimating(false), 300)
    }
  }

  return (
    <button
      onClick={handleLike}
      className={`
        relative flex items-center gap-2 px-4 py-2
        border-[3px] border-almost-black
        font-jetbrains font-bold uppercase text-sm
        transition-all duration-200
        ${isLiked
          ? 'bg-hot-orange text-warm-white shadow-brutal'
          : 'bg-warm-white text-almost-black hover:shadow-brutal'
        }
      `}
      disabled={isAnimating}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={isLiked ? 'filled' : 'empty'}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.2 }}
          className="text-lg"
        >
          {isLiked ? '❤️' : '🤍'}
        </motion.span>
      </AnimatePresence>

      <span>
        {count > 0 ? count : 'Like'}
      </span>

      {isAnimating && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="size-full border-[3px] border-hot-orange" />
        </motion.div>
      )}
    </button>
  )
}