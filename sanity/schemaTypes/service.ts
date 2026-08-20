import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Serviço",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nome do serviço",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Preço (texto)",
      description: "Ex: R$80, A partir de R$60, Sob consulta",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descrição curta",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(220),
    }),
    defineField({
      name: "featured",
      title: "Destacar com foto grande?",
      description: "Só faz sentido marcar em no máximo 2 serviços — são os cards grandes com foto.",
      type: "boolean",
      initialValue: false,
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
    select: { title: "name", subtitle: "price" },
  },
});
