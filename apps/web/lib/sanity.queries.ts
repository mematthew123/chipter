import { groq } from 'next-sanity'

// Query for recent reviews with all necessary data
export const recentReviewsQuery = groq`
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
`

// Query for featured review
export const featuredReviewQuery = groq`
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
`

// Query for all reviews
export const allReviewsQuery = groq`
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
`