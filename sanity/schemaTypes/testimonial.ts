import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Depoimento",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nome do cliente",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "quote",
      title: "Depoimento",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(280),
    }),
    defineField({
      name: "order",
      title: "Ordem de exibição",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Ordem de exibição",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "quote" },
  },
});
