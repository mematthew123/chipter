'use client';

import Link from 'next/link';
import { useState, FormEvent } from 'react';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<
        'idle' | 'loading' | 'success' | 'error'
    >('idle');
    const [message, setMessage] = useState('');

    const handleNewsletterSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            setStatus('success');
            setMessage('Welcome aboard. Check your email.');
            setEmail('');

            // Reset success message after 5 seconds
            setTimeout(() => {
                setStatus('idle');
                setMessage('');
            }, 5000);
        } catch (error) {
            setStatus('error');
            setMessage(
                error instanceof Error ? error.message : 'Failed to subscribe',
            );

            // Reset error message after 5 seconds
            setTimeout(() => {
                setStatus('idle');
                setMessage('');
            }, 5000);
        }
    };

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
                            Professional chip criticism since 2024. We rate
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
                        <form
                            onSubmit={handleNewsletterSubmit}
                            className='flex flex-col gap-2'
                        >
                            <input
                                type='email'
                                placeholder='your@email.com'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={status === 'loading'}
                                className='px-3 py-2 border-[3px] border-warm-white bg-almost-black text-warm-white placeholder-warm-white/50 font-sans text-sm focus:outline-none focus:border-hot-orange transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                            />
                            <button
                                type='submit'
                                disabled={status === 'loading'}
                                className='font-mono font-bold uppercase tracking-wide px-4 py-2 bg-hot-orange text-warm-white border-[3px] border-hot-orange hover:bg-warm-white hover:text-almost-black hover:border-warm-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
                            >
                                {status === 'loading'
                                    ? 'SUBSCRIBING...'
                                    : 'SUBSCRIBE'}
                            </button>
                        </form>

                        {/* Status Message */}
                        {message && (
                            <div
                                className={`mt-2 font-mono text-xs uppercase ${
                                    status === 'success'
                                        ? 'text-chip-yellow'
                                        : status === 'error'
                                        ? 'text-hot-orange'
                                        : 'text-warm-white/60'
                                }`}
                            >
                                {message}
                            </div>
                        )}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='border-t-[3px] border-warm-white/20 mt-8 pt-6'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                        <div className='font-mono text-xs uppercase tracking-wider text-warm-white/60'>
                            © 2024 CHIPTER. ALL CHIPS RESERVED.
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
