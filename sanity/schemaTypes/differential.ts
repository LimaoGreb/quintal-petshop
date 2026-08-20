import { defineField, defineType } from "sanity";

export default defineType({
  name: "differential",
  title: "Diferencial",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descrição curta",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(180),
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
    select: { title: "title", subtitle: "description" },
  },
});
