/* eslint-disable @typescript-eslint/no-explicit-any */
import { sanityFetch } from '@/lib/sanity.live';
import { urlFor } from '@/lib/sanity.client';
import { recentReviewsQuery } from '@/lib/sanity.queries';
import { transformReviewForCard } from '@/lib/sanity.types';
import AnimatedRecentReviewsClient from './AnimatedRecentReviewsClient';

async function fetchRecentReviews() {
  try {
    const { data: reviews } = await sanityFetch({
      query: recentReviewsQuery,
      params: { limit: 6 }
    });

    if (!reviews || !Array.isArray(reviews)) {
      return [];
    }

    return reviews.map((review: any) => transformReviewForCard(review, (source) => urlFor(source).url()));
  } catch (error) {
    console.error('Error fetching recent reviews:', error);
    return [];
  }
}

export default async function AnimatedRecentReviews() {
  const recentReviews = await fetchRecentReviews();

  return <AnimatedRecentReviewsClient reviews={recentReviews} />;
}