'use client';

import { Suspense } from 'react';
import { usePageViews } from '@/hooks/useGoogleAnalytics';

function PageViewTrackerInner() {
    usePageViews();
    return null;
}

export default function PageViewTracker() {
    return (
        <Suspense fallback={null}>
            <PageViewTrackerInner />
        </Suspense>
    );
}