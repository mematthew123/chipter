import Image from 'next/image';
import Link from 'next/link';
import { ChipReview } from '@/lib/data/mockReviews';
import Badge from './Badge';

interface ReviewCardProps {
  review: ChipReview;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Link
      href={`/reviews/${review.id}`}
      className="group block bg-warm-white border-[3px] border-almost-black hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--almost-black)] transition-all duration-200"
    >
      {/* Image */}
      <div className="relative aspect-square border-b-[3px] border-almost-black bg-gray/10">
        <Image
          src={review.imageUrl}
          alt={`${review.brand} ${review.name}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Chip Name */}
        <h3 className="font-mono font-bold text-lg uppercase text-almost-black">
          {review.name}
        </h3>

        {/* Brand */}
        <p className="font-sans text-sm text-gray mb-3">
          {review.brand}
        </p>

        {/* Score and Badge */}
        <div className="flex items-center justify-between">
          <div className="font-mono font-extrabold text-3xl text-hot-orange">
            {review.overallScore.toFixed(1)}
          </div>
          {review.badge && (
            <Badge tier={review.badge} size="sm" />
          )}
        </div>

        {/* Flavor */}
        <p className="font-mono text-xs uppercase tracking-wider text-gray mt-2">
          {review.flavor}
        </p>
      </div>
    </Link>
  );
}