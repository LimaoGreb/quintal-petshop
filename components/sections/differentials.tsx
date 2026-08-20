import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { DifferentialsGrid } from "./differentials-grid";

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="relative -mt-10 scroll-mt-24 rounded-t-[48px] bg-night pb-24 pt-20 md:-mt-14 md:rounded-t-[80px] md:pb-32 md:pt-28"
    >
      {/* Glow ambiente sutil — profundidade, não decoração gratuita */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] opacity-[0.18]"
        style={{
          background:
            "radial-gradient(600px circle at 50% 0%, var(--color-forest-light), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="max-w-xl">
          <Reveal>
            <SectionLabel tone="dark">Por que escolher</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.75rem)] leading-[1.15] text-cream">
              Diferenciais do Quintal
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-cream/60">
              Espaço pensado para reduzir o estresse, equipe atenta e uma curadoria enxuta de
              produtos para a saúde do seu animal.
            </p>
          </Reveal>
        </div>

        <DifferentialsGrid />
      </Container>
    </section>
  );
}
