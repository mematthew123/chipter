import {defineType, defineField} from 'sanity'
import {HeartIcon} from '@sanity/icons'

export default defineType({
  name: 'like',
  title: 'Like',
  type: 'document',
  icon: HeartIcon,
  fields: [
    defineField({
      name: 'parentType',
      title: 'Content Type',
      type: 'string',
      options: {
        list: [
          {title: 'Blog Post', value: 'post'},
          {title: 'Chip Review', value: 'chipReview'}
        ],
        layout: 'radio'
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'parentDocument',
      title: 'Parent Document',
      type: 'reference',
      to: [{type: 'post'}, {type: 'chipReview'}],
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'sessionId',
      title: 'Session ID',
      type: 'string',
      description: 'Anonymous session ID (will be replaced with userId when auth is added)',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'userAgent',
      title: 'User Agent',
      type: 'string',
      description: 'Browser info for analytics',
      readOnly: true
    }),
    defineField({
      name: 'ipHash',
      title: 'IP Hash',
      type: 'string',
      description: 'Hashed IP for rate limiting (privacy-preserving)',
      readOnly: true
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true
    })
  ],
  preview: {
    select: {
      parentTitle: 'parentDocument.title',
      parentType: 'parentType',
      createdAt: 'createdAt'
    },
    prepare({parentTitle, parentType, createdAt}) {
      const type = parentType === 'post' ? '📝' : '🥔'
      const date = createdAt ? new Date(createdAt).toLocaleDateString() : 'Unknown date'
      return {
        title: parentTitle || 'Untitled',
        subtitle: `${type} Liked on ${date}`
      }
    }
  }
})