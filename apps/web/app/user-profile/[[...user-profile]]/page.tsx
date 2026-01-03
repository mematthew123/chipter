'use client';

import { UserProfile } from '@clerk/nextjs';
import { userButtonAppearance } from '@/lib/clerk-appearance';

// Custom page components for UserProfile
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
                {/* Sample review cards */}
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

                <div>
                    <label className="font-mono font-bold uppercase text-xs block mb-3">
                        Review Notifications
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            className="size-4 border-[3px] border-almost-black accent-hot-orange"
                        />
                        <span className="font-mono text-sm">
                            Email me when new chips match my preferences
                        </span>
                    </label>
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

export default function UserProfilePage() {
    return (
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-12 bg-warm-white">
            <div className="w-full max-w-5xl">
                {/* Page header */}
                <div className="mb-8 text-center">
                    <h1 className="text-headline text-almost-black uppercase tracking-tight mb-2">
                        Your Profile
                    </h1>
                    <p className="font-serif italic text-lg text-gray">
                        "Every critic needs a headquarters."
                    </p>
                </div>

                {/* UserProfile with custom pages */}
                <div className="card-brutal bg-warm-white">
                    <UserProfile
                        appearance={userButtonAppearance}
                        routing="path"
                        path="/user-profile"
                    >
                        {/* Custom Chipter pages */}
                        <UserProfile.Page
                            label="My Reviews"
                            labelIcon={<span className="text-sm">📝</span>}
                            url="my-reviews"
                        >
                            <MyReviewsPage />
                        </UserProfile.Page>

                        <UserProfile.Page
                            label="Saved Chips"
                            labelIcon={<span className="text-sm">🔖</span>}
                            url="saved-chips"
                        >
                            <SavedChipsPage />
                        </UserProfile.Page>

                        <UserProfile.Page
                            label="Preferences"
                            labelIcon={<span className="text-sm">⚙️</span>}
                            url="preferences"
                        >
                            <ChipPreferencesPage />
                        </UserProfile.Page>

                        <UserProfile.Page
                            label="Stats"
                            labelIcon={<span className="text-sm">📊</span>}
                            url="stats"
                        >
                            <ChipterStatsPage />
                        </UserProfile.Page>

                        {/* External link */}
                        <UserProfile.Link
                            label="Submit a Chip"
                            labelIcon={<span className="text-sm">➕</span>}
                            url="/submit"
                        />

                        {/* Reorder default pages */}
                        <UserProfile.Page label="account" />
                        <UserProfile.Page label="security" />
                    </UserProfile>
                </div>
            </div>
        </div>
    );
}