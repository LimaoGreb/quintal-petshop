import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { RealPhoto } from "@/components/ui/real-photo";
import { DragScroller } from "@/components/ui/drag-scroller";
import { Reveal } from "@/components/ui/reveal";
import { photoReveal, transitionEditorial } from "@/lib/motion";

const spaceShots = [
  {
    src: "/images/about/strip-1.jpg",
    alt: "Prateleira de produtos de bem-estar do Quintal Pet Shop",
  },
  {
    src: "/images/about/strip-2.jpg",
    alt: "Pessoa da equipe brincando com um filhote no parquinho do Quintal",
  },
  {
    src: "/images/about/strip-3.jpg",
    alt: "Cão no espaço externo do daycare do Quintal Pet Shop",
  },
  {
    src: "/images/about/strip-4.jpg",
    alt: "Mural pintado na fachada do Quintal Pet Shop, com um gato e um cão",
  },
  {
    src: "/images/about/strip-5.jpg",
    alt: "Entrada do Quintal Pet Shop vista de dentro do parquinho",
  },
];

export function AboutSpace() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div className="max-w-md">
            <Reveal>
              <SectionLabel>Conheça o Quintal</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.75rem)] leading-[1.15] text-ink">
                Um espaço para deixar a ansiedade lá fora
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-[1.02rem] leading-relaxed text-ink-soft">
                Rotina, cheiros e sons pensados para que o seu pet chegue tranquilo — e você
                saia tranquilo também. Atendimento sempre com hora marcada, para dar atenção
                de verdade a cada um.
              </p>
            </Reveal>
          </div>

          <Reveal variants={photoReveal} transition={transitionEditorial}>
            <RealPhoto
              src="/images/about/entrance.jpg"
              alt="Corredor de entrada do Quintal Pet Shop ao entardecer, com grama sintética até a sala de banho e tosa"
              className="aspect-[16/10] w-full"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
          </Reveal>
        </div>

        <div className="mt-8">
          <DragScroller ariaLabel="Fotografias do espaço">
            {spaceShots.map((shot) => (
              <div key={shot.src} className="w-[72%] shrink-0 snap-start sm:w-[42%] lg:w-[23%]">
                <RealPhoto src={shot.src} alt={shot.alt} className="aspect-[3/4] w-full" sizes="23vw" />
              </div>
            ))}
          </DragScroller>
        </div>
      </Container>
    </section>
  );
}
