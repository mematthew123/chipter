/* eslint-disable @typescript-eslint/no-explicit-any */
export type BadgeTier =
  | 'off_the_chipter'
  | 'epicenter_elite'
  | 'tectonic_crunch'
  | 'seismic_snack'
  | 'below_scale';

export interface SanityChipBrand {
  _id: string;
  name: string;
  slug?: {
    current: string;
  };
  logo?: any;
  website?: string;
  country?: string;
  description?: string;
  established?: number;
}

export interface SanityChipProduct {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  brand: SanityChipBrand;
  productImage: any;
  flavor: string;
  chipType: string;
  description?: string;
  ingredients?: string[];
  allergens?: string[];
  isLimitedEdition?: boolean;
  isDiscontinued?: boolean;
}

export interface SanityScoreBreakdown {
  crunch?: number;
  flavorIntensity?: number;
  aftertaste?: number;
  seasoningDistribution?: number;
  bagToChipRatio?: number;
}

export interface SanityChipReview {
  reviewContent: any;
  seoDescription: string;
  seoTitle: string;
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  reviewDate: string;
  chipterScore: number;
  badge?: BadgeTier;
  oneLineVerdict: string;
  reviewSummary: string;
  scoreBreakdown?: SanityScoreBreakdown;
  isFeatured?: boolean;
  chipProduct: SanityChipProduct;
  reviewAuthor?: {
    _id: string;
    name: string;
  };
  categories?: Array<{
    _id: string;
    title: string;
    slug: {
      current: string;
    };
  }>;
  pros?: string[];
  cons?: string[];
  bestFor?: string;
  pairsWellWith?: string[];
  reviewImages?: Array<{
    caption?: string;
    alt?: string;
    asset: {
      _id: string;
      url: string;
    };
  }>;
  bagSize?: string;
  pricePoint?: 'budget' | 'standard' | 'premium' | 'luxury';
  purchaseLocation?: string;
  likesEnabled?: boolean;
  likeCount?: number;
}

// Transform function to convert Sanity data to the component format
export function transformReviewForCard(review: SanityChipReview, imageUrlBuilder?: (source: any) => string) {
  // Generate a placeholder URL if no image or imageUrlBuilder
  let imageUrl = '';
  if (review.chipProduct.productImage && imageUrlBuilder) {
    imageUrl = imageUrlBuilder(review.chipProduct.productImage);
  } else {
    // Fallback placeholder using the chip name and brand
    const encodedName = encodeURIComponent(`${review.chipProduct.brand.name} ${review.chipProduct.name}`);
    imageUrl = `https://placehold.co/600x600/FFE566/1A1A1A?text=${encodedName}`;
  }

  return {
    id: review._id,
    slug: review.slug.current,
    name: review.chipProduct.name,
    brand: review.chipProduct.brand.name,
    flavor: review.chipProduct.flavor,
    imageUrl,
    scores: {
      crunch: review.scoreBreakdown?.crunch || 0,
      flavor: review.scoreBreakdown?.flavorIntensity || 0,
      aftertaste: review.scoreBreakdown?.aftertaste || 0,
      seasoningDistribution: review.scoreBreakdown?.seasoningDistribution || 0,
      bagToChipRatio: review.scoreBreakdown?.bagToChipRatio || 0,
    },
    overallScore: review.chipterScore,
    badge: mapBadgeTier(review.badge),
    reviewText: review.reviewSummary,
    oneLineVerdict: review.oneLineVerdict,
    reviewDate: new Date(review.reviewDate),
    tags: review.categories?.map(c => c.title) || [],
  }
}

function mapBadgeTier(sanityBadge?: BadgeTier): 'seismic' | 'tectonic' | 'epicenter' | 'offChipter' | null {
  if (!sanityBadge) return null;

  switch(sanityBadge) {
    case 'off_the_chipter':
      return 'offChipter';
    case 'epicenter_elite':
      return 'epicenter';
    case 'tectonic_crunch':
      return 'tectonic';
    case 'seismic_snack':
      return 'seismic';
    default:
      return null;
  }
}

// Transform function specifically for featured review
export function transformFeaturedReview(review: any, imageUrlBuilder?: (source: any) => string) {
  // Generate a placeholder URL if no image or imageUrlBuilder
  let imageUrl = '';
  if (review.chipProduct?.productImage && imageUrlBuilder) {
    imageUrl = imageUrlBuilder(review.chipProduct.productImage);
  } else if (review.chipProduct) {
    // Fallback placeholder using the chip name and brand
    const encodedName = encodeURIComponent(`${review.chipProduct.brand?.name || ''} ${review.chipProduct.name || ''}`);
    imageUrl = `https://placehold.co/600x600/FFE566/1A1A1A?text=${encodedName}`;
  }

  // Map badge tier to the format expected by AnimatedFeaturedReviewClient
  let badgeMapped: 'seismic-snack' | 'tectonic-crunch' | 'epicenter-elite' | 'off-the-chipter' | null = null;
  if (review.badge) {
    switch(review.badge) {
      case 'off_the_chipter':
        badgeMapped = 'off-the-chipter';
        break;
      case 'epicenter_elite':
        badgeMapped = 'epicenter-elite';
        break;
      case 'tectonic_crunch':
        badgeMapped = 'tectonic-crunch';
        break;
      case 'seismic_snack':
        badgeMapped = 'seismic-snack';
        break;
    }
  }

  return {
    id: review._id,
    chipName: review.chipProduct?.name || '',
    brandName: review.chipProduct?.brand?.name || '',
    chipterScore: review.chipterScore || 0,
    badge: badgeMapped,
    verdict: review.oneLineVerdict || '',
    imageUrl,
    slug: review.slug?.current || '',
  };
}