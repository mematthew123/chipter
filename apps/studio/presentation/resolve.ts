import { defineLocations, PresentationPluginOptions } from 'sanity/presentation'

export const resolve: PresentationPluginOptions['resolve'] = {
  locations: {
    // Map blog posts to their preview locations
    post: defineLocations({
      select: {
        title: 'title',
        slug: 'slug.current',
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || 'Untitled Post',
            href: `/blog/${doc?.slug}`,
          },
          {
            title: 'Blog Index',
            href: '/blog',
          },
        ],
      }),
    }),

    // Map chip reviews to their preview locations
    chipReview: defineLocations({
      select: {
        title: 'title',
        slug: 'slug.current',
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || 'Untitled Review',
            href: `/reviews/${doc?.slug}`,
          },
          {
            title: 'Reviews Index',
            href: '/reviews',
          },
        ],
      }),
    }),

    // Map chip products to their references
    chipProduct: defineLocations({
      select: {
        name: 'name',
        slug: 'slug.current',
      },
      resolve: (doc) => ({
        locations: [
          {
            title: 'Products using ' + (doc?.name || 'this product'),
            href: '/reviews',
          },
        ],
      }),
    }),

    // Map chip brands
    chipBrand: defineLocations({
      select: {
        name: 'name',
        slug: 'slug.current',
      },
      resolve: (doc) => ({
        locations: [
          {
            title: 'Products by ' + (doc?.name || 'this brand'),
            href: '/reviews',
          },
        ],
      }),
    }),

    // Map authors
    author: defineLocations({
      select: {
        name: 'name',
        slug: 'slug.current',
      },
      resolve: (doc) => ({
        locations: [
          {
            title: 'Reviews by ' + (doc?.name || 'this author'),
            href: '/reviews',
          },
        ],
      }),
    }),

    // Map categories
    category: defineLocations({
      select: {
        title: 'title',
        slug: 'slug.current',
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || 'Category',
            href: '/reviews',
          },
        ],
      }),
    }),
  },
}