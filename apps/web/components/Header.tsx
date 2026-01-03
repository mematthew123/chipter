'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    UserButton,
    SignedIn,
    SignedOut
} from '@clerk/nextjs';
import { userButtonAppearance } from '@/lib/clerk-appearance';

// Custom page components for UserButton modal
const MyReviewsPage = () => {
    return (
        <div className="p-6 space-y-6">
            <div className="border-b-[3px] border-almost-black pb-4">
                <h2 className="font-mono font-extrabold uppercase text-xl text-almost-black">
                    My Chip Reviews
                </h2>
                <p className="font-mono text-xs text-gray mt-2 uppercase">
                    Your complete snack judgment history
                </p>
            </div>

            <div className="space-y-4">
                <div className="border-[3px] border-almost-black p-4 hover:shadow-[4px_4px_0px_rgba(26,26,26,1)] transition-all">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-mono font-bold uppercase text-sm">Doritos Cool Ranch</h3>
                            <p className="font-serif italic text-sm text-gray mt-1">
                                "Peak artificial flavor engineering."
                            </p>
                        </div>
                        <div className="text-score text-hot-orange">8.5</div>
                    </div>
                    <div className="mt-3 font-mono text-xs text-gray uppercase">
                        Reviewed 3 days ago
                    </div>
                </div>

                <div className="border-[3px] border-almost-black p-4 hover:shadow-[4px_4px_0px_rgba(26,26,26,1)] transition-all">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-mono font-bold uppercase text-sm">Kettle Brand Sea Salt</h3>
                            <p className="font-serif italic text-sm text-gray mt-1">
                                "Structural integrity off the charts."
                            </p>
                        </div>
                        <div className="text-score text-hot-orange">9.0</div>
                    </div>
                    <div className="mt-3 font-mono text-xs text-gray uppercase">
                        Reviewed 1 week ago
                    </div>
                </div>
            </div>

            <button className="button-brutal w-full">
                View All Reviews
            </button>
        </div>
    );
};

const SavedChipsPage = () => {
    return (
        <div className="p-6 space-y-6">
            <div className="border-b-[3px] border-almost-black pb-4">
                <h2 className="font-mono font-extrabold uppercase text-xl text-almost-black">
                    Saved Chips
                </h2>
                <p className="font-mono text-xs text-gray mt-2 uppercase">
                    Your watchlist of chips to try
                </p>
            </div>

            <div className="grid gap-4">
                <div className="card-brutal p-4">
                    <h3 className="font-mono font-bold uppercase text-sm mb-2">Takis Fuego</h3>
                    <p className="font-mono text-xs text-gray mb-3">
                        SUGGESTED BY 47 USERS
                    </p>
                    <button className="button-brutal-small">
                        Remove from List
                    </button>
                </div>

                <div className="card-brutal p-4">
                    <h3 className="font-mono font-bold uppercase text-sm mb-2">Pringles Pizza</h3>
                    <p className="font-mono text-xs text-gray mb-3">
                        TRENDING THIS WEEK
                    </p>
                    <button className="button-brutal-small">
                        Remove from List
                    </button>
                </div>
            </div>
        </div>
    );
};

const ChipPreferencesPage = () => {
    return (
        <div className="p-6 space-y-6">
            <div className="border-b-[3px] border-almost-black pb-4">
                <h2 className="font-mono font-extrabold uppercase text-xl text-almost-black">
                    Chip Preferences
                </h2>
                <p className="font-mono text-xs text-gray mt-2 uppercase">
                    Customize your snack profile
                </p>
            </div>

            <div className="space-y-6">
                <div>
                    <label className="font-mono font-bold uppercase text-xs block mb-3">
                        Preferred Chip Types
                    </label>
                    <div className="space-y-2">
                        {['Potato', 'Corn', 'Tortilla', 'Vegetable', 'Pork Rinds'].map(type => (
                            <label key={type} className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="size-4 border-[3px] border-almost-black accent-hot-orange"
                                />
                                <span className="font-mono text-sm uppercase">{type}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="font-mono font-bold uppercase text-xs block mb-3">
                        Heat Tolerance
                    </label>
                    <select className="w-full border-[3px] border-almost-black p-2 bg-warm-white font-mono text-sm">
                        <option>Mild</option>
                        <option>Medium</option>
                        <option>Hot</option>
                        <option>Volcanic</option>
                    </select>
                </div>

                <button className="button-brutal w-full">
                    Save Preferences
                </button>
            </div>
        </div>
    );
};

const ChipterStatsPage = () => {
    return (
        <div className="p-6 space-y-6">
            <div className="border-b-[3px] border-almost-black pb-4">
                <h2 className="font-mono font-extrabold uppercase text-xl text-almost-black">
                    Your Chipter Stats
                </h2>
                <p className="font-mono text-xs text-gray mt-2 uppercase">
                    Snacking achievements unlocked
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="card-brutal p-4 text-center">
                    <div className="text-3xl font-mono font-extrabold text-hot-orange">23</div>
                    <div className="font-mono text-xs uppercase mt-2">Reviews Written</div>
                </div>

                <div className="card-brutal p-4 text-center">
                    <div className="text-3xl font-mono font-extrabold text-hot-orange">8.2</div>
                    <div className="font-mono text-xs uppercase mt-2">Average Score Given</div>
                </div>

                <div className="card-brutal p-4 text-center">
                    <div className="text-3xl font-mono font-extrabold text-hot-orange">5</div>
                    <div className="font-mono text-xs uppercase mt-2">Elite Badges Awarded</div>
                </div>

                <div className="card-brutal p-4 text-center">
                    <div className="text-3xl font-mono font-extrabold text-hot-orange">142</div>
                    <div className="font-mono text-xs uppercase mt-2">Helpful Votes</div>
                </div>
            </div>

            <div className="border-[3px] border-chip-yellow bg-chip-yellow/20 p-4">
                <h3 className="font-mono font-bold uppercase text-sm mb-2">Achievement Unlocked!</h3>
                <p className="font-mono text-xs">
                    CRUNCH CONNOISSEUR - Reviewed 20+ chips
                </p>
            </div>
        </div>
    );
};

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className='sticky top-0 z-50 bg-warm-white border-b-[3px] border-almost-black'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                    {/* Logo */}
                    <Link
                        href='/'
                        className='font-mono text-2xl font-extrabold uppercase tracking-tight text-almost-black hover:text-hot-orange transition-colors duration-200'
                    >
                        CHIPTER
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className='hidden md:flex items-center gap-8'>
                        <Link
                            href='/reviews'
                            className='font-mono font-bold uppercase tracking-wide text-almost-black hover:text-hot-orange transition-colors duration-200'
                        >
                            REVIEWS
                        </Link>
                        <Link
                            href='/blog'
                            className='font-mono font-bold uppercase tracking-wide text-almost-black hover:text-hot-orange transition-colors duration-200'
                        >
                            NEWS
                        </Link>
                        <Link
                            href='/badges'
                            className='font-mono font-bold uppercase tracking-wide text-almost-black hover:text-hot-orange transition-colors duration-200'
                        >
                            BADGES
                        </Link>
                        <Link
                            href='/about'
                            className='font-mono font-bold uppercase tracking-wide text-almost-black hover:text-hot-orange transition-colors duration-200'
                        >
                            ABOUT
                        </Link>

                        {/* Authentication Buttons */}
                        <SignedOut>
                            <Link
                                href='/sign-in'
                                className='font-mono font-bold uppercase tracking-wide px-4 py-2 bg-hot-orange text-warm-white border-[3px] border-almost-black hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--almost-black)] transition-all duration-200'
                            >
                                SIGN IN
                            </Link>
                        </SignedOut>

                        <SignedIn>
                            <UserButton
                                appearance={userButtonAppearance}
                                userProfileMode="modal"
                            >
                                {/* Custom Chipter pages */}
                                <UserButton.UserProfilePage
                                    label="My Reviews"
                                    labelIcon={<span className="text-sm">📝</span>}
                                    url="my-reviews"
                                >
                                    <MyReviewsPage />
                                </UserButton.UserProfilePage>

                                <UserButton.UserProfilePage
                                    label="Saved Chips"
                                    labelIcon={<span className="text-sm">🔖</span>}
                                    url="saved-chips"
                                >
                                    <SavedChipsPage />
                                </UserButton.UserProfilePage>

                                <UserButton.UserProfilePage
                                    label="Preferences"
                                    labelIcon={<span className="text-sm">⚙️</span>}
                                    url="preferences"
                                >
                                    <ChipPreferencesPage />
                                </UserButton.UserProfilePage>

                                <UserButton.UserProfilePage
                                    label="Stats"
                                    labelIcon={<span className="text-sm">📊</span>}
                                    url="stats"
                                >
                                    <ChipterStatsPage />
                                </UserButton.UserProfilePage>

                                {/* External link */}
                                <UserButton.UserProfileLink
                                    label="Submit a Chip"
                                    labelIcon={<span className="text-sm">➕</span>}
                                    url="/submit"
                                />

                                {/* Reorder default pages to appear last */}
                                <UserButton.UserProfilePage label="account" />
                                <UserButton.UserProfilePage label="security" />
                            </UserButton>
                        </SignedIn>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className='md:hidden p-2 text-almost-black hover:text-hot-orange transition-colors duration-200'
                        aria-label='Toggle menu'
                    >
                        <div className='w-6 h-5 flex flex-col justify-between'>
                            <span
                                className={`block h-0.75 w-full bg-current transform transition-all duration-200 ${
                                    mobileMenuOpen
                                        ? 'rotate-45 translate-y-2'
                                        : ''
                                }`}
                            ></span>
                            <span
                                className={`block h-0.75 w-full bg-current transition-all duration-200 ${
                                    mobileMenuOpen ? 'opacity-0' : ''
                                }`}
                            ></span>
                            <span
                                className={`block h-0.75 w-full bg-current transform transition-all duration-200 ${
                                    mobileMenuOpen
                                        ? '-rotate-45 -translate-y-2'
                                        : ''
                                }`}
                            ></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden border-t-[3px] border-almost-black bg-warm-white transition-all duration-300 ${
                    mobileMenuOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'
                }`}
            >
                <nav className='px-4 py-4 flex flex-col gap-4'>
                    <Link
                        href='/reviews'
                        className='font-mono font-bold uppercase tracking-wide text-almost-black hover:text-hot-orange transition-colors duration-200 py-2'
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        REVIEWS
                    </Link>
                    <Link
                        href='/blog'
                        className='font-mono font-bold uppercase tracking-wide text-almost-black hover:text-hot-orange transition-colors duration-200 py-2'
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        NEWS
                    </Link>
                    <Link
                        href='/badges'
                        className='font-mono font-bold uppercase tracking-wide text-almost-black hover:text-hot-orange transition-colors duration-200 py-2'
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        BADGES
                    </Link>
                    <Link
                        href='/about'
                        className='font-mono font-bold uppercase tracking-wide text-almost-black hover:text-hot-orange transition-colors duration-200 py-2'
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        ABOUT
                    </Link>

                    {/* Authentication Buttons - Mobile */}
                    <SignedOut>
                        <Link
                            href='/sign-in'
                            className='font-mono font-bold uppercase tracking-wide px-4 py-3 bg-hot-orange text-warm-white border-[3px] border-almost-black text-center block'
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            SIGN IN
                        </Link>
                    </SignedOut>

                    <SignedIn>
                        <div className='flex items-center justify-center py-2'>
                            <UserButton
                                appearance={userButtonAppearance}
                                userProfileMode="modal"
                            >
                                {/* Custom Chipter pages - same as desktop */}
                                <UserButton.UserProfilePage
                                    label="My Reviews"
                                    labelIcon={<span className="text-sm">📝</span>}
                                    url="my-reviews"
                                >
                                    <MyReviewsPage />
                                </UserButton.UserProfilePage>

                                <UserButton.UserProfilePage
                                    label="Saved Chips"
                                    labelIcon={<span className="text-sm">🔖</span>}
                                    url="saved-chips"
                                >
                                    <SavedChipsPage />
                                </UserButton.UserProfilePage>

                                <UserButton.UserProfilePage
                                    label="Preferences"
                                    labelIcon={<span className="text-sm">⚙️</span>}
                                    url="preferences"
                                >
                                    <ChipPreferencesPage />
                                </UserButton.UserProfilePage>

                                <UserButton.UserProfilePage
                                    label="Stats"
                                    labelIcon={<span className="text-sm">📊</span>}
                                    url="stats"
                                >
                                    <ChipterStatsPage />
                                </UserButton.UserProfilePage>

                                <UserButton.UserProfileLink
                                    label="Submit a Chip"
                                    labelIcon={<span className="text-sm">➕</span>}
                                    url="/submit"
                                />

                                <UserButton.UserProfilePage label="account" />
                                <UserButton.UserProfilePage label="security" />
                            </UserButton>
                        </div>
                    </SignedIn>
                </nav>
            </div>
        </header>
    );
}
