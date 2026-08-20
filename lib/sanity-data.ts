import { sanityFetch } from "@/sanity/lib/live";
import {
  business as defaultBusiness,
  services as defaultServices,
  differentials as defaultDifferentials,
  testimonials as defaultTestimonials,
} from "@/lib/business";

/**
 * Camada de dados do site. Busca conteúdo editável no Sanity e devolve no
 * MESMO formato que `lib/business.ts` sempre usou — assim, se o Sanity
 * estiver fora do ar, sem dados ainda, ou faltando algum campo, o site
 * cai de volta pros valores fixos e nunca quebra.
 */

function mergeDefined<T extends object>(base: T, overrides: Partial<T> | null | undefined): T {
  if (!overrides) return base;
  const result = { ...base };
  for (const key of Object.keys(overrides) as (keyof T)[]) {
    const value = overrides[key];
    if (value !== undefined && value !== null) {
      result[key] = value as T[typeof key];
    }
  }
  return result;
}

interface SiteSettingsDoc {
  addressLine?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  phoneDisplay?: string;
  whatsappNumber?: string;
  instagramHandle?: string;
  instagramUrl?: string;
  googleMapsUrl?: string;
  rating?: number;
  reviewCount?: number;
  hoursDisplay?: string;
  hoursShort?: string;
  openDays?: string[];
  openHour?: number;
  closeHour?: number;
  heroHeadlineLine1?: string;
  heroHeadlineLine2?: string;
  heroSubtitle?: string;
  ctaHeading?: string;
  ctaSubtitle?: string;
}

interface ServiceDoc {
  _id: string;
  name: string;
  price: string;
  description: string;
  featured?: boolean;
  order?: number;
}

interface DifferentialDoc {
  title: string;
  description: string;
  order?: number;
}

interface TestimonialDoc {
  name: string;
  quote: string;
  order?: number;
}

const dayIndexByCode: Record<string, number> = {
  sun: 0,
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6,
};

export async function getSiteSettings() {
  const { data } = await sanityFetch({
    query: `*[_type == "siteSettings"][0]`,
  });

  const doc = data as SiteSettingsDoc | null;
  // openDays vem como códigos de texto ("tue") no Sanity — tratado à parte
  // logo abaixo, então não entra nesse merge (tipos incompatíveis: string[] vs number[]).
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { openDays: _openDaysCodes, ...docWithoutOpenDays } = doc ?? {};

  const merged = mergeDefined(
    {
      ...defaultBusiness,
      heroHeadlineLine1: "Cuidado que eles sentem.",
      heroHeadlineLine2: "Confiança que você percebe.",
      heroSubtitle:
        "Banho, tosa e um dia inteiro de daycare — sempre no ritmo do seu pet, a poucos passos de casa, no Rio Branco.",
      ctaHeading: "Seu pet merece cuidado sem pressa.",
      ctaSubtitle:
        "Marque um horário e deixe seu companheiro em boas mãos, com atenção individual do começo ao fim.",
    },
    docWithoutOpenDays
  );

  return {
    ...merged,
    openDays: (doc?.openDays?.map((d) => dayIndexByCode[d]).filter((n) => n !== undefined) ??
      defaultBusiness.openDays) as readonly number[],
    addressFull: `${merged.addressLine} — ${merged.neighborhood}, ${merged.city} - ${merged.state}`,
  };
}

export async function getServices() {
  const { data } = await sanityFetch({
    query: `*[_type == "service"] | order(order asc){ _id, name, price, description, featured }`,
  });
  const docs = data as ServiceDoc[] | null;
  if (!docs || docs.length === 0) return defaultServices;
  return docs.map((d) => ({
    // Os 6 serviços originais mantêm o mesmo "id" interno (ex: banho-secagem),
    // usado para escolher o ícone e a foto certa de cada card. Um serviço
    // novo criado pelo cliente ganha um id genérico e cai no visual padrão.
    id: d._id.replace(/^service-/, ""),
    name: d.name,
    price: d.price,
    description: d.description,
    featured: Boolean(d.featured),
  }));
}

export async function getDifferentials() {
  const { data } = await sanityFetch({
    query: `*[_type == "differential"] | order(order asc){ _id, title, description }`,
  });
  const docs = data as DifferentialDoc[] | null;
  if (!docs || docs.length === 0) return defaultDifferentials;
  return docs;
}

export async function getTestimonials() {
  const { data } = await sanityFetch({
    query: `*[_type == "testimonial"] | order(order asc){ _id, name, quote }`,
  });
  const docs = data as TestimonialDoc[] | null;
  if (!docs || docs.length === 0) return defaultTestimonials;
  return docs;
}

export type SiteSettings = Awaited<ReturnType<typeof getSiteSettings>>;
export type ServiceItem = Awaited<ReturnType<typeof getServices>>[number];
export type DifferentialItem = Awaited<ReturnType<typeof getDifferentials>>[number];
export type TestimonialItem = Awaited<ReturnType<typeof getTestimonials>>[number];
