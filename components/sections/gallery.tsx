"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { RealPhoto } from "@/components/ui/real-photo";
import { InstagramIcon } from "@/components/ui/instagram-icon";
import { Reveal } from "@/components/ui/reveal";
import { gridStagger, fadeUp, transitionStandard } from "@/lib/motion";
import { business } from "@/lib/business";

const photos = [
  {
    key: "chow",
    src: "/images/gallery/chow.jpg",
    alt: "Chow chow feliz nos braços do tutor, no Quintal Pet Shop",
    span: "lg:col-span-2 lg:row-span-2",
    aspect: "aspect-[4/5] lg:aspect-auto",
  },
  {
    key: "equipe",
    src: "/images/gallery/equipe-loja.jpg",
    alt: "Equipe do Quintal Pet Shop com um pet na entrada da loja",
    span: "lg:col-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    key: "produtos",
    src: "/images/services/racoes-acessorios.jpg",
    alt: "Prateleiras com rações e acessórios no Quintal Pet Shop",
    span: "lg:col-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    key: "acabamento",
    src: "/images/gallery/acabamento.jpg",
    alt: "Pet com o pelo do rosto decorado após a tosa, no Quintal Pet Shop",
    span: "lg:col-span-1",
    aspect: "aspect-square",
  },
  {
    key: "parquinho",
    src: "/images/gallery/daycare-dupla.jpg",
    alt: "Dupla de cães no parquinho do Quintal, em frente à sala de banho e tosa",
    span: "lg:col-span-2",
    aspect: "aspect-[16/9]",
  },
];

export function Gallery() {
  return (
    <section id="galeria" className="scroll-mt-24 bg-cream-medium py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Reveal>
              <SectionLabel>Galeria</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.75rem)] leading-[1.15] text-ink">
                Carinho que dá para ver
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[0.95rem] font-medium text-forest transition-colors hover:text-forest-deep"
            >
              <InstagramIcon className="h-4 w-4" />
              Ver mais no Instagram
              <span className="text-ink-faint">{business.instagramHandle}</span>
              <span className="relative -ml-1 inline-block h-px w-0 bg-forest transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-4" />
            </a>
          </Reveal>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          variants={gridStagger}
          className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:grid-rows-2"
        >
          {photos.map((photo) => (
            <motion.div
              key={photo.key}
              variants={fadeUp}
              transition={transitionStandard}
              className={`${photo.span} ${photo.aspect} col-span-2 sm:col-span-1 first:col-span-2 first:sm:col-span-2`}
            >
              <RealPhoto
                src={photo.src}
                alt={photo.alt}
                className="group h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02]"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
