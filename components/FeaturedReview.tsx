import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedReview } from '@/lib/data/mockReviews';
import Badge from './Badge';

export default function FeaturedReview() {
  const featuredReview = getFeaturedReview();

  return (
    <section className="py-16 px-4 bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-mono font-extrabold text-3xl md:text-4xl uppercase text-almost-black mb-8 text-center">
          FEATURED REVIEW
        </h2>

        <Link
          href={`/reviews/${featuredReview.id}`}
          className="group block bg-warm-white border-[3px] border-almost-black hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0_var(--almost-black)] transition-all duration-200"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Image - 60% on desktop */}
            <div className="relative aspect-[16/9] lg:aspect-auto lg:w-[60%] border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-almost-black bg-gray/10">
              <Image
                src={featuredReview.imageUrl}
                alt={`${featuredReview.brand} ${featuredReview.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>

            {/* Content - 40% on desktop */}
            <div className="flex-1 p-6 lg:p-8 flex flex-col justify-between">
              <div>
                {/* Badge */}
                {featuredReview.badge && (
                  <div className="mb-4">
                    <Badge tier={featuredReview.badge} size="lg" />
                  </div>
                )}

                {/* Chip Info */}
                <h3 className="font-mono font-bold text-2xl lg:text-3xl uppercase text-almost-black">
                  {featuredReview.brand}
                </h3>
                <p className="font-mono font-bold text-xl lg:text-2xl uppercase text-hot-orange mb-4">
                  {featuredReview.name}
                </p>

                {/* Review Excerpt */}
                <p className="font-sans text-lg text-almost-black mb-6 line-clamp-3">
                  {featuredReview.reviewText}
                </p>

                {/* Read More */}
                <span className="inline-block font-mono font-bold uppercase tracking-wide text-almost-black group-hover:text-hot-orange transition-colors duration-200">
                  READ FULL REVIEW →
                </span>
              </div>

              {/* Comically Large Score */}
              <div className="mt-8 lg:mt-0">
                <div className="font-mono font-extrabold text-[120px] lg:text-[160px] leading-none text-hot-orange">
                  {featuredReview.overallScore.toFixed(1)}
                </div>
                <div className="font-mono font-bold text-xs uppercase tracking-wider text-gray">
                  CHIPTER SCORE
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}