import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { RealPhoto } from "@/components/ui/real-photo";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Reveal } from "@/components/ui/reveal";
import { buildWhatsAppLink, defaultWhatsAppMessage } from "@/lib/business";
import type { SiteSettings } from "@/lib/sanity-data";

export function CtaEmotional({ settings }: { settings: SiteSettings }) {
  return (
    <section className="relative overflow-hidden bg-cream py-24 md:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-[var(--radius-xl)]">
          <RealPhoto
            src="/images/hero/facade.jpg"
            alt="Fachada do Quintal Pet Shop"
            rounded="rounded-[var(--radius-xl)]"
            className="absolute inset-0 h-full w-full"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/35 to-ink/10" />

          <div className="relative flex min-h-[380px] flex-col items-center justify-center px-6 py-20 text-center md:min-h-[440px]">
            <Reveal>
              <h2 className="max-w-2xl font-display text-[clamp(2.1rem,5vw,3.25rem)] leading-[1.15] text-cream">
                {settings.ctaHeading}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 max-w-lg text-[1.02rem] leading-relaxed text-cream/75">
                {settings.ctaSubtitle}
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-8">
                <Button
                  href={buildWhatsAppLink(defaultWhatsAppMessage, settings.whatsappNumber)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  icon={<WhatsAppIcon className="h-4 w-4" />}
                  iconPosition="left"
                >
                  Agendar pelo WhatsApp
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
