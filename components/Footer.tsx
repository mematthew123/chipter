import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='bg-almost-black text-warm-white border-t-[3px] border-almost-black'>
            <div className='max-w-7xl mx-auto px-4 py-8'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                    {/* About */}
                    <div>
                        <h3 className='font-mono font-bold uppercase tracking-wider text-sm mb-4'>
                            ABOUT CHIPTER
                        </h3>
                        <p className='font-sans text-sm text-warm-white/80 mb-4'>
                            Professional chip criticism since 2025. We rate
                            chips on a seismic scale because snacks deserve
                            scrutiny.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className='font-mono font-bold uppercase tracking-wider text-sm mb-4'>
                            QUICK LINKS
                        </h3>
                        <ul className='space-y-2'>
                            <li>
                                <Link
                                    href='/reviews'
                                    className='font-sans text-sm text-warm-white/80 hover:text-hot-orange transition-colors'
                                >
                                    All Reviews
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/badges'
                                    className='font-sans text-sm text-warm-white/80 hover:text-hot-orange transition-colors'
                                >
                                    Badge Gallery
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/methodology'
                                    className='font-sans text-sm text-warm-white/80 hover:text-hot-orange transition-colors'
                                >
                                    Review Methodology
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/submit'
                                    className='font-sans text-sm text-warm-white/80 hover:text-hot-orange transition-colors'
                                >
                                    Submit a Chip
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className='font-mono font-bold uppercase tracking-wider text-sm mb-4'>
                            CONTACT
                        </h3>
                        <p className='font-sans text-sm text-warm-white/80 mb-2'>
                            complaints@chipter.scale
                        </p>
                        <p className='font-sans text-sm text-warm-white/80'>
                            praise@chipter.scale
                        </p>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className='font-mono font-bold uppercase tracking-wider text-sm mb-4'>
                            CHIP ALERTS
                        </h3>
                        <p className='font-sans text-sm text-warm-white/80 mb-4'>
                            Get notified when a chip reaches seismic levels.
                        </p>
                        <form className='flex flex-col gap-2'>
                            <input
                                type='email'
                                placeholder='your@email.com'
                                className='px-3 py-2 border-[3px] border-warm-white bg-almost-black text-warm-white placeholder-warm-white/50 font-sans text-sm focus:outline-none focus:border-hot-orange transition-colors'
                            />
                            <button
                                type='submit'
                                className='font-mono font-bold uppercase tracking-wide px-4 py-2 bg-hot-orange text-warm-white border-[3px] border-hot-orange hover:bg-warm-white hover:text-almost-black hover:border-warm-white transition-all duration-200'
                            >
                                SUBSCRIBE
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='border-t-[3px] border-warm-white/20 mt-8 pt-6'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                        <div className='font-mono text-xs uppercase tracking-wider text-warm-white/60'>
                            © 2025 CHIPTER. ALL CHIPS RESERVED.
                        </div>
                        <div className='flex gap-6'>
                            <Link
                                href='/privacy'
                                className='font-mono text-xs uppercase tracking-wider text-warm-white/60 hover:text-hot-orange transition-colors'
                            >
                                PRIVACY
                            </Link>
                            <Link
                                href='/terms'
                                className='font-mono text-xs uppercase tracking-wider text-warm-white/60 hover:text-hot-orange transition-colors'
                            >
                                TERMS
                            </Link>
                            <Link
                                href='/sitemap'
                                className='font-mono text-xs uppercase tracking-wider text-warm-white/60 hover:text-hot-orange transition-colors'
                            >
                                SITEMAP
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
