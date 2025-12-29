import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'chipReview',
  title: 'Chip Review',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Review Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'chipProduct',
      title: 'Chip Product',
      type: 'reference',
      to: [{type: 'chipProduct'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'reviewAuthor',
      title: 'Review Author',
      type: 'reference',
      to: [{type: 'author'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'reviewDate',
      title: 'Review Date',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Review',
      type: 'boolean',
      description: 'Display this review prominently on the homepage',
      initialValue: false,
    }),
    defineField({
      name: 'chipterScore',
      title: 'Chipter Score',
      type: 'number',
      description: 'Overall rating on the Chipter Scale (0.0 - 10.0)',
      validation: (rule) => rule
        .required()
        .min(0)
        .max(10)
        .precision(1)
        .error('Score must be between 0.0 and 10.0 with one decimal place'),
    }),
    defineField({
      name: 'badge',
      title: 'Badge Tier',
      type: 'string',
      description: 'Auto-assigned based on score',
      options: {
        list: [
          {title: 'Off the Chipter (10.0)', value: 'off_the_chipter'},
          {title: 'Epicenter Elite (9.0+)', value: 'epicenter_elite'},
          {title: 'Tectonic Crunch (8.0+)', value: 'tectonic_crunch'},
          {title: 'Seismic Snack (7.0+)', value: 'seismic_snack'},
          {title: 'Below the Scale (<7.0)', value: 'below_scale'},
        ],
        layout: 'radio',
      },
      readOnly: true,
    }),
    defineField({
      name: 'scoreBreakdown',
      title: 'Score Breakdown',
      type: 'object',
      description: 'Individual rating criteria that contribute to overall score',
      fields: [
        defineField({
          name: 'crunch',
          title: 'Crunch',
          type: 'number',
          description: 'Structural integrity and satisfying crunch (0-10)',
          validation: (rule) => rule.min(0).max(10).precision(1),
        }),
        defineField({
          name: 'flavorIntensity',
          title: 'Flavor Intensity',
          type: 'number',
          description: 'How bold and well-executed the flavor is (0-10)',
          validation: (rule) => rule.min(0).max(10).precision(1),
        }),
        defineField({
          name: 'aftertaste',
          title: 'Aftertaste',
          type: 'number',
          description: 'Quality of lingering flavor after eating (0-10)',
          validation: (rule) => rule.min(0).max(10).precision(1),
        }),
        defineField({
          name: 'seasoningDistribution',
          title: 'Seasoning Distribution',
          type: 'number',
          description: 'Consistency of seasoning across chips (0-10)',
          validation: (rule) => rule.min(0).max(10).precision(1),
        }),
        defineField({
          name: 'bagToChipRatio',
          title: 'Bag-to-Chip Ratio',
          type: 'number',
          description: 'Amount of chips vs air in the bag (0-10)',
          validation: (rule) => rule.min(0).max(10).precision(1),
        }),
      ],
    }),
    defineField({
      name: 'oneLineVerdict',
      title: 'One-Line Verdict',
      type: 'string',
      description: 'Deadpan summary in the Chipter voice',
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: 'reviewSummary',
      title: 'Review Summary',
      type: 'text',
      description: 'Brief overview of the review (2-3 sentences)',
      rows: 3,
      validation: (rule) => rule.required().max(500),
    }),
    defineField({
      name: 'reviewContent',
      title: 'Full Review',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'pros',
      title: 'Pros',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (rule) => rule.min(1).max(5),
    }),
    defineField({
      name: 'cons',
      title: 'Cons',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (rule) => rule.max(5),
    }),
    defineField({
      name: 'bestFor',
      title: 'Best For',
      type: 'string',
      description: 'Who would enjoy these chips most?',
    }),
    defineField({
      name: 'pairsWellWith',
      title: 'Pairs Well With',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      description: 'Dips, drinks, or occasions',
    }),
    defineField({
      name: 'reviewImages',
      title: 'Review Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'bagSize',
      title: 'Bag Size Tested',
      type: 'string',
      description: 'Size of the bag reviewed (e.g., "5 oz", "Family Size")',
    }),
    defineField({
      name: 'pricePoint',
      title: 'Price Point',
      type: 'string',
      options: {
        list: [
          {title: 'Budget', value: 'budget'},
          {title: 'Standard', value: 'standard'},
          {title: 'Premium', value: 'premium'},
          {title: 'Luxury', value: 'luxury'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'purchaseLocation',
      title: 'Where to Buy',
      type: 'string',
      description: 'Store or online retailer where purchased',
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      validation: (rule) => rule.max(60),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.max(160),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'likesEnabled',
      title: 'Enable Likes',
      type: 'boolean',
      initialValue: true,
      description: 'Allow users to like this review'
    }),
    defineField({
      name: 'likeCount',
      title: 'Like Count',
      type: 'number',
      initialValue: 0,
      readOnly: true,
      description: 'Total number of likes (updated automatically)'
    }),
  ],
  preview: {
    select: {
      title: 'title',
      chipName: 'chipProduct.name',
      score: 'chipterScore',
      media: 'chipProduct.productImage',
      author: 'reviewAuthor.name',
    },
    prepare({title, chipName, score, media, author}) {
      const badge = score >= 10 ? '🏆' : score >= 9 ? '🔥' : score >= 8 ? '⭐' : score >= 7 ? '👍' : '👎'
      return {
        title: title || chipName,
        subtitle: `${badge} ${score}/10 - Reviewed by ${author}`,
        media,
      }
    },
  },
})