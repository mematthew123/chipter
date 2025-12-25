import Link from 'next/link';
import { getRecentReviews } from '@/lib/data/mockReviews';
import ReviewCard from './ReviewCard';

export default function RecentReviews() {
  const recentReviews = getRecentReviews(6);

  return (
    <section className="w-full py-16 px-4 bg-chip-yellow/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-mono font-extrabold text-3xl md:text-4xl uppercase text-almost-black mb-8 text-center">
          RECENT REVIEWS
        </h2>

        {/* Grid of Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {recentReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href="/reviews"
            className="inline-block font-mono font-bold uppercase tracking-wide px-6 py-3 bg-almost-black text-warm-white border-[3px] border-almost-black hover:bg-warm-white hover:text-almost-black transition-all duration-200"
          >
            VIEW ALL REVIEWS
          </Link>
        </div>
      </div>
    </section>
  );
}