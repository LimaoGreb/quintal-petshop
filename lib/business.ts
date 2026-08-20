/**
 * Dados reais do negócio — fonte única de verdade.
 * Não inventar/alterar informações aqui sem confirmação do cliente.
 */
export const business = {
  name: "Quintal Pet Shop",
  category: "Pet Shop • Banho e Tosa • Daycare",
  neighborhood: "Rio Branco",
  city: "Porto Alegre",
  state: "RS",
  addressLine: "R. Giordano Bruno, 82",
  addressFull: "R. Giordano Bruno, 82 — Rio Branco, Porto Alegre - RS",
  postalCode: undefined as string | undefined,
  phoneDisplay: "+55 (51) 99339-3445",
  /** E.164 sem símbolos, para links wa.me */
  whatsappNumber: "5551993393445",
  instagramHandle: "@quintal.petshop",
  instagramUrl: "https://instagram.com/quintal.petshop",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=R.+Giordano+Bruno,+82+-+Rio+Branco,+Porto+Alegre+-+RS",
  googleMapsEmbedSrc:
    "https://www.google.com/maps?q=R.+Giordano+Bruno,+82+-+Rio+Branco,+Porto+Alegre+-+RS&output=embed",
  rating: 5.0,
  reviewCount: 75,
  timezone: "America/Sao_Paulo",
  /** 0 = domingo … 6 = sábado. Aberto terça(2) a sábado(6). */
  openDays: [2, 3, 4, 5, 6],
  openHour: 9,
  closeHour: 19,
  hoursDisplay: "Terça a sábado, 09:00–19:00",
  hoursShort: "Ter–Sáb • 9h–19h",
} as const;

export const services = [
  {
    id: "banho-secagem",
    name: "Banho e Secagem",
    price: "A partir de R$60",
    description:
      "Banho completo com secagem cuidadosa, no ritmo de cada pet. A porta de entrada para uma rotina de higiene mais leve.",
    featured: true,
  },
  {
    id: "tosa-higienica",
    name: "Tosa Higiênica",
    price: "R$80",
    description:
      "Aparo das áreas íntimas, patas e focinho — conforto no dia a dia, sem mexer no resto do pelo.",
    featured: false,
  },
  {
    id: "tosa-completa",
    name: "Tosa Completa",
    price: "R$120",
    description:
      "Tosa do corpo todo, ajustada à raça e à textura do pelo, com acabamento caprichado.",
    featured: true,
  },
  {
    id: "daycare",
    name: "Daycare",
    price: "R$45 / diária",
    description:
      "Um dia de companhia e movimento para quando a rotina não permite deixar o pet sozinho em casa.",
    featured: false,
  },
  {
    id: "racoes-acessorios",
    name: "Rações & Acessórios",
    price: "Marcas selecionadas",
    description:
      "Uma curadoria enxuta de rações e itens do dia a dia — só o que faz sentido levar para casa.",
    featured: false,
  },
  {
    id: "bem-estar",
    name: "Bem-estar & Vacinação",
    price: "Sob consulta",
    description:
      "Orientação sobre cuidados e encaminhamento para vacinação — conversa com quem entende do seu pet.",
    featured: false,
  },
] as const;

export const differentials = [
  {
    title: "Equipe especializada",
    description:
      "Profissionais com experiência em comportamento animal e técnicas suaves de manejo.",
  },
  {
    title: "Produtos selecionados",
    description:
      "Uma curadoria enxuta de rações e acessórios, escolhidos pensando na saúde e no conforto dos pets.",
  },
  {
    title: "Ambiente acolhedor",
    description:
      "Rotina e espaços pensados para reduzir a ansiedade durante o atendimento.",
  },
] as const;

export const testimonials = [
  {
    name: "Mariana S.",
    quote:
      "Equipe incrível, meu cachorro saiu novo e muito feliz. Atendimento carinhoso!",
  },
  {
    name: "Carlos P.",
    quote:
      "Tosa perfeita, recomendo para quem procura cuidado e atenção de verdade.",
  },
  {
    name: "Ana L.",
    quote:
      "Ótimo espaço e profissionais atenciosos. Me sinto seguro deixando meu gato.",
  },
] as const;

/**
 * Monta um link wa.me com mensagem pré-preenchida.
 */
export function buildWhatsAppLink(message?: string) {
  const base = `https://wa.me/${business.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsAppMessage =
  "Olá! Vim pelo site e gostaria de agendar um horário para o meu pet no Quintal Pet Shop.";
