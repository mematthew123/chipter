'use client';

import { useState, FormEvent } from 'react';

export default function SubmitChip() {
    const [formData, setFormData] = useState({
        chipName: '',
        brand: '',
        reason: '',
        email: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            const response = await fetch('/api/submit-chip', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to submit chip');
            }

            // Success
            setSubmitStatus({
                type: 'success',
                message: data.message || 'Chip submitted for review. We take our responsibility seriously.',
            });
            // Reset form
            setFormData({ chipName: '', brand: '', reason: '', email: '' });
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus({
                type: 'error',
                message: error instanceof Error ? error.message : 'Failed to submit. Please try again.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className='py-16 px-4 bg-chip-yellow'>
            <div className='max-w-3xl mx-auto'>
                <div className='bg-warm-white border-[3px] border-almost-black p-8'>
                    <h2 className='font-mono font-extrabold text-3xl md:text-4xl uppercase text-almost-black mb-4 text-center'>
                        MISSING YOUR FAVORITE CHIP?
                    </h2>

                    <p className='font-sans text-lg text-almost-black mb-8 text-center'>
                        Submit it for review on the Chipter Scale. We&apos;ll
                        put it through rigorous testing.
                    </p>

                    {/* Status Messages */}
                    {submitStatus.type && (
                        <div
                            className={`mb-6 border-[3px] border-almost-black p-4 ${
                                submitStatus.type === 'success'
                                    ? 'bg-fresh-green'
                                    : 'bg-hot-orange'
                            }`}
                        >
                            <p
                                className={`font-mono font-bold text-sm uppercase ${
                                    submitStatus.type === 'success'
                                        ? 'text-almost-black'
                                        : 'text-warm-white'
                                }`}
                            >
                                {submitStatus.message}
                            </p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className='space-y-6'>
                        {/* Chip Name */}
                        <div>
                            <label
                                htmlFor='chipName'
                                className='block font-mono font-bold text-sm uppercase tracking-wider text-almost-black mb-2'
                            >
                                CHIP NAME *
                            </label>
                            <input
                                type='text'
                                id='chipName'
                                required
                                disabled={isSubmitting}
                                value={formData.chipName}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        chipName: e.target.value,
                                    })
                                }
                                className='w-full px-4 py-3 border-[3px] border-almost-black bg-warm-white font-sans text-almost-black placeholder-gray focus:outline-none focus:ring-[3px] focus:ring-hot-orange focus:ring-offset-2 disabled:opacity-50'
                                placeholder='e.g., Cool Ranch'
                            />
                        </div>

                        {/* Brand */}
                        <div>
                            <label
                                htmlFor='brand'
                                className='block font-mono font-bold text-sm uppercase tracking-wider text-almost-black mb-2'
                            >
                                BRAND *
                            </label>
                            <input
                                type='text'
                                id='brand'
                                required
                                disabled={isSubmitting}
                                value={formData.brand}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        brand: e.target.value,
                                    })
                                }
                                className='w-full px-4 py-3 border-[3px] border-almost-black bg-warm-white font-sans text-almost-black placeholder-gray focus:outline-none focus:ring-[3px] focus:ring-hot-orange focus:ring-offset-2 disabled:opacity-50'
                                placeholder='e.g., Doritos'
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor='email'
                                className='block font-mono font-bold text-sm uppercase tracking-wider text-almost-black mb-2'
                            >
                                YOUR EMAIL *
                            </label>
                            <input
                                type='email'
                                id='email'
                                required
                                disabled={isSubmitting}
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                                className='w-full px-4 py-3 border-[3px] border-almost-black bg-warm-white font-sans text-almost-black placeholder-gray focus:outline-none focus:ring-[3px] focus:ring-hot-orange focus:ring-offset-2 disabled:opacity-50'
                                placeholder='you@example.com'
                            />
                        </div>

                        {/* Reason */}
                        <div>
                            <label
                                htmlFor='reason'
                                className='block font-mono font-bold text-sm uppercase tracking-wider text-almost-black mb-2'
                            >
                                WHY SHOULD WE REVIEW IT?
                            </label>
                            <textarea
                                id='reason'
                                rows={4}
                                disabled={isSubmitting}
                                value={formData.reason}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        reason: e.target.value,
                                    })
                                }
                                className='w-full px-4 py-3 border-[3px] border-almost-black bg-warm-white font-sans text-almost-black placeholder-gray focus:outline-none focus:ring-[3px] focus:ring-hot-orange focus:ring-offset-2 resize-none disabled:opacity-50'
                                placeholder='Make your case. Be compelling.'
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type='submit'
                            disabled={isSubmitting}
                            className='w-full md:w-auto font-mono font-bold uppercase tracking-wide px-8 py-4 bg-hot-orange text-warm-white border-[3px] border-almost-black hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0_var(--almost-black)] transition-all duration-200 disabled:opacity-50 disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-none'
                        >
                            {isSubmitting ? 'SUBMITTING...' : 'SUBMIT FOR REVIEW'}
                        </button>
                    </form>

                    <p className='font-serif italic text-sm text-gray mt-6'>
                        * We reserve the right to ignore submissions that bore
                        us.
                    </p>
                </div>
            </div>
        </section>
    );
}
