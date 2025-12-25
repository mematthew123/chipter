'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-warm-white border-b-[3px] border-almost-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-mono text-2xl font-extrabold uppercase tracking-tight text-almost-black hover:text-hot-orange transition-colors duration-200"
          >
            CHIPTER
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/reviews"
              className="font-mono font-bold uppercase tracking-wide text-almost-black hover:text-hot-orange transition-colors duration-200"
            >
              REVIEWS
            </Link>
            <Link
              href="/badges"
              className="font-mono font-bold uppercase tracking-wide text-almost-black hover:text-hot-orange transition-colors duration-200"
            >
              BADGES
            </Link>
            <Link
              href="/about"
              className="font-mono font-bold uppercase tracking-wide text-almost-black hover:text-hot-orange transition-colors duration-200"
            >
              ABOUT
            </Link>
            <Link
              href="/submit"
              className="font-mono font-bold uppercase tracking-wide px-4 py-2 bg-hot-orange text-warm-white border-[3px] border-almost-black hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_var(--almost-black)] transition-all duration-200"
            >
              SUBMIT
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-almost-black hover:text-hot-orange transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-[3px] w-full bg-current transform transition-all duration-200 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-[3px] w-full bg-current transition-all duration-200 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-[3px] w-full bg-current transform transition-all duration-200 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden border-t-[3px] border-almost-black bg-warm-white transition-all duration-300 ${mobileMenuOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
        <nav className="px-4 py-4 flex flex-col gap-4">
          <Link
            href="/reviews"
            className="font-mono font-bold uppercase tracking-wide text-almost-black hover:text-hot-orange transition-colors duration-200 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            REVIEWS
          </Link>
          <Link
            href="/badges"
            className="font-mono font-bold uppercase tracking-wide text-almost-black hover:text-hot-orange transition-colors duration-200 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            BADGES
          </Link>
          <Link
            href="/about"
            className="font-mono font-bold uppercase tracking-wide text-almost-black hover:text-hot-orange transition-colors duration-200 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            href="/submit"
            className="font-mono font-bold uppercase tracking-wide px-4 py-3 bg-hot-orange text-warm-white border-[3px] border-almost-black text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            SUBMIT
          </Link>
        </nav>
      </div>
    </header>
  );
}