import { defineType, defineField } from "sanity";

export default defineType({
  name: "navbar",
  title: "Navbar",
  type: "document",

  fields: [
    defineField({
      name: "home",
      type: "string",
      title: "Home Label",
      validation: Rule => Rule.required()
    }),

    defineField({
      name: "sculpting",
      type: "string",
      title: "Sculpting Label",
      validation: Rule => Rule.required()
    }),

    defineField({
      name: "mouldmaking",
      type: "string",
      title: "Mould Making Label",
      validation: Rule => Rule.required()
    }),

    defineField({
      name: "prosthetic",
      type: "string",
      title: "Prosthetic Makeup Label",
      validation: Rule => Rule.required()
    }),

    defineField({
      name: "sfx",
      type: "string",
      title: "SFX Makeup Label",
      validation: Rule => Rule.required()
    }),

    defineField({
      name: "cv",
      type: "string",
      title: "CV Label",
      validation: Rule => Rule.required()
    }),

    defineField({
      name: "contact",
      type: "string",
      title: "Contact Label",
      validation: Rule => Rule.required()
    }),

    // OPCIONAL → si quieres editar los textos del switch ES / EN desde Sanity
    defineField({
      name: "lang_es",
      type: "string",
      title: "Language Button (ES)",
      initialValue: "ES"
    }),
    defineField({
      name: "lang_en",
      type: "string",
      title: "Language Button (EN)",
      initialValue: "EN"
    })
  ]
});
