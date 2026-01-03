import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public routes that don't require authentication
const isPublicRoute = createRouteMatcher([
  '/',              // Home page
  '/sign-in(.*)',   // Sign-in page and sub-routes
  '/sign-up(.*)',   // Sign-up page and sub-routes
  '/reviews(.*)',   // Reviews pages
  '/blog(.*)',      // Blog pages
  '/badges(.*)',    // Badges pages
  '/about(.*)',     // About page
  '/api/newsletter(.*)', // Newsletter API
])

// Define protected routes that require authentication
const isProtectedRoute = createRouteMatcher([
  '/user-profile(.*)', // User profile pages
  '/submit(.*)',       // Submit chip page
])

export default clerkMiddleware(async (auth, req) => {
  // Protect all routes that are not public
  if (!isPublicRoute(req)) {
    await auth.protect()
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};