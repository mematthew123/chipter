/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About | Chipter',
    description: 'The seismic authority on potato chip excellence. We measure chips on the Chipter Scale.',
};

export default function AboutPage() {
    return (
        <div className='w-full'>
            <div className='max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8'>
                {/* Hero Section */}
                <section className='mb-20'>
                    <h1 className='font-mono text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tighter text-almost-black mb-8'>
                        ABOUT
                        <span className='block text-hot-orange'>CHIPTER</span>
                    </h1>
                    <p className='font-serif italic text-xl md:text-2xl text-almost-black max-w-3xl'>
                        &quot;The world needed a seismic authority on chips. We answered.&quot;
                    </p>
                </section>

                {/* Mission Section */}
                <section className='mb-20'>
                    <div className='border-[3px] border-almost-black bg-warm-white p-8 md:p-12'>
                        <h2 className='font-mono text-2xl font-bold uppercase tracking-wide text-almost-black mb-6'>
                            OUR MISSION
                        </h2>
                        <div className='space-y-4 text-lg leading-7'>
                            <p>
                                We eat chips so you don&apos;t have to eat bad ones. Every bag undergoes rigorous scientific evaluation. No chip escapes our scrutiny.
                            </p>
                            <p>
                                Since 2026, we&apos;ve been quantifying what others call subjective. Crunch can be measured. Flavor has metrics. Even disappointment has a number.
                            </p>
                            <p className='font-serif italic text-xl mt-6'>
                                &quot;We take chips seriously because someone has to.&quot;
                            </p>
                        </div>
                    </div>
                </section>

                {/* The Chipter Scale */}
                <section className='mb-20'>
                    <h2 className='font-mono text-3xl font-bold uppercase tracking-tight text-almost-black mb-10'>
                        THE CHIPTER SCALE
                    </h2>
                    <div className='grid gap-4'>
                        <div className='border-[3px] border-almost-black p-6'>
                            <div className='flex items-baseline gap-4 mb-4'>
                                <span className='font-mono text-4xl font-extrabold text-chip-yellow'>1.0-6.9</span>
                                <span className='font-mono text-xl font-bold uppercase tracking-wide'>TREMOR</span>
                            </div>
                            <p className='text-lg'>
                                Barely registers. These chips exist only to disappoint. We&apos;ve eaten them so you know to avoid them.
                            </p>
                        </div>

                        <div className='border-[3px] border-almost-black bg-chip-yellow p-6'>
                            <div className='flex items-baseline gap-4 mb-4'>
                                <span className='font-mono text-4xl font-extrabold text-almost-black'>7.0-7.9</span>
                                <span className='font-mono text-xl font-bold uppercase tracking-wide'>SEISMIC SNACK</span>
                            </div>
                            <p className='text-lg text-almost-black'>
                                Finally, a chip worth discussing. These earn our first badge of recognition. Your taste buds will notice.
                            </p>
                        </div>

                        <div className='border-[3px] border-almost-black bg-hot-orange p-6'>
                            <div className='flex items-baseline gap-4 mb-4'>
                                <span className='font-mono text-4xl font-extrabold text-warm-white'>8.0-8.9</span>
                                <span className='font-mono text-xl font-bold uppercase tracking-wide text-warm-white'>TECTONIC CRUNCH</span>
                            </div>
                            <p className='text-lg text-warm-white'>
                                These chips shift paradigms. They command respect. You&apos;ll remember where you were when you first tried one.
                            </p>
                        </div>

                        <div className='border-[3px] border-hot-orange bg-almost-black p-6'>
                            <div className='flex items-baseline gap-4 mb-4'>
                                <span className='font-mono text-4xl font-extrabold text-hot-orange'>9.0-9.9</span>
                                <span className='font-mono text-xl font-bold uppercase tracking-wide text-hot-orange'>EPICENTER ELITE</span>
                            </div>
                            <p className='text-lg text-warm-white'>
                                Approaching perfection. These chips redefine the category. Other chips orbit around them.
                            </p>
                        </div>

                        <div className='border-[3px] border-almost-black bg-warm-white p-6'>
                            <div className='flex items-baseline gap-4 mb-4'>
                                <span className='font-mono text-4xl font-extrabold text-hot-orange animate-pulse'>10.0</span>
                                <span className='font-mono text-xl font-bold uppercase tracking-wide'>OFF THE CHIPTER</span>
                            </div>
                            <p className='text-lg'>
                                Theoretical. Perhaps impossible. We've never awarded this score. We're still looking.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Methodology */}
                <section className='mb-20'>
                    <h2 className='font-mono text-3xl font-bold uppercase tracking-tight text-almost-black mb-10'>
                        METHODOLOGY
                    </h2>
                    <div className='grid md:grid-cols-2 gap-6'>
                        <div className='border-[3px] border-almost-black p-6'>
                            <h3 className='font-mono text-lg font-bold uppercase tracking-widest text-hot-orange mb-3'>
                                CRUNCH
                            </h3>
                            <p>Measured in decibels and structural integrity over time. We have equipment.</p>
                        </div>

                        <div className='border-[3px] border-almost-black p-6'>
                            <h3 className='font-mono text-lg font-bold uppercase tracking-widest text-hot-orange mb-3'>
                                FLAVOR INTENSITY
                            </h3>
                            <p>From whisper to scream. We document the journey.</p>
                        </div>

                        <div className='border-[3px] border-almost-black p-6'>
                            <h3 className='font-mono text-lg font-bold uppercase tracking-widest text-hot-orange mb-3'>
                                AFTERTASTE
                            </h3>
                            <p>What lingers when the crunch fades. For better or worse.</p>
                        </div>

                        <div className='border-[3px] border-almost-black p-6'>
                            <h3 className='font-mono text-lg font-bold uppercase tracking-widest text-hot-orange mb-3'>
                                SEASONING DISTRIBUTION
                            </h3>
                            <p>Democracy matters. Every chip deserves equal flavor opportunity.</p>
                        </div>

                        <div className='border-[3px] border-almost-black p-6'>
                            <h3 className='font-mono text-lg font-bold uppercase tracking-widest text-hot-orange mb-3'>
                                BAG-TO-CHIP RATIO
                            </h3>
                            <p>We measure the air. We count the chips. Math doesn't lie.</p>
                        </div>

                        <div className='border-[3px] border-almost-black p-6'>
                            <h3 className='font-mono text-lg font-bold uppercase tracking-widest text-hot-orange mb-3'>
                                STRUCTURAL INTEGRITY
                            </h3>
                            <p>Can it survive a dip? Support toppings? We test limits.</p>
                        </div>
                    </div>
                </section>

                {/* The Team */}
                <section className='mb-20'>
                    <h2 className='font-mono text-3xl font-bold uppercase tracking-tight text-almost-black mb-10'>
                        THE REVIEWERS
                    </h2>
                    <div className='border-[3px] border-almost-black bg-almost-black p-8 md:p-12'>
                        <p className='text-warm-white text-lg mb-6'>
                            Our reviewers remain anonymous. Not for mystery. For integrity.
                        </p>
                        <p className='text-warm-white text-lg mb-6'>
                            Combined chip consumption: 47,000+ bags<br />
                            Countries represented: 12<br />
                            Favorite chip: Still searching<br />
                            Least favorite chip: We don't speak of it
                        </p>
                        <p className='font-serif italic text-xl text-hot-orange'>
                            "We are united by crunch."
                        </p>
                    </div>
                </section>

                {/* Submit Section */}
                <section className='mb-20'>
                    <div className='border-[3px] border-almost-black bg-chip-yellow p-8 md:p-12'>
                        <h2 className='font-mono text-3xl font-bold uppercase tracking-tight text-almost-black mb-6'>
                            SUBMIT A CHIP
                        </h2>
                        <p className='text-lg text-almost-black mb-8'>
                            Found a chip worthy of evaluation? Discovered an abomination that needs documenting? We accept all challenges.
                        </p>
                        <a
                            href='/submit'
                            className='inline-block font-mono font-bold uppercase tracking-wide px-6 py-3 bg-almost-black text-chip-yellow border-[3px] border-almost-black hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[6px_6px_0_var(--almost-black)] transition-all duration-200'
                        >
                            SUBMIT FOR REVIEW
                        </a>
                    </div>
                </section>

                {/* Contact */}
                <section className='border-t-[3px] border-almost-black pt-12'>
                    <h2 className='font-mono text-2xl font-bold uppercase tracking-wide text-almost-black mb-6'>
                        CONTACT
                    </h2>
                    <div className='space-y-4 text-lg'>
                        <p>
                            Press inquiries: We don't do interviews.<br />
                            Sponsorships: Our integrity is not for sale.<br />
                            Complaints: Save them for bad chips.
                        </p>
                        <p className='font-serif italic text-xl text-hot-orange'>
                            "We'll find you through the chips."
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}