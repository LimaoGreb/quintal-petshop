"use client";

import { Droplets, HeartPulse, Scissors, ShoppingBag, Sun } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { RealPhoto } from "@/components/ui/real-photo";
import { Reveal } from "@/components/ui/reveal";
import { gridStagger, fadeUp, transitionStandard } from "@/lib/motion";
import { services } from "@/lib/business";
import { motion } from "motion/react";

const icons: Record<string, LucideIcon> = {
  "banho-secagem": Droplets,
  "tosa-higienica": Scissors,
  "tosa-completa": Scissors,
  daycare: Sun,
  "racoes-acessorios": ShoppingBag,
  "bem-estar": HeartPulse,
};

const photos: Record<string, { src: string; alt: string }> = {
  "banho-secagem": {
    src: "/images/services/banho-secagem.jpg",
    alt: "Cão de porte pequeno recém-banhado sobre a mesa de tosa do Quintal",
  },
  "tosa-completa": {
    src: "/images/services/tosa-completa.jpg",
    alt: "Spitz alemão com laço, com o pelo tosado, no Quintal Pet Shop",
  },
};

/**
 * Posicionamento do bento em telas grandes (grid 4 colunas x 3 linhas).
 * Mobile/tablet ignoram isso e empilham em ordem natural (1 coluna).
 */
const bentoPosition: Record<string, string> = {
  "banho-secagem": "lg:col-start-1 lg:row-start-1 lg:col-span-2 lg:row-span-2",
  "tosa-completa": "lg:col-start-3 lg:row-start-1 lg:col-span-2 lg:row-span-1",
  "tosa-higienica": "lg:col-start-3 lg:row-start-2 lg:col-span-1 lg:row-span-1",
  daycare: "lg:col-start-4 lg:row-start-2 lg:col-span-1 lg:row-span-1",
  "racoes-acessorios": "lg:col-start-1 lg:row-start-3 lg:col-span-2 lg:row-span-1",
  "bem-estar": "lg:col-start-3 lg:row-start-3 lg:col-span-2 lg:row-span-1",
};

export function Services() {
  const featured = new Set(["banho-secagem", "tosa-completa"]);

  return (
    <section id="servicos" className="scroll-mt-24 bg-cream py-24 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>Nossos serviços</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.75rem)] leading-[1.15] text-ink">
              Cuidado completo, do banho ao dia inteiro de daycare
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
              Cada serviço tem seu próprio ritmo — pensado para o conforto do seu pet, não
              para uma linha de produção.
            </p>
          </Reveal>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          variants={gridStagger}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(160px,auto)]"
        >
          {services.map((service) => {
            const Icon = icons[service.id];
            const isFeatured = featured.has(service.id);

            return (
              <motion.article
                key={service.id}
                variants={fadeUp}
                transition={transitionStandard}
                className={
                  (isFeatured
                    ? "group relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-[var(--radius-lg)] p-7 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1"
                    : "group relative flex flex-col justify-between rounded-[var(--radius-lg)] border border-ink/[0.07] bg-card p-7 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-forest/25 hover:shadow-[0_16px_40px_-20px_rgba(27,31,34,0.18)]") +
                  " " +
                  bentoPosition[service.id]
                }
              >
                {isFeatured ? (
                  <>
                    <RealPhoto
                      src={photos[service.id].src}
                      alt={photos[service.id].alt}
                      rounded="rounded-[var(--radius-lg)]"
                      className="absolute inset-0 h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
                    <div className="relative">
                      <Icon className="h-6 w-6 text-cream/80" strokeWidth={1.5} />
                      <h3 className="mt-3 font-display text-2xl text-cream">{service.name}</h3>
                      <p className="mt-2 max-w-sm text-[0.92rem] leading-relaxed text-cream/75">
                        {service.description}
                      </p>
                      <p className="mt-4 text-[0.95rem] font-semibold text-cream">
                        {service.price}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-light text-forest-deep transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div className="mt-5">
                      <h3 className="font-display text-xl text-ink">{service.name}</h3>
                      <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-soft">
                        {service.description}
                      </p>
                    </div>
                    <p className="mt-5 text-[0.92rem] font-semibold text-forest">
                      {service.price}
                    </p>
                  </>
                )}
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
