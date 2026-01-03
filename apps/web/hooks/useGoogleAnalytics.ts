'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
    interface Window {
        gtag: (
            type: string,
            eventName: string,
            parameters?: Record<string, any>
        ) => void;
    }
}

const GA_MEASUREMENT_ID = 'G-DG0ZZQD92G';

// Track page views on route changes
export function usePageViews() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (typeof window.gtag !== 'undefined') {
            const url = pathname + (searchParams ? '?' + searchParams : '');
            window.gtag('config', GA_MEASUREMENT_ID, {
                page_path: url,
            });
        }
    }, [pathname, searchParams]);
}

// Track custom events
export function trackEvent(
    action: string,
    category: string,
    label?: string,
    value?: number
) {
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
}

// Common event tracking functions
export const gaEvents = {
    // Newsletter events
    newsletterSignup: (location: string) => {
        trackEvent('newsletter_signup', 'engagement', location);
    },

    // Chip submission events
    chipSubmission: () => {
        trackEvent('chip_submission', 'engagement');
    },

    // Review interactions
    reviewClick: (chipName: string, score: number) => {
        trackEvent('review_click', 'engagement', chipName, score);
    },

    // Social sharing
    share: (platform: string, chipName?: string) => {
        trackEvent('share', 'social', `${platform}_${chipName || 'general'}`);
    },

    // Navigation events
    navClick: (item: string) => {
        trackEvent('navigation_click', 'navigation', item);
    },

    // Scale interaction
    scaleInteraction: () => {
        trackEvent('scale_interaction', 'engagement');
    },
};