import type { Metadata } from "next";
import { Playfair_Display, Space_Grotesk } from "next/font/google";
import { Providers } from "@/components/providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { business } from "@/lib/business";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// SUBSTITUIR pelo domínio definitivo quando o site for publicado.
const siteUrl = "https://www.quintalpetshop.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Quintal Pet Shop | Banho, Tosa e Daycare no Rio Branco, Porto Alegre",
    template: "%s | Quintal Pet Shop",
  },
  description:
    "Pet shop no bairro Rio Branco, Porto Alegre. Banho, tosa, daycare e uma seleção de rações e acessórios com atendimento próximo e cuidadoso. Agende pelo WhatsApp.",
  keywords: [
    "pet shop Porto Alegre",
    "pet shop Rio Branco",
    "banho e tosa Porto Alegre",
    "daycare para cães Porto Alegre",
    "tosa de cachorro Porto Alegre",
  ],
  authors: [{ name: business.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: business.name,
    title: "Quintal Pet Shop | Banho, Tosa e Daycare no Rio Branco, Porto Alegre",
    description:
      "Cuidado completo para cães e gatos: banho, tosa e daycare com atenção individual, no Rio Branco, Porto Alegre.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quintal Pet Shop | Banho, Tosa e Daycare no Rio Branco, Porto Alegre",
    description:
      "Cuidado completo para cães e gatos: banho, tosa e daycare com atenção individual, no Rio Branco, Porto Alegre.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PetStore",
  name: business.name,
  image: `${siteUrl}/images/hero/facade.jpg`,
  url: siteUrl,
  telephone: "+5551993393445",
  priceRange: "R$45–R$120",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${business.addressLine} - ${business.neighborhood}`,
    addressLocality: business.city,
    addressRegion: business.state,
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  sameAs: [business.instagramUrl],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating,
    reviewCount: business.reviewCount,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${spaceGrotesk.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest focus:px-5 focus:py-2.5 focus:text-cream"
          >
            Pular para o conteúdo
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </Providers>
      </body>
    </html>
  );
}
