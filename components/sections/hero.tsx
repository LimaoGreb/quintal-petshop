"use client";

import { motion } from "motion/react";
import { ArrowRight, Clock, MapPin, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { RealPhoto } from "@/components/ui/real-photo";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { buildWhatsAppLink, defaultWhatsAppMessage } from "@/lib/business";
import type { SiteSettings } from "@/lib/sanity-data";
import { transitionEditorial, transitionStandard } from "@/lib/motion";

const line = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function Hero({ settings }: { settings: SiteSettings }) {
  return (
    <section className="relative isolate overflow-hidden bg-cream texture-paper pb-14 pt-28 md:pt-32 lg:flex lg:min-h-[92vh] lg:items-center lg:pb-0 lg:pt-24">
      {/* Fotografia principal — bleed até a borda direita da viewport em telas grandes */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] lg:block xl:w-[50%]">
        <motion.div
          className="relative h-full w-full"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 1.04, clipPath: "inset(4% 0% 4% 6% round 0px 0px 0px 64px)" },
            visible: { opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0% round 0px 0px 0px 64px)" },
          }}
          transition={{ ...transitionEditorial, delay: 0.15 }}
        >
          <RealPhoto
            src="/images/hero/facade.jpg"
            alt="Fachada do Quintal Pet Shop, com mural pintado e entrada para o parquinho"
            rounded="rounded-none rounded-l-[64px]"
            className="h-full w-full"
            priority
            sizes="50vw"
          />
        </motion.div>

        {/* Cartão flutuante de prova social sobre a fotografia */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transitionStandard, delay: 0.75 }}
          className="pointer-events-auto absolute bottom-10 left-10 flex items-center gap-3 rounded-2xl bg-cream/95 px-5 py-4 shadow-[0_20px_40px_-16px_rgba(27,31,34,0.25)] backdrop-blur-sm"
        >
          <div className="flex items-center gap-0.5 text-terracotta">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-current" />
            ))}
          </div>
          <div className="h-8 w-px bg-ink/10" />
          <p className="text-sm text-ink-soft">
            <span className="font-semibold text-ink">{settings.rating.toFixed(1)}</span> ·{" "}
            {settings.reviewCount} avaliações
          </p>
        </motion.div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-xl lg:max-w-[480px]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transitionStandard}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-forest-light px-4 py-1.5 text-[0.78rem] font-medium uppercase tracking-[0.12em] text-forest-deep">
              <MapPin className="h-3.5 w-3.5" />
              Pet Shop · Rio Branco
            </span>
          </motion.div>

          <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,3.75rem)] leading-[1.08] tracking-[-0.01em] text-ink">
            <motion.span
              className="block overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { delayChildren: 0.15 } } }}
            >
              <motion.span className="block" variants={line} transition={{ ...transitionStandard, delay: 0.15 }}>
                {settings.heroHeadlineLine1}
              </motion.span>
            </motion.span>
            <motion.span className="block overflow-hidden">
              <motion.span
                className="block text-forest"
                variants={line}
                initial="hidden"
                animate="visible"
                transition={{ ...transitionStandard, delay: 0.28 }}
              >
                {settings.heroHeadlineLine2}
              </motion.span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitionStandard, delay: 0.4 }}
            className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-ink-soft"
          >
            {settings.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitionStandard, delay: 0.5 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button
              href={buildWhatsAppLink(defaultWhatsAppMessage, settings.whatsappNumber)}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              icon={<WhatsAppIcon className="h-4 w-4" />}
              iconPosition="left"
            >
              Agendar no WhatsApp
            </Button>
            <Button href="#servicos" variant="secondary" icon={<ArrowRight className="h-4 w-4" />}>
              Ver serviços
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...transitionStandard, delay: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.88rem] text-ink-faint"
          >
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-terracotta" />
              {settings.hoursShort}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-terracotta" />
              {settings.neighborhood}, {settings.city}
            </span>
          </motion.div>
        </div>

        {/* Fotografia mobile — abaixo do conteúdo */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transitionEditorial, delay: 0.3 }}
          className="mt-10 lg:hidden"
        >
          <RealPhoto
            src="/images/hero/facade.jpg"
            alt="Fachada do Quintal Pet Shop, com mural pintado e entrada para o parquinho"
            className="aspect-[4/5] w-full sm:aspect-[16/10]"
            priority
            sizes="100vw"
          />
        </motion.div>
      </Container>

      {/* Indicador de scroll — discreto, nunca compete com o CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        aria-hidden="true"
      >
        <span className="h-9 w-px bg-gradient-to-b from-ink/0 via-ink/25 to-ink/0" />
      </motion.div>
    </section>
  );
}
