import { client, urlFor } from '@/lib/sanity.client';
import { allReviewsQuery } from '@/lib/sanity.queries';
import { SanityChipReview, transformReviewForCard } from '@/lib/sanity.types';
import ReviewsPageClient from './reviews-client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollingBanner from '@/components/ScrollingBanner';

async function fetchAllReviews() {
  try {
    const reviews = await client.fetch<SanityChipReview[]>(allReviewsQuery);
    return reviews.map(review => transformReviewForCard(review, (source) => urlFor(source).url()));
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
}

export default async function ReviewsPage() {
  const reviews = await fetchAllReviews();

  return (
    <div className='min-h-dvh bg-warm-white'>
      <Header />
      <ScrollingBanner />
      <ReviewsPageClient reviews={reviews} />
      <Footer />
    </div>
  );
}

export const metadata = {
  title: 'All Reviews | Chipter',
  description: 'Browse all chip reviews on the Chipter Scale. Discover ratings, verdicts, and detailed breakdowns of every chip we\'ve tested.',
};