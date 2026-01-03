'use client';

import { usePageViews } from '@/hooks/useGoogleAnalytics';

export default function PageViewTracker() {
    usePageViews();
    return null;
}