import Header from '@/components/Header';
import ScrollingBanner from '@/components/ScrollingBanner';
import AnimatedHero from '@/components/AnimatedHero';
import AnimatedFeaturedReview from '@/components/AnimatedFeaturedReview';
import AnimatedRecentReviews from '@/components/AnimatedRecentReviews';
import BadgeShowcase from '@/components/BadgeShowcase';
import AnimatedChipterScale from '@/components/AnimatedChipterScale';
import SubmitChip from '@/components/SubmitChip';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <div className='min-h-screen bg-warm-white'>
            <Header />
            <ScrollingBanner />
            <main className='w-full'>
                <AnimatedHero />
                <AnimatedFeaturedReview />
                <AnimatedRecentReviews />
                <BadgeShowcase />
                <AnimatedChipterScale />
                <SubmitChip />
            </main>
            <Footer />
        </div>
    );
}
