import Header from '@/components/Header';
import ScrollingBanner from '@/components/ScrollingBanner';
import Hero from '@/components/Hero';
import FeaturedReview from '@/components/FeaturedReview';
import RecentReviews from '@/components/RecentReviews';
import BadgeShowcase from '@/components/BadgeShowcase';
import ChipterScale from '@/components/ChipterScale';
import SubmitChip from '@/components/SubmitChip';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <div className='min-h-screen bg-warm-white'>
            <Header />
            <ScrollingBanner />
            <main className='w-full'>
                <Hero />
                <FeaturedReview />
                <RecentReviews />
                <BadgeShowcase />
                <ChipterScale />
                <SubmitChip />
            </main>
            <Footer />
        </div>
    );
}
