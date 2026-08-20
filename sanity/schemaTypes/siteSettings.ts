import { defineField, defineType } from "sanity";

/**
 * Documento único (singleton) com as informações do negócio e os textos
 * principais do site. O painel só permite editar UM registro deste tipo
 * — ver sanity/structure.ts.
 */
export default defineType({
  name: "siteSettings",
  title: "Configurações do site",
  type: "document",
  groups: [
    { name: "negocio", title: "Dados do negócio", default: true },
    { name: "textos", title: "Textos do site" },
  ],
  fields: [
    defineField({
      name: "addressLine",
      title: "Endereço (rua e número)",
      type: "string",
      group: "negocio",
      initialValue: "R. Giordano Bruno, 82",
    }),
    defineField({
      name: "neighborhood",
      title: "Bairro",
      type: "string",
      group: "negocio",
      initialValue: "Rio Branco",
    }),
    defineField({
      name: "city",
      title: "Cidade",
      type: "string",
      group: "negocio",
      initialValue: "Porto Alegre",
    }),
    defineField({
      name: "state",
      title: "Estado (sigla)",
      type: "string",
      group: "negocio",
      initialValue: "RS",
    }),
    defineField({
      name: "phoneDisplay",
      title: "Telefone (formato de exibição)",
      description: "Como o telefone aparece escrito no site. Ex: +55 (51) 99339-3445",
      type: "string",
      group: "negocio",
      initialValue: "+55 (51) 99339-3445",
    }),
    defineField({
      name: "whatsappNumber",
      title: "WhatsApp (só números, com código do país)",
      description: "Sem espaços, parênteses ou traços. Ex: 5551993393445",
      type: "string",
      group: "negocio",
      validation: (Rule) => Rule.regex(/^\d+$/, { name: "somente números" }),
      initialValue: "5551993393445",
    }),
    defineField({
      name: "instagramHandle",
      title: "Instagram (@usuário)",
      type: "string",
      group: "negocio",
      initialValue: "@quintal.petshop",
    }),
    defineField({
      name: "instagramUrl",
      title: "Link do Instagram",
      type: "url",
      group: "negocio",
      initialValue: "https://instagram.com/quintal.petshop",
    }),
    defineField({
      name: "googleMapsUrl",
      title: "Link do Google Maps",
      type: "url",
      group: "negocio",
    }),
    defineField({
      name: "rating",
      title: "Nota média (Google)",
      type: "number",
      group: "negocio",
      validation: (Rule) => Rule.min(0).max(5),
      initialValue: 5,
    }),
    defineField({
      name: "reviewCount",
      title: "Quantidade de avaliações",
      type: "number",
      group: "negocio",
      initialValue: 75,
    }),
    defineField({
      name: "hoursDisplay",
      title: "Horário (texto completo)",
      description: "Ex: Terça a sábado, 09:00–19:00",
      type: "string",
      group: "negocio",
      initialValue: "Terça a sábado, 09:00–19:00",
    }),
    defineField({
      name: "hoursShort",
      title: "Horário (texto curto)",
      description: "Ex: Ter–Sáb • 9h–19h",
      type: "string",
      group: "negocio",
      initialValue: "Ter–Sáb • 9h–19h",
    }),
    defineField({
      name: "openDays",
      title: "Dias de funcionamento",
      description: "Usado para calcular 'Aberto agora' em tempo real no site.",
      type: "array",
      group: "negocio",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Domingo", value: "sun" },
          { title: "Segunda", value: "mon" },
          { title: "Terça", value: "tue" },
          { title: "Quarta", value: "wed" },
          { title: "Quinta", value: "thu" },
          { title: "Sexta", value: "fri" },
          { title: "Sábado", value: "sat" },
        ],
      },
      initialValue: ["tue", "wed", "thu", "fri", "sat"],
    }),
    defineField({
      name: "openHour",
      title: "Horário de abertura (0–23)",
      type: "number",
      group: "negocio",
      initialValue: 9,
    }),
    defineField({
      name: "closeHour",
      title: "Horário de fechamento (0–23)",
      type: "number",
      group: "negocio",
      initialValue: 19,
    }),

    // Textos principais do site
    defineField({
      name: "heroHeadlineLine1",
      title: "Título do topo — linha 1",
      type: "string",
      group: "textos",
      initialValue: "Cuidado que eles sentem.",
    }),
    defineField({
      name: "heroHeadlineLine2",
      title: "Título do topo — linha 2",
      type: "string",
      group: "textos",
      initialValue: "Confiança que você percebe.",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Subtítulo do topo",
      type: "text",
      rows: 3,
      group: "textos",
      initialValue:
        "Banho, tosa e um dia inteiro de daycare — sempre no ritmo do seu pet, a poucos passos de casa, no Rio Branco.",
    }),
    defineField({
      name: "ctaHeading",
      title: "Frase de chamada (antes do contato)",
      type: "string",
      group: "textos",
      initialValue: "Seu pet merece cuidado sem pressa.",
    }),
    defineField({
      name: "ctaSubtitle",
      title: "Texto de apoio da chamada",
      type: "text",
      rows: 2,
      group: "textos",
      initialValue:
        "Marque um horário e deixe seu companheiro em boas mãos, com atenção individual do começo ao fim.",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Configurações do site" };
    },
  },
});
