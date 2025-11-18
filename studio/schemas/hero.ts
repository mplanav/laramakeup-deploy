import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),

    defineField({
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    }),

    defineField({
      name: 'introParagraphs',
      type: 'array',
      title: 'Intro Paragraphs',
      of: [{type: 'text'}],
    }),

    defineField({
      name: 'email',
      type: 'string',
      title: 'Email',
    }),

    defineField({
      name: 'ctaText',
      type: 'string',
      title: 'CTA Text',
    }),

    defineField({
      name: "ctaLink",
      type: "string",
      title: "CTA Link",
      validation: Rule => Rule.required()
    }),

    defineField({
      name: 'heroImage',
      type: 'image',
      title: 'Hero Background Image',
    }),

    defineField({
      name: 'language',
      type: 'string',
      title: 'Language',
      options: {
        list: [
          {title: 'English', value: 'en'},
          {title: 'Spanish', value: 'es'},
        ],
      },
    }),
  ],
})
