'use client';

import { useState, FormEvent } from 'react';

export default function SubmitChip() {
  const [formData, setFormData] = useState({
    chipName: '',
    brand: '',
    reason: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // For now, just log the submission
    console.log('Chip submission:', formData);
    // Reset form
    setFormData({ chipName: '', brand: '', reason: '' });
    alert('Chip submitted for review. We take our responsibility seriously.');
  };

  return (
    <section className="py-16 px-4 bg-chip-yellow">
      <div className="max-w-3xl mx-auto">
        <div className="bg-warm-white border-[3px] border-almost-black p-8">
          <h2 className="font-mono font-extrabold text-3xl md:text-4xl uppercase text-almost-black mb-4 text-center">
            MISSING YOUR FAVORITE CHIP?
          </h2>

          <p className="font-sans text-lg text-almost-black mb-8 text-center">
            Submit it for review on the Chipter Scale. We&apos;ll put it through rigorous testing.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Chip Name */}
            <div>
              <label
                htmlFor="chipName"
                className="block font-mono font-bold text-sm uppercase tracking-wider text-almost-black mb-2"
              >
                CHIP NAME *
              </label>
              <input
                type="text"
                id="chipName"
                required
                value={formData.chipName}
                onChange={(e) => setFormData({ ...formData, chipName: e.target.value })}
                className="w-full px-4 py-3 border-[3px] border-almost-black bg-warm-white font-sans text-almost-black placeholder-gray focus:outline-none focus:ring-[3px] focus:ring-hot-orange focus:ring-offset-2"
                placeholder="e.g., Cool Ranch"
              />
            </div>

            {/* Brand */}
            <div>
              <label
                htmlFor="brand"
                className="block font-mono font-bold text-sm uppercase tracking-wider text-almost-black mb-2"
              >
                BRAND *
              </label>
              <input
                type="text"
                id="brand"
                required
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                className="w-full px-4 py-3 border-[3px] border-almost-black bg-warm-white font-sans text-almost-black placeholder-gray focus:outline-none focus:ring-[3px] focus:ring-hot-orange focus:ring-offset-2"
                placeholder="e.g., Doritos"
              />
            </div>

            {/* Reason */}
            <div>
              <label
                htmlFor="reason"
                className="block font-mono font-bold text-sm uppercase tracking-wider text-almost-black mb-2"
              >
                WHY SHOULD WE REVIEW IT?
              </label>
              <textarea
                id="reason"
                rows={4}
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                className="w-full px-4 py-3 border-[3px] border-almost-black bg-warm-white font-sans text-almost-black placeholder-gray focus:outline-none focus:ring-[3px] focus:ring-hot-orange focus:ring-offset-2 resize-none"
                placeholder="Make your case. Be compelling."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full md:w-auto font-mono font-bold uppercase tracking-wide px-8 py-4 bg-hot-orange text-warm-white border-[3px] border-almost-black hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0_var(--almost-black)] transition-all duration-200"
            >
              SUBMIT FOR REVIEW
            </button>
          </form>

          <p className="font-serif italic text-sm text-gray mt-6">
            * We reserve the right to ignore submissions that bore us.
          </p>
        </div>
      </div>
    </section>
  );
}