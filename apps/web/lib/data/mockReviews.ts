export type BadgeTier = 'seismic' | 'tectonic' | 'epicenter' | 'offChipter' | null;

export interface ChipReview {
  id: string;
  slug?: string;
  name: string;
  brand: string;
  flavor: string;
  imageUrl: string;
  scores: {
    crunch: number;
    flavor: number;
    aftertaste: number;
    seasoningDistribution: number;
    bagToChipRatio: number;
  };
  overallScore: number;
  badge: BadgeTier;
  reviewText: string;
  oneLineVerdict?: string;
  reviewDate: Date;
  tags: string[];
}

function getBadgeTier(score: number): BadgeTier {
  if (score >= 10.0) return 'offChipter';
  if (score >= 9.0) return 'epicenter';
  if (score >= 8.0) return 'tectonic';
  if (score >= 7.0) return 'seismic';
  return null;
}

export const mockReviews: ChipReview[] = [
  {
    id: '1',
    name: 'Blaze',
    brand: 'Doritos',
    flavor: 'Chili Pepper',
    imageUrl: 'https://placehold.co/600x600/FF5C35/FFFBEB?text=DORITOS+BLAZE',
    scores: {
      crunch: 8.5,
      flavor: 8.3,
      aftertaste: 8.2,
      seasoningDistribution: 8.6,
      bagToChipRatio: 8.4,
    },
    overallScore: 8.4,
    badge: getBadgeTier(8.4),
    reviewText: 'A volcanic eruption of flavor that doesn\'t disappoint. The heat builds gradually, respecting your palate before setting it ablaze. Structural integrity holds through an entire Netflix episode.',
    reviewDate: new Date('2024-12-20'),
    tags: ['spicy', 'corn', 'intense'],
  },
  {
    id: '2',
    name: 'Jalapeño',
    brand: 'Kettle Brand',
    flavor: 'Jalapeño',
    imageUrl: 'https://placehold.co/600x600/4CAF50/FFFBEB?text=KETTLE+JALAPEÑO',
    scores: {
      crunch: 9.2,
      flavor: 7.5,
      aftertaste: 7.8,
      seasoningDistribution: 7.6,
      bagToChipRatio: 7.0,
    },
    overallScore: 7.8,
    badge: getBadgeTier(7.8),
    reviewText: 'This chip promised jalapeño. It whispered it at best. The crunch, however, could wake the neighbors. A study in contrasts.',
    reviewDate: new Date('2024-12-19'),
    tags: ['kettle-cooked', 'spicy', 'thick-cut'],
  },
  {
    id: '3',
    name: 'Salt & Vinegar',
    brand: 'Cape Cod',
    flavor: 'Sea Salt & Vinegar',
    imageUrl: 'https://placehold.co/600x600/FFE566/1A1A1A?text=CAPE+COD',
    scores: {
      crunch: 8.8,
      flavor: 8.9,
      aftertaste: 9.1,
      seasoningDistribution: 9.0,
      bagToChipRatio: 8.2,
    },
    overallScore: 8.8,
    badge: getBadgeTier(8.8),
    reviewText: 'The vinegar hits like a freight train, then apologizes with a gentle sea salt finish. Your mouth will pucker. Your hand will reach for another. Resistance is futile.',
    reviewDate: new Date('2024-12-18'),
    tags: ['tangy', 'kettle-cooked', 'bold'],
  },
  {
    id: '4',
    name: 'Original',
    brand: 'Lay\'s',
    flavor: 'Classic',
    imageUrl: 'https://placehold.co/600x600/FFFBEB/1A1A1A?text=LAY\'S+CLASSIC',
    scores: {
      crunch: 6.5,
      flavor: 6.0,
      aftertaste: 6.2,
      seasoningDistribution: 7.0,
      bagToChipRatio: 5.8,
    },
    overallScore: 6.3,
    badge: getBadgeTier(6.3),
    reviewText: 'The Switzerland of chips. Offends no one. Excites no one. Exists.',
    reviewDate: new Date('2024-12-17'),
    tags: ['classic', 'thin', 'mild'],
  },
  {
    id: '5',
    name: 'Voodoo',
    brand: 'Zapp\'s',
    flavor: 'Voodoo',
    imageUrl: 'https://placehold.co/600x600/1A1A1A/FFE566?text=ZAPP\'S+VOODOO',
    scores: {
      crunch: 9.0,
      flavor: 9.4,
      aftertaste: 9.2,
      seasoningDistribution: 9.3,
      bagToChipRatio: 8.8,
    },
    overallScore: 9.1,
    badge: getBadgeTier(9.1),
    reviewText: 'What dark magic is this? Sweet, savory, tangy, and spicy all at once. Each chip is a journey. Pack a map.',
    reviewDate: new Date('2024-12-16'),
    tags: ['unique', 'kettle-cooked', 'mysterious'],
  },
  {
    id: '6',
    name: 'All Dressed',
    brand: 'Ruffles',
    flavor: 'All Dressed',
    imageUrl: 'https://placehold.co/600x600/FF5C35/FFFBEB?text=RUFFLES+ALL+DRESSED',
    scores: {
      crunch: 7.8,
      flavor: 8.2,
      aftertaste: 8.0,
      seasoningDistribution: 7.9,
      bagToChipRatio: 7.6,
    },
    overallScore: 7.9,
    badge: getBadgeTier(7.9),
    reviewText: 'Canada\'s gift to snacking. Like a party where all the seasonings showed up at once and decided to get along.',
    reviewDate: new Date('2024-12-15'),
    tags: ['ridged', 'complex', 'canadian'],
  },
  {
    id: '7',
    name: 'Ghost Pepper',
    brand: 'Paqui',
    flavor: 'Haunted Ghost Pepper',
    imageUrl: 'https://placehold.co/600x600/1A1A1A/FF5C35?text=PAQUI+GHOST',
    scores: {
      crunch: 8.7,
      flavor: 7.5,
      aftertaste: 6.0,
      seasoningDistribution: 8.2,
      bagToChipRatio: 7.8,
    },
    overallScore: 7.6,
    badge: getBadgeTier(7.6),
    reviewText: 'Heat for heat\'s sake. Your tongue will file a complaint with HR. The chip laughs at your pain.',
    reviewDate: new Date('2024-12-14'),
    tags: ['extreme-spicy', 'tortilla', 'challenge'],
  },
  {
    id: '8',
    name: 'Sour Cream & Onion',
    brand: 'Pringles',
    flavor: 'Sour Cream & Onion',
    imageUrl: 'https://placehold.co/600x600/4CAF50/FFFBEB?text=PRINGLES+SC&O',
    scores: {
      crunch: 7.0,
      flavor: 7.3,
      aftertaste: 7.1,
      seasoningDistribution: 8.5,
      bagToChipRatio: 9.5,
    },
    overallScore: 7.9,
    badge: getBadgeTier(7.9),
    reviewText: 'Uniformity achieved. Every chip identical. A monument to industrial precision. The tube protects. The tube provides.',
    reviewDate: new Date('2024-12-13'),
    tags: ['stacked', 'consistent', 'creamy'],
  },
  {
    id: '9',
    name: 'Sweet Maui Onion',
    brand: 'Hawaiian',
    flavor: 'Sweet Maui Onion',
    imageUrl: 'https://placehold.co/600x600/FFE566/1A1A1A?text=HAWAIIAN',
    scores: {
      crunch: 8.5,
      flavor: 8.8,
      aftertaste: 8.6,
      seasoningDistribution: 8.4,
      bagToChipRatio: 8.0,
    },
    overallScore: 8.5,
    badge: getBadgeTier(8.5),
    reviewText: 'A vacation in a bag. Sweet meets savory on a beach of golden crunch. You can almost hear the ukulele.',
    reviewDate: new Date('2024-12-12'),
    tags: ['sweet', 'kettle-cooked', 'unique'],
  },
];

// Get featured review (highest score)
export const getFeaturedReview = (): ChipReview => {
  return mockReviews.reduce((prev, current) =>
    current.overallScore > prev.overallScore ? current : prev
  );
};

// Get recent reviews (sorted by date)
export const getRecentReviews = (limit: number = 6): ChipReview[] => {
  return [...mockReviews]
    .sort((a, b) => b.reviewDate.getTime() - a.reviewDate.getTime())
    .slice(0, limit);
};

// Get badge-certified chips
export const getBadgeCertifiedChips = (): ChipReview[] => {
  return mockReviews.filter(review => review.badge !== null)
    .sort((a, b) => b.overallScore - a.overallScore);
};