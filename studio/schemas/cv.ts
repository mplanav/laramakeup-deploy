import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'cv',
  title: 'CV Page',
  type: 'document',

  fields: [
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
      name: 'title',
      type: 'string',
      title: 'Page Title',
    }),

    defineField({
      name: 'paragraphs',
      type: 'array',
      title: 'Paragraphs',
      of: [
        { type: 'text' }
      ],
    }),

    defineField({
      name: 'cvDownloadFile',
      type: 'file',
      title: 'CV File (PDF)',
      options: {
        accept: '.pdf'
      }
    }),

    defineField({
      name: 'cvDownloadText',
      type: 'string',
      title: 'Download Button Text',
    }),

    defineField({
      name: 'viewOnlineUrl',
      type: 'string',
      title: 'Online CV URL',
    }),

    defineField({
      name: 'viewOnlineText',
      type: 'string',
      title: 'View Online Button Text',
    }),
  ],
})
