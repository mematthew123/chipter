import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'chipBrand',
  title: 'Chip Brand',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Brand Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Brand Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
      validation: (rule) => rule.uri({
        scheme: ['http', 'https']
      }).error('Must be a valid URL starting with http:// or https://')
    }),
    defineField({
      name: 'country',
      title: 'Country of Origin',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Brand Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'established',
      title: 'Year Established',
      type: 'number',
      validation: (rule) => rule.min(1800).max(new Date().getFullYear()),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'country',
      media: 'logo',
    },
  },
})