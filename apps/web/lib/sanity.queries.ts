import { defineQuery } from 'next-sanity'

// Query for recent reviews with all necessary data
export const recentReviewsQuery = defineQuery(/* groq */ `
  *[_type == "chipReview"] | order(reviewDate desc) [0...$limit] {
    _id,
    title,
    slug,
    reviewDate,
    chipterScore,
    badge,
    oneLineVerdict,
    reviewSummary,
    scoreBreakdown,
    isFeatured,
    chipProduct-> {
      _id,
      name,
      flavor,
      productImage,
      chipType,
      brand-> {
        _id,
        name
      }
    },
    reviewAuthor-> {
      _id,
      name
    },
    categories[]-> {
      _id,
      title,
      slug
    }
  }
`)

// Query for featured review
export const featuredReviewQuery = defineQuery(/* groq */ `
  *[_type == "chipReview" && isFeatured == true] | order(reviewDate desc) [0] {
    _id,
    title,
    slug,
    reviewDate,
    chipterScore,
    badge,
    oneLineVerdict,
    reviewSummary,
    scoreBreakdown,
    pros,
    cons,
    bestFor,
    chipProduct-> {
      _id,
      name,
      flavor,
      productImage,
      chipType,
      brand-> {
        _id,
        name
      }
    },
    reviewAuthor-> {
      _id,
      name
    },
    reviewImages[] {
      caption,
      alt,
      asset-> {
        _id,
        url
      }
    }
  }
`)

// Query for all reviews
export const allReviewsQuery = defineQuery(/* groq */ `
  *[_type == "chipReview"] | order(reviewDate desc) {
    _id,
    title,
    slug,
    reviewDate,
    chipterScore,
    badge,
    oneLineVerdict,
    reviewSummary,
    chipProduct-> {
      _id,
      name,
      flavor,
      productImage,
      brand-> {
        _id,
        name
      }
    },
    categories[]-> {
      _id,
      title,
      slug
    }
  }
`)

// Query for single review by slug
export const singleReviewQuery = defineQuery(/* groq */ `
  *[_type == "chipReview" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    reviewDate,
    chipterScore,
    badge,
    oneLineVerdict,
    reviewSummary,
    reviewContent,
    scoreBreakdown,
    pros,
    cons,
    bestFor,
    pairsWellWith,
    bagSize,
    pricePoint,
    purchaseLocation,
    seoTitle,
    seoDescription,
    chipProduct-> {
      _id,
      name,
      slug,
      flavor,
      productImage,
      chipType,
      description,
      ingredients,
      allergens,
      isLimitedEdition,
      isDiscontinued,
      brand-> {
        _id,
        name,
        slug,
        website,
        country,
        description,
        established
      }
    },
    reviewAuthor-> {
      _id,
      name,
      slug,
      bio,
      image
    },
    reviewImages[] {
      caption,
      alt,
      asset-> {
        _id,
        url
      }
    },
    categories[]-> {
      _id,
      title,
      slug,
      description
    },
    likesEnabled,
    likeCount
  }
`)

// Query for all blog posts
export const allBlogPostsQuery = defineQuery(/* groq */ `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    author-> {
      _id,
      name,
      slug,
      image
    },
    categories[]-> {
      _id,
      title
    },
    body[_type == "block" && style == "normal"][0..2]
  }
`)

// Query for single blog post by slug
export const singleBlogPostQuery = defineQuery(/* groq */ `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    author-> {
      _id,
      name,
      slug,
      bio,
      image
    },
    categories[]-> {
      _id,
      title,
      description
    },
    body,
    likesEnabled,
    likeCount
  }
`)