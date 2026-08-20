import { Clock, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { InstagramIcon } from "@/components/ui/instagram-icon";
import { ContactForm } from "./contact-form";
import { business, buildWhatsAppLink, defaultWhatsAppMessage } from "@/lib/business";
import type { SiteSettings, ServiceItem } from "@/lib/sanity-data";

export function Contact({
  settings,
  services,
}: {
  settings: SiteSettings;
  services?: ServiceItem[];
}) {
  return (
    <section id="contato" className="scroll-mt-24 bg-cream-medium py-24 md:py-32">
      <Container>
        <div className="max-w-xl">
          <Reveal>
            <SectionLabel>Contato</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.75rem)] leading-[1.15] text-ink">
              Agende horários, tire dúvidas ou venha nos visitar
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-col gap-8">
            <Reveal>
              <ul className="space-y-5">
                <li className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-light text-forest-deep">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-medium text-ink">{settings.addressLine}</p>
                    <p className="text-[0.92rem] text-ink-soft">
                      {settings.neighborhood}, {settings.city} - {settings.state}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-light text-forest-deep">
                    <Clock className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-medium text-ink">Horário de funcionamento</p>
                    <p className="text-[0.92rem] text-ink-soft">{settings.hoursDisplay}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-light text-forest-deep">
                    <WhatsAppIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-medium text-ink">WhatsApp</p>
                    <a
                      href={buildWhatsAppLink(defaultWhatsAppMessage, settings.whatsappNumber)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.92rem] text-ink-soft transition-colors hover:text-forest"
                    >
                      {settings.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-light text-forest-deep">
                    <InstagramIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-medium text-ink">Instagram</p>
                    <a
                      href={settings.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.92rem] text-ink-soft transition-colors hover:text-forest"
                    >
                      {settings.instagramHandle}
                    </a>
                  </div>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.08} className="flex flex-wrap gap-3">
              <Button
                href={settings.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                icon={<MapPin className="h-4 w-4" />}
                iconPosition="left"
              >
                Abrir no Google Maps
              </Button>
              <Button
                href={buildWhatsAppLink(defaultWhatsAppMessage, settings.whatsappNumber)}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                icon={<WhatsAppIcon className="h-4 w-4" />}
                iconPosition="left"
              >
                Chamar no WhatsApp
              </Button>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-lg)] border border-ink/[0.07] sm:aspect-[16/10]">
                <iframe
                  src={business.googleMapsEmbedSrc}
                  title={`Mapa — ${business.name}, ${business.addressFull}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full grayscale-[15%]"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-[var(--radius-lg)] border border-ink/[0.07] bg-card p-7 md:p-9">
              <h3 className="font-display text-xl text-ink">Pré-agendamento</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-soft">
                Preencha e enviamos direto para o nosso WhatsApp — respondemos rápido.
              </p>
              <div className="mt-6">
                <ContactForm whatsappNumber={settings.whatsappNumber} services={services} />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
