/**
 * Script único de "primeira carga": copia o conteúdo real que já estava
 * escrito no código (lib/business.ts) para dentro do Sanity, para o
 * site não nascer vazio.
 *
 * Rodar com: npx sanity exec sanity/seed.ts --with-user-token
 */
import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2026-08-20" });

async function run() {
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    addressLine: "R. Giordano Bruno, 82",
    neighborhood: "Rio Branco",
    city: "Porto Alegre",
    state: "RS",
    phoneDisplay: "+55 (51) 99339-3445",
    whatsappNumber: "5551993393445",
    instagramHandle: "@quintal.petshop",
    instagramUrl: "https://instagram.com/quintal.petshop",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=R.+Giordano+Bruno,+82+-+Rio+Branco,+Porto+Alegre+-+RS",
    rating: 5,
    reviewCount: 75,
    hoursDisplay: "Terça a sábado, 09:00–19:00",
    hoursShort: "Ter–Sáb • 9h–19h",
    openDays: ["tue", "wed", "thu", "fri", "sat"],
    openHour: 9,
    closeHour: 19,
    heroHeadlineLine1: "Cuidado que eles sentem.",
    heroHeadlineLine2: "Confiança que você percebe.",
    heroSubtitle:
      "Banho, tosa e um dia inteiro de daycare — sempre no ritmo do seu pet, a poucos passos de casa, no Rio Branco.",
    ctaHeading: "Seu pet merece cuidado sem pressa.",
    ctaSubtitle:
      "Marque um horário e deixe seu companheiro em boas mãos, com atenção individual do começo ao fim.",
  });
  console.log("✓ siteSettings criado");

  const services = [
    {
      id: "banho-secagem",
      name: "Banho e Secagem",
      price: "A partir de R$60",
      description:
        "Banho completo com secagem cuidadosa, no ritmo de cada pet. A porta de entrada para uma rotina de higiene mais leve.",
      featured: true,
      order: 1,
    },
    {
      id: "tosa-higienica",
      name: "Tosa Higiênica",
      price: "R$80",
      description:
        "Aparo das áreas íntimas, patas e focinho — conforto no dia a dia, sem mexer no resto do pelo.",
      featured: false,
      order: 2,
    },
    {
      id: "tosa-completa",
      name: "Tosa Completa",
      price: "R$120",
      description:
        "Tosa do corpo todo, ajustada à raça e à textura do pelo, com acabamento caprichado.",
      featured: true,
      order: 3,
    },
    {
      id: "daycare",
      name: "Daycare",
      price: "R$45 / diária",
      description:
        "Um dia de companhia e movimento para quando a rotina não permite deixar o pet sozinho em casa.",
      featured: false,
      order: 4,
    },
    {
      id: "racoes-acessorios",
      name: "Rações & Acessórios",
      price: "Marcas selecionadas",
      description:
        "Uma curadoria enxuta de rações e itens do dia a dia — só o que faz sentido levar para casa.",
      featured: false,
      order: 5,
    },
    {
      id: "bem-estar",
      name: "Bem-estar & Vacinação",
      price: "Sob consulta",
      description:
        "Orientação sobre cuidados e encaminhamento para vacinação — conversa com quem entende do seu pet.",
      featured: false,
      order: 6,
    },
  ];

  for (const s of services) {
    await client.createOrReplace({
      _id: `service-${s.id}`,
      _type: "service",
      name: s.name,
      price: s.price,
      description: s.description,
      featured: s.featured,
      order: s.order,
    });
  }
  console.log(`✓ ${services.length} serviços criados`);

  const differentials = [
    {
      id: "equipe",
      title: "Equipe especializada",
      description:
        "Profissionais com experiência em comportamento animal e técnicas suaves de manejo.",
      order: 1,
    },
    {
      id: "produtos",
      title: "Produtos selecionados",
      description:
        "Uma curadoria enxuta de rações e acessórios, escolhidos pensando na saúde e no conforto dos pets.",
      order: 2,
    },
    {
      id: "ambiente",
      title: "Ambiente acolhedor",
      description:
        "Rotina e espaços pensados para reduzir a ansiedade durante o atendimento.",
      order: 3,
    },
  ];

  for (const d of differentials) {
    await client.createOrReplace({
      _id: `differential-${d.id}`,
      _type: "differential",
      title: d.title,
      description: d.description,
      order: d.order,
    });
  }
  console.log(`✓ ${differentials.length} diferenciais criados`);

  const testimonials = [
    {
      id: "mariana",
      name: "Mariana S.",
      quote:
        "Equipe incrível, meu cachorro saiu novo e muito feliz. Atendimento carinhoso!",
      order: 1,
    },
    {
      id: "carlos",
      name: "Carlos P.",
      quote:
        "Tosa perfeita, recomendo para quem procura cuidado e atenção de verdade.",
      order: 2,
    },
    {
      id: "ana",
      name: "Ana L.",
      quote:
        "Ótimo espaço e profissionais atenciosos. Me sinto seguro deixando meu gato.",
      order: 3,
    },
  ];

  for (const t of testimonials) {
    await client.createOrReplace({
      _id: `testimonial-${t.id}`,
      _type: "testimonial",
      name: t.name,
      quote: t.quote,
      order: t.order,
    });
  }
  console.log(`✓ ${testimonials.length} depoimentos criados`);

  console.log("\nTudo pronto! ✨");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
