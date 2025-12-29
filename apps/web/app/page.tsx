import AnimatedHero from '@/components/AnimatedHero';
import AnimatedRecentReviews from '@/components/AnimatedRecentReviews';
import BadgeShowcase from '@/components/BadgeShowcase';
import AnimatedChipterScale from '@/components/AnimatedChipterScale';
import SubmitChip from '@/components/SubmitChip';
import AnimatedFeaturedReview from '@/components/AnimatedFeaturedReview';

export default function Home() {
    return (
        <div className='w-full'>
            <AnimatedHero />
            <AnimatedFeaturedReview/>
            <AnimatedRecentReviews />
            <BadgeShowcase />
            <AnimatedChipterScale />
            <SubmitChip />
        </div>
    );
}
