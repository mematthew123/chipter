interface LikeCounterProps {
  count: number
}

export function LikeCounter({ count }: LikeCounterProps) {
  if (count === 0) return null

  const getTier = (count: number) => {
    if (count >= 100) return { label: 'Viral Chip', color: 'bg-hot-orange text-warm-white' }
    if (count >= 50) return { label: 'Hot Chip', color: 'bg-chip-yellow text-almost-black' }
    if (count >= 10) return { label: 'Rising Chip', color: 'bg-fresh-green text-warm-white' }
    return null // Don't show a badge for less than 10 likes
  }

  const tier = getTier(count)

  return (
    <div className="inline-flex items-center gap-3">
      {tier && (
        <span className={`
          px-3 py-1 border-[3px] border-almost-black
          ${tier.color} font-jetbrains text-xs font-bold uppercase tracking-wide
        `}>
          {tier.label}
        </span>
      )}
      <span className="text-label text-sm">
        {count} {count === 1 ? 'Like' : 'Likes'}
      </span>
    </div>
  )
}