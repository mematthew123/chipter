import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex flex-col justify-center items-center px-4 py-16 bg-warm-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, var(--almost-black) 0px, var(--almost-black) 3px, transparent 3px, transparent 60px),
                           repeating-linear-gradient(90deg, var(--almost-black) 0px, var(--almost-black) 3px, transparent 3px, transparent 60px)`
        }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="font-mono font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-almost-black mb-6">
          THE SEISMIC SCALE
          <span className="block text-hot-orange">FOR SNACKS</span>
        </h1>

        {/* Tagline */}
        <p className="font-serif italic text-xl md:text-2xl text-almost-black mb-4">
          Rating chips so you don&apos;t have to guess.
        </p>

        {/* One-liner */}
        <p className="font-serif italic text-lg text-gray mb-12">
          Professional chip criticism. Seriously.
        </p>

        {/* CTA Button */}
        <Link
          href="/reviews"
          className="inline-block font-mono font-bold uppercase tracking-wide px-8 py-4 bg-hot-orange text-warm-white border-[3px] border-almost-black text-lg hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0_var(--almost-black)] transition-all duration-200"
        >
          BROWSE REVIEWS
        </Link>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center gap-8">
          <div className="text-center">
            <div className="font-mono font-extrabold text-4xl text-hot-orange">9+</div>
            <div className="font-mono font-bold text-xs uppercase tracking-wider text-almost-black">Reviews</div>
          </div>
          <div className="w-[3px] h-16 bg-almost-black"></div>
          <div className="text-center">
            <div className="font-mono font-extrabold text-4xl text-hot-orange">3</div>
            <div className="font-mono font-bold text-xs uppercase tracking-wider text-almost-black">Badge Tiers</div>
          </div>
          <div className="w-[3px] h-16 bg-almost-black"></div>
          <div className="text-center">
            <div className="font-mono font-extrabold text-4xl text-hot-orange">10.0</div>
            <div className="font-mono font-bold text-xs uppercase tracking-wider text-almost-black">Max Score</div>
          </div>
        </div>
      </div>
    </section>
  );
}