import { notFound } from 'next/navigation';
import Image from 'next/image';
import { sanityFetch, baseClient, urlFor } from '@/lib/sanity.live';
import { singleReviewQuery, allReviewsQuery } from '@/lib/sanity.queries';
import { SanityChipReview } from '@/lib/sanity.types';
import { draftMode } from 'next/headers';
import Badge from '@/components/Badge';
import ReviewPageClient from './review-client';
import VisualEditRefresh from '@/components/VisualEditRefresh';
import Comments from '@/components/comments/Comments';
import { getComments } from '@/lib/comments';

// Generate static params for all reviews
export async function generateStaticParams() {
  // Use baseClient directly to avoid draftMode() during build
  const reviews = await baseClient.fetch<SanityChipReview[]>(allReviewsQuery);
  return reviews.map((review) => ({
    slug: review.slug.current,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data: review } = await sanityFetch<SanityChipReview>({
    query: singleReviewQuery,
    params: { slug },
  });

  if (!review) {
    return {
      title: 'Review Not Found | Chipter',
      description: 'This chip review could not be found.',
    };
  }

  // reviewSummary is always a string from Sanity (text field)
  const summaryText = review.reviewSummary || '';

  return {
    title: review.seoTitle || `${review.chipProduct.name} Review | Chipter`,
    description: review.seoDescription || summaryText,
    openGraph: {
      title: review.seoTitle || `${review.chipProduct.name} Review | Chipter`,
      description: review.seoDescription || summaryText,
      images: review.chipProduct.productImage ? [urlFor(review.chipProduct.productImage).url()] : [],
    },
  };
}

// Map badge tier
function mapBadgeTier(sanityBadge?: string): 'seismic' | 'tectonic' | 'epicenter' | 'offChipter' | null {
  if (!sanityBadge) return null;

  switch(sanityBadge) {
    case 'off_the_chipter':
      return 'offChipter';
    case 'epicenter_elite':
      return 'epicenter';
    case 'tectonic_crunch':
      return 'tectonic';
    case 'seismic_snack':
      return 'seismic';
    default:
      return null;
  }
}

async function fetchReview(slug: string) {
  try {
    const { data: review } = await sanityFetch<SanityChipReview>({
      query: singleReviewQuery,
      params: { slug },
      revalidate: 300, // Revalidate every 5 minutes
    });
    return review;
  } catch (error) {
    console.error('Error fetching review:', error);
    return null;
  }
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const review = await fetchReview(slug);

  if (!review) {
    notFound();
  }

  const badgeTier = mapBadgeTier(review.badge);
  const reviewDate = new Date(review.reviewDate);
  const formattedDate = reviewDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const { isEnabled: isDraftMode } = await draftMode();

  // Fetch comments for this review
  const comments = review.commentsEnabled ? await getComments(review._id, 'chipReview') : [];

  return (
    <div className='w-full'>
        {/* Hero Section */}
        <section className='w-full py-8 px-4 bg-chip-yellow/20 border-b-[3px] border-almost-black'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              {/* Product Image */}
              <div className='relative aspect-square border-[3px] border-almost-black bg-warm-white'>
                {review.chipProduct.productImage ? (
                  <Image
                    src={urlFor(review.chipProduct.productImage).url()}
                    alt={`${review.chipProduct.brand.name} ${review.chipProduct.name}`}
                    fill
                    className='object-cover'
                    priority
                  />
                ) : (
                  <div className='w-full h-full flex items-center justify-center bg-chip-yellow/30'>
                    <span className='font-mono font-bold text-6xl text-almost-black/30'>
                      {review.chipProduct.brand.name?.substring(0, 2).toUpperCase() || 'CH'}
                    </span>
                  </div>
                )}
              </div>

              {/* Review Header Info */}
              <div className='flex flex-col justify-between'>
                <div>
                  {/* Title */}
                  <h1 className='font-mono font-extrabold text-3xl md:text-5xl uppercase text-almost-black mb-4'>
                    {review.title || `${review.chipProduct.name} Review`}
                  </h1>

                  {/* Product Info */}
                  <div className='mb-6'>
                    <p className='font-mono font-bold text-lg uppercase text-almost-black'>
                      {review.chipProduct.brand.name}
                    </p>
                    <p className='font-sans text-base text-gray'>
                      {review.chipProduct.flavor}
                    </p>
                    {review.chipProduct.chipType && (
                      <p className='font-mono text-sm uppercase text-gray mt-1'>
                        {review.chipProduct.chipType}
                      </p>
                    )}
                  </div>

                  {/* One-Line Verdict */}
                  <div className='p-4 bg-warm-white border-[3px] border-almost-black mb-6'>
                    <p className='font-serif italic text-xl text-almost-black'>
                      &quot;{review.oneLineVerdict}&quot;
                    </p>
                  </div>

                  {/* Score and Badge */}
                  <div className='flex items-center gap-6 mb-6'>
                    <div>
                      <p className='font-mono text-xs uppercase tracking-wider text-gray mb-1'>
                        Chipter Score
                      </p>
                      <div className='font-mono font-extrabold text-6xl text-hot-orange'>
                        {review.chipterScore.toFixed(1)}
                      </div>
                    </div>
                    {badgeTier && <Badge tier={badgeTier} size='lg' />}
                  </div>
                </div>

                {/* Meta Info */}
                <div className='pt-6 border-t-[3px] border-almost-black'>
                  <p className='font-mono text-sm text-gray'>
                    Reviewed on {formattedDate}
                  </p>
                  {review.reviewAuthor && (
                    <p className='font-mono text-sm text-gray'>
                      by {review.reviewAuthor.name}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Review Content with Client Component for animations */}
        <ReviewPageClient
          review={review}
          badgeTier={badgeTier}
        />

        {/* Comments Section */}
        {review.commentsEnabled && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <Comments
              parentId={review._id}
              parentType="chipReview"
              initialComments={comments}
            />
          </section>
        )}

      <VisualEditRefresh isDraftMode={isDraftMode} />
    </div>
  );
}