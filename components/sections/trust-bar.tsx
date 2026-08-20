import { Clock, MapPin, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { CountUp } from "@/components/ui/count-up";
import { OpenStatus } from "@/components/ui/open-status";
import { business } from "@/lib/business";

export function TrustBar() {
  return (
    <section className="border-y border-ink/[0.06] bg-cream-medium">
      <Container className="flex flex-wrap items-center justify-between gap-x-10 gap-y-4 py-6 text-ink-soft">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5 text-terracotta">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <p className="text-[0.92rem]">
            <span className="font-semibold text-ink">{business.rating.toFixed(1)}</span> ·{" "}
            <CountUp to={business.reviewCount} /> avaliações no Google
          </p>
        </div>

        <div className="flex items-center gap-2 text-[0.92rem]">
          <MapPin className="h-4 w-4 text-forest" />
          {business.neighborhood} — {business.city}
        </div>

        <div className="flex items-center gap-2 text-[0.92rem]">
          <Clock className="h-4 w-4 text-forest" />
          {business.hoursShort}
        </div>

        <OpenStatus />
      </Container>
    </section>
  );
}
