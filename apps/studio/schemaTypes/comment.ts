import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authorEmail',
      title: 'Author Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
      description: 'From Clerk authentication',
    }),
    defineField({
      name: 'authorId',
      title: 'Author User ID',
      type: 'string',
      description: 'Clerk User ID for authentication',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authorImage',
      title: 'Author Image',
      type: 'string',
      description: 'Profile image URL from Clerk',
    }),
    defineField({
      name: 'content',
      title: 'Comment Content',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'parentType',
      title: 'Parent Type',
      type: 'string',
      options: {
        list: [
          {title: 'Blog Post', value: 'post'},
          {title: 'Chip Review', value: 'chipReview'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'parentDocument',
      title: 'Parent Document',
      type: 'reference',
      to: [{type: 'post'}, {type: 'chipReview'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Visible', value: 'visible'},
          {title: 'Hidden', value: 'hidden'},
          {title: 'Pending', value: 'pending'},
        ],
        layout: 'radio',
      },
      initialValue: 'visible',
    }),
    defineField({
      name: 'isEdited',
      title: 'Is Edited',
      type: 'boolean',
      initialValue: false,
      description: 'Indicates if comment has been edited',
    }),
    defineField({
      name: 'editedAt',
      title: 'Edited At',
      type: 'datetime',
      description: 'Last edit timestamp',
    }),
    defineField({
      name: 'replies',
      title: 'Replies',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'comment'}]}],
      description: 'For future threading support',
    }),
  ],
  preview: {
    select: {
      authorName: 'authorName',
      content: 'content',
      parentTitle: 'parentDocument.title',
      publishedAt: 'publishedAt',
    },
    prepare(selection) {
      const {authorName, content, parentTitle, publishedAt} = selection
      // Extract first text from portable text content
      const firstBlock = content?.find((block: any) => block._type === 'block')
      const text = firstBlock?.children
        ?.filter((child: any) => child._type === 'span')
        ?.map((span: any) => span.text)
        ?.join('') || 'No content'

      return {
        title: `${authorName}: ${text.substring(0, 50)}${text.length > 50 ? '...' : ''}`,
        subtitle: `on "${parentTitle}" - ${new Date(publishedAt).toLocaleDateString()}`,
      }
    },
  },
})