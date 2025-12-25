import { BadgeTier } from '@/lib/data/mockReviews';

interface BadgeProps {
  tier: BadgeTier;
  size?: 'sm' | 'md' | 'lg';
}

export default function Badge({ tier, size = 'md' }: BadgeProps) {
  if (!tier) return null;

  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2',
  };

  const tierStyles = {
    seismic: 'bg-chip-yellow text-almost-black border-almost-black',
    tectonic: 'bg-hot-orange text-warm-white border-almost-black',
    epicenter: 'bg-almost-black text-hot-orange border-hot-orange',
    offChipter: 'bg-linear-to-br from-hot-orange to-chip-yellow text-almost-black border-almost-black',
  };

  const tierLabels = {
    seismic: 'SEISMIC SNACK',
    tectonic: 'TECTONIC CRUNCH',
    epicenter: 'EPICENTER ELITE',
    offChipter: 'OFF THE CHIPTER',
  };

  return (
    <span className={`inline-block font-mono font-bold uppercase tracking-wider border-[3px] ${sizeClasses[size]} ${tierStyles[tier]}`}>
      {tierLabels[tier]}
    </span>
  );
}