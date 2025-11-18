import {defineType, defineField} from "sanity";

export default defineType({
  name: "contact",
  title: "Contact Page",
  type: "document",

  fields: [
    defineField({
      name: "language",
      type: "string",
      title: "Language",
      options: {
        list: [
          { title: "English", value: "en" },
          { title: "Spanish", value: "es" },
        ],
      },
    }),

    defineField({
      name: "intro",
      type: "string",
      title: "Intro Text",
    }),

    defineField({
      name: "title",
      type: "string",
      title: "Page Title",
    }),

    defineField({
      name: "instagramUrl",
      type: "url",
      title: "Instagram URL",
    }),

    defineField({
      name: "email",
      type: "string",
      title: "Email",
    }),

    defineField({
      name: "phone",
      type: "string",
      title: "Phone Number",
    }),

    defineField({
      name: "formspreeUrl",
      type: "url",
      title: "Formspree URL",
    }),

    defineField({
      name: "placeholders",
      title: "Form Placeholders",
      type: "object",
      fields: [
        {
          name: "name",
          type: "string",
          title: "Name Placeholder",
        },
        {
          name: "email",
          type: "string",
          title: "Email Placeholder",
        },
        {
          name: "message",
          type: "string",
          title: "Message Placeholder",
        },
      ],
    }),

    defineField({
      name: "buttonText",
      type: "string",
      title: "Submit Button Text",
    }),

    defineField({
      name: "directText",
      type: "string",
      title: "Direct Contact Text",
    }),
  ],
});
