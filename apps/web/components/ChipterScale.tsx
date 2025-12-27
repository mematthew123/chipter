'use client';

import { useState } from 'react';

export default function ChipterScale() {
    const [hoveredCriteria, setHoveredCriteria] = useState<string | null>(null);

    const criteria = [
        {
            name: 'CRUNCH',
            description:
                'The structural integrity and auditory satisfaction of the bite.',
            abbr: 'CRN',
            number: '01',
        },
        {
            name: 'FLAVOR',
            description:
                'Taste profile intensity and authenticity to promised experience.',
            abbr: 'FLV',
            number: '02',
        },
        {
            name: 'AFTERTASTE',
            description: 'The lingering impression. Does it haunt or delight?',
            abbr: 'AFT',
            number: '03',
        },
        {
            name: 'SEASONING',
            description: 'Distribution consistency. No naked chips allowed.',
            abbr: 'SSN',
            number: '04',
        },
        {
            name: 'BAG RATIO',
            description:
                'Chip-to-air ratio. We measure disappointment by volume.',
            abbr: 'BAG',
            number: '05',
        },
    ];

    const scalePoints = [
        { value: 1, label: 'TRAGIC', color: 'bg-gray' },
        { value: 2, label: 'WEAK', color: 'bg-gray' },
        { value: 3, label: 'FORGETTABLE', color: 'bg-gray' },
        { value: 4, label: 'MEDIOCRE', color: 'bg-gray' },
        { value: 5, label: 'ACCEPTABLE', color: 'bg-gray' },
        { value: 6, label: 'DECENT', color: 'bg-gray' },
        { value: 7, label: 'SEISMIC', color: 'bg-chip-yellow' },
        { value: 8, label: 'TECTONIC', color: 'bg-hot-orange' },
        { value: 9, label: 'EPICENTER', color: 'bg-almost-black' },
        {
            value: 10,
            label: 'OFF CHIPTER',
            color: 'bg-linear-to-r from-hot-orange to-chip-yellow',
        },
    ];

    return (
        <section className='py-16 px-4 bg-gray/5'>
            <div className='max-w-7xl mx-auto'>
                <h2 className='font-mono font-extrabold text-3xl md:text-4xl uppercase text-almost-black mb-8 text-center'>
                    THE CHIPTER SCALE
                </h2>

                {/* Scale Visualization */}
                <div className='mb-12'>
                    <div className='relative flex justify-between items-end h-64 border-b-[3px] border-l-[3px] border-almost-black p-4'>
                        {/* Average Line */}
                        <div
                            className='absolute left-0 right-0 border-t-[3px] border-hot-orange border-dashed opacity-60'
                            style={{ bottom: '58%' }}
                        >
                            <span className='absolute -top-6 left-2 font-mono font-bold text-xs uppercase text-hot-orange'>
                                AVG 5.8
                            </span>
                        </div>

                        {/* Badge Threshold Line at 7.0 */}
                        <div
                            className='absolute left-0 right-0 border-t-[3px] border-chip-yellow'
                            style={{ bottom: '70%' }}
                        >
                            <span className='absolute -top-6 right-2 font-mono font-bold text-xs uppercase text-chip-yellow'>
                                BADGE 7.0+
                            </span>
                        </div>

                        {scalePoints.map((point) => (
                            <div
                                key={point.value}
                                className='flex-1 flex flex-col items-center justify-end group cursor-pointer relative z-10'
                            >
                                <div
                                    className={`w-full mx-1 border-[3px] border-almost-black ${point.color} transition-all duration-200 group-hover:-translate-y-1`}
                                    style={{ height: `${point.value * 10}%` }}
                                >
                                    <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                                        <div className='absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-warm-white border-[3px] border-almost-black px-2 py-1 whitespace-nowrap z-20'>
                                            <div className='font-mono font-bold text-xs uppercase'>
                                                {point.label}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='font-mono font-bold text-sm mt-2 text-almost-black'>
                                    {point.value}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='font-mono font-bold text-xs uppercase tracking-wider text-center mt-2 text-gray'>
                        CHIPTER SCORE
                    </div>
                </div>

                {/* Rating Criteria */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
                    {criteria.map((criterion) => (
                        <div
                            key={criterion.name}
                            className='bg-warm-white border-[3px] border-almost-black p-4 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--almost-black)] transition-all duration-200 cursor-pointer'
                            onMouseEnter={() =>
                                setHoveredCriteria(criterion.name)
                            }
                            onMouseLeave={() => setHoveredCriteria(null)}
                        >
                            <div className='font-mono font-extrabold text-3xl text-hot-orange mb-2'>
                                {criterion.number}
                            </div>
                            <h3 className='font-mono font-bold text-sm uppercase tracking-wider text-almost-black mb-2'>
                                {criterion.name}
                            </h3>
                            <p
                                className={`font-sans text-xs text-gray transition-all duration-200 ${
                                    hoveredCriteria === criterion.name
                                        ? 'opacity-100'
                                        : 'opacity-0 h-0'
                                }`}
                            >
                                {criterion.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Two Column Layout for Badge Info */}
                <div className='mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    {/* Badge Thresholds */}
                    <div className='bg-warm-white border-[3px] border-almost-black p-6'>
                        <h3 className='font-mono font-bold text-xl uppercase text-almost-black mb-4'>
                            BADGE THRESHOLDS
                        </h3>
                        <div className='space-y-3'>
                            <div className='flex items-center gap-4'>
                                <div className='font-mono font-bold text-lg text-hot-orange min-w-[60px]'>
                                    7.0+
                                </div>
                                <div className='h-[3px] flex-1 bg-chip-yellow'></div>
                                <div className='font-mono font-bold uppercase tracking-wider text-sm'>
                                    SEISMIC SNACK
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='font-mono font-bold text-lg text-hot-orange min-w-[60px]'>
                                    8.0+
                                </div>
                                <div className='h-[3px] flex-1 bg-hot-orange'></div>
                                <div className='font-mono font-bold uppercase tracking-wider text-sm'>
                                    TECTONIC CRUNCH
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='font-mono font-bold text-lg text-hot-orange min-w-[60px]'>
                                    9.0+
                                </div>
                                <div className='h-[3px] flex-1 bg-almost-black'></div>
                                <div className='font-mono font-bold uppercase tracking-wider text-sm'>
                                    EPICENTER ELITE
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='font-mono font-bold text-lg text-hot-orange min-w-[60px]'>
                                    10.0
                                </div>
                                <div className='h-[3px] flex-1 bg-linear-to-r from-hot-orange to-chip-yellow'></div>
                                <div className='font-mono font-bold uppercase tracking-wider text-sm'>
                                    OFF THE CHIPTER
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Statistical Reality */}
                    <div className='bg-warm-white border-[3px] border-almost-black p-6'>
                        <h3 className='font-mono font-bold text-xl uppercase text-almost-black mb-4'>
                            STATISTICAL REALITY
                        </h3>
                        <div className='space-y-3'>
                            <div className='flex justify-between items-center'>
                                <span className='font-mono font-bold text-sm uppercase'>
                                    AVERAGE CHIP
                                </span>
                                <span className='font-mono font-extrabold text-lg text-hot-orange'>
                                    5.8
                                </span>
                            </div>
                            <div className='flex justify-between items-center'>
                                <span className='font-mono font-bold text-sm uppercase'>
                                    CHIPS ABOVE 7.0
                                </span>
                                <span className='font-mono font-extrabold text-lg text-almost-black'>
                                    23%
                                </span>
                            </div>
                            <div className='flex justify-between items-center'>
                                <span className='font-mono font-bold text-sm uppercase'>
                                    CHIPS ABOVE 8.0
                                </span>
                                <span className='font-mono font-extrabold text-lg text-almost-black'>
                                    12%
                                </span>
                            </div>
                            <div className='flex justify-between items-center'>
                                <span className='font-mono font-bold text-sm uppercase'>
                                    CHIPS ABOVE 9.0
                                </span>
                                <span className='font-mono font-extrabold text-lg text-almost-black'>
                                    2%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Score Calculation Example */}
                <div className='mt-6 bg-almost-black text-warm-white border-[3px] border-almost-black p-6'>
                    <h3 className='font-mono font-bold text-xl uppercase mb-4'>
                        HOW WE CALCULATE
                    </h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div>
                            <p className='font-mono text-sm uppercase tracking-wider mb-3 text-chip-yellow'>
                                EXAMPLE: DORITOS BLAZE
                            </p>
                            <div className='space-y-1 font-mono text-sm'>
                                <div className='flex justify-between'>
                                    <span>CRUNCH</span>
                                    <span className='text-hot-orange'>8.5</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span>FLAVOR</span>
                                    <span className='text-hot-orange'>8.3</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span>AFTERTASTE</span>
                                    <span className='text-hot-orange'>8.2</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span>SEASONING</span>
                                    <span className='text-hot-orange'>8.6</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span>BAG RATIO</span>
                                    <span className='text-hot-orange'>8.4</span>
                                </div>
                                <div className='border-t-[3px] border-chip-yellow mt-2 pt-2 flex justify-between font-bold'>
                                    <span>OVERALL</span>
                                    <span className='text-chip-yellow'>
                                        8.4
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <p className='font-serif italic text-lg text-center'>
                                &ldquo;Five metrics. Equal weight. No
                                mercy.&rdquo;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
