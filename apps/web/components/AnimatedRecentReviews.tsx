import { client, urlFor } from '@/lib/sanity.client';
import { recentReviewsQuery } from '@/lib/sanity.queries';
import { SanityChipReview, transformReviewForCard } from '@/lib/sanity.types';
import AnimatedRecentReviewsClient from './AnimatedRecentReviewsClient';

async function fetchRecentReviews() {
  try {
    const reviews = await client.fetch<SanityChipReview[]>(
      recentReviewsQuery,
      { limit: 6 }
    );
    return reviews.map(review => transformReviewForCard(review, (source) => urlFor(source).url()));
  } catch (error) {
    console.error('Error fetching recent reviews:', error);
    return [];
  }
}

export default async function AnimatedRecentReviews() {
  const recentReviews = await fetchRecentReviews();

  return <AnimatedRecentReviewsClient reviews={recentReviews} />;
}