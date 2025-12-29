import { sanityFetch, urlFor } from '@/lib/sanity.live';
import { allReviewsQuery } from '@/lib/sanity.queries';
import { SanityChipReview, transformReviewForCard } from '@/lib/sanity.types';
import { draftMode } from 'next/headers';
import ReviewsPageClient from './reviews-client';
import ReviewsPageLive from './reviews-live';
import VisualEditRefresh from '@/components/VisualEditRefresh';

export default async function ReviewsPage() {
  const { data: reviews } = await sanityFetch<SanityChipReview[]>({
    query: allReviewsQuery,
  });

  const transformedReviews = reviews?.map(review =>
    transformReviewForCard(review, (source) => urlFor(source).url())
  ) || [];

  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <>
      {isDraftMode ? (
        <ReviewsPageLive initialReviews={transformedReviews} />
      ) : (
        <ReviewsPageClient reviews={transformedReviews} />
      )}
      <VisualEditRefresh isDraftMode={isDraftMode} />
    </>
  );
}

export const metadata = {
  title: 'All Reviews | Chipter',
  description: 'Browse all chip reviews on the Chipter Scale. Discover ratings, verdicts, and detailed breakdowns of every chip we\'ve tested.',
};