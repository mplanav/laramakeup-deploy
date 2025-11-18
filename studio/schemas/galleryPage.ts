import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'galleryPage',
  title: 'Gallery Page',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page Title',
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug (URL)',
      description: 'Define the URL for this page (sculpting, mould-making, prosthetic, sfx, etc.)',
      options: {
        source: 'title',
        maxLength: 50,
      },
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

    defineField({
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{type: 'image'}],
    }),

    defineField({
      name: 'videos',
      type: 'array',
      title: 'Videos',
      of: [
        {
          type: 'file',
          options: {accept: 'video/*'}
        }
      ],
    }),
  ],
})
