import { MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { InstagramIcon } from "@/components/ui/instagram-icon";
import { navLinks } from "./nav-links";
import { buildWhatsAppLink, defaultWhatsAppMessage } from "@/lib/business";
import type { SiteSettings } from "@/lib/sanity-data";

export function Footer({ settings }: { settings: SiteSettings }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-night text-cream/70">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr] md:py-20">
        <div>
          <span className="font-display text-2xl text-cream">Quintal Pet Shop</span>
          <p className="mt-4 max-w-xs text-[0.95rem] leading-relaxed text-cream/55">
            Banho, tosa e daycare com atenção individual, no coração do Rio Branco, em Porto
            Alegre.
          </p>
        </div>

        <div>
          <h3 className="text-[0.78rem] font-medium uppercase tracking-[0.14em] text-cream/40">
            Navegação
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[0.95rem] text-cream/70 transition-colors hover:text-cream"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[0.78rem] font-medium uppercase tracking-[0.14em] text-cream/40">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 text-[0.95rem] text-cream/70">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
              <span>{settings.addressFull}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
              <span>{settings.hoursDisplay}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
              <a
                href={buildWhatsAppLink(defaultWhatsAppMessage, settings.whatsappNumber)}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-cream"
              >
                {settings.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <InstagramIcon className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
              <a
                href={settings.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-cream"
              >
                {settings.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-cream/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-[0.82rem] text-cream/40 md:flex-row">
          <span>
            © {year} Quintal Pet Shop. Todos os direitos reservados.
          </span>
          <span>Rio Branco, Porto Alegre — RS</span>
        </Container>
      </div>
    </footer>
  );
}
