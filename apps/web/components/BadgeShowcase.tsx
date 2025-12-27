'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getBadgeCertifiedChips, BadgeTier } from '@/lib/data/mockReviews';
import Badge from './Badge';

export default function BadgeShowcase() {
    const [selectedTier, setSelectedTier] = useState<BadgeTier | 'all'>('all');
    const allCertifiedChips = getBadgeCertifiedChips();

    const filteredChips =
        selectedTier === 'all'
            ? allCertifiedChips
            : allCertifiedChips.filter((chip) => chip.badge === selectedTier);

    const badgeCounts = {
        seismic: allCertifiedChips.filter((c) => c.badge === 'seismic').length,
        tectonic: allCertifiedChips.filter((c) => c.badge === 'tectonic')
            .length,
        epicenter: allCertifiedChips.filter((c) => c.badge === 'epicenter')
            .length,
        offChipter: allCertifiedChips.filter((c) => c.badge === 'offChipter')
            .length,
    };

    return (
        <section className='py-16 px-4 bg-warm-white'>
            <div className='max-w-7xl mx-auto'>
                <h2 className='font-mono font-extrabold text-3xl md:text-4xl uppercase text-almost-black mb-8 text-center'>
                    BADGE-CERTIFIED CHIPS
                </h2>

                {/* Badge Filter Tabs */}
                <div className='flex flex-wrap gap-4 mb-8 justify-center'>
                    <button
                        onClick={() => setSelectedTier('all')}
                        className={`font-mono font-bold uppercase tracking-wide px-4 py-2 border-[3px] transition-all duration-200 ${
                            selectedTier === 'all'
                                ? 'bg-almost-black text-warm-white border-almost-black'
                                : 'bg-warm-white text-almost-black border-almost-black hover:bg-gray/10'
                        }`}
                    >
                        ALL ({allCertifiedChips.length})
                    </button>

                    <button
                        onClick={() => setSelectedTier('seismic')}
                        className={`font-mono font-bold uppercase tracking-wide px-4 py-2 border-[3px] transition-all duration-200 ${
                            selectedTier === 'seismic'
                                ? 'bg-chip-yellow text-almost-black border-almost-black'
                                : 'bg-warm-white text-almost-black border-almost-black hover:bg-chip-yellow/20'
                        }`}
                    >
                        SEISMIC ({badgeCounts.seismic})
                    </button>

                    <button
                        onClick={() => setSelectedTier('tectonic')}
                        className={`font-mono font-bold uppercase tracking-wide px-4 py-2 border-[3px] transition-all duration-200 ${
                            selectedTier === 'tectonic'
                                ? 'bg-hot-orange text-warm-white border-almost-black'
                                : 'bg-warm-white text-almost-black border-almost-black hover:bg-hot-orange/20'
                        }`}
                    >
                        TECTONIC ({badgeCounts.tectonic})
                    </button>

                    <button
                        onClick={() => setSelectedTier('epicenter')}
                        className={`font-mono font-bold uppercase tracking-wide px-4 py-2 border-[3px] transition-all duration-200 ${
                            selectedTier === 'epicenter'
                                ? 'bg-almost-black text-hot-orange border-hot-orange'
                                : 'bg-warm-white text-almost-black border-almost-black hover:bg-almost-black/10'
                        }`}
                    >
                        EPICENTER ({badgeCounts.epicenter})
                    </button>
                </div>

                {/* Horizontal Scroll Container */}
                <div className='relative'>
                    <div className='flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory'>
                        {filteredChips.map((chip) => (
                            <Link
                                key={chip.id}
                                href={`/reviews/${chip.id}`}
                                className='flex-none w-64 group'
                            >
                                <div className='bg-warm-white border-[3px] border-almost-black hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_var(--almost-black)] transition-all duration-200 snap-center'>
                                    {/* Image */}
                                    <div className='relative aspect-square border-b-[3px] border-almost-black bg-gray/10'>
                                        <Image
                                            src={chip.imageUrl}
                                            alt={`${chip.brand} ${chip.name}`}
                                            fill
                                            className='object-cover'
                                            sizes='256px'
                                        />
                                        {/* Score Overlay */}
                                        <div className='absolute top-4 right-4 bg-warm-white border-[3px] border-almost-black px-3 py-1'>
                                            <div className='font-mono font-extrabold text-2xl text-hot-orange'>
                                                {chip.overallScore.toFixed(1)}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className='p-4'>
                                        <h3 className='font-mono font-bold text-lg uppercase text-almost-black'>
                                            {chip.brand}
                                        </h3>
                                        <p className='font-mono text-base uppercase text-hot-orange mb-2'>
                                            {chip.name}
                                        </p>
                                        {chip.badge && (
                                            <Badge
                                                tier={chip.badge}
                                                size='sm'
                                            />
                                        )}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
