"use client";

import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { testimonials as defaultTestimonials } from "@/lib/business";
import type { SiteSettings } from "@/lib/sanity-data";
import { gridStagger, fadeUp, transitionStandard } from "@/lib/motion";

export function Testimonials({
  testimonials = defaultTestimonials,
  settings,
}: {
  testimonials?: typeof defaultTestimonials;
  settings: SiteSettings;
}) {
  return (
    <section id="avaliacoes" className="scroll-mt-24 bg-cream py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Reveal>
              <SectionLabel>Depoimentos</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.75rem)] leading-[1.15] text-ink">
                Histórias de quem confia no Quintal
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="flex items-center gap-1.5 rounded-full border border-ink/10 bg-card px-4 py-2">
              <div className="flex items-center gap-0.5 text-terracotta">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <span className="text-[0.85rem] text-ink-soft">
                {settings.rating.toFixed(1)} · {settings.reviewCount} avaliações no Google
              </span>
            </div>
          </Reveal>
        </div>

        {/* Todos os depoimentos visíveis de uma vez — com poucos itens, um
            carrossel só adiciona controles pra navegar entre "quase tudo
            já visível". Se a lista crescer, o grid quebra linha sozinho. */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          variants={gridStagger}
          className="mt-12 grid gap-5 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              transition={transitionStandard}
              className="flex flex-col justify-between rounded-[var(--radius-lg)] border border-ink/[0.07] bg-card p-8 md:p-10"
            >
              <Quote className="h-8 w-8 text-terracotta/40" strokeWidth={1.5} />
              <blockquote className="mt-5 font-display text-[1.35rem] leading-snug text-ink">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between">
                <span className="text-[0.95rem] font-medium text-ink-soft">{t.name}</span>
                <span className="flex items-center gap-0.5 text-terracotta">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
