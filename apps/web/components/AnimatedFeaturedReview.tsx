import { sanityFetch, urlFor } from '@/lib/sanity.live';
import { featuredReviewQuery } from '@/lib/sanity.queries';
import { transformFeaturedReview } from '@/lib/sanity.types';
import AnimatedFeaturedReviewClient from './AnimatedFeaturedReviewClient';

export default async function AnimatedFeaturedReview() {
  const { data: review } = await sanityFetch({
    query: featuredReviewQuery,
  });

  if (!review) {
    // Fallback if no featured review is found
    return (
      <section className='py-16 px-4 bg-warm-white'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='font-mono font-extrabold text-3xl md:text-4xl uppercase text-almost-black mb-8 text-center'>
            FEATURED REVIEW
          </h2>
          <div className='bg-warm-white border-[3px] border-almost-black p-8 text-center'>
            <p className='font-sans text-lg text-almost-black'>
              No featured review available at this moment.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const transformedReview = transformFeaturedReview(
    review,
    (source) => urlFor(source).url()
  );

  return <AnimatedFeaturedReviewClient {...transformedReview} />;
}