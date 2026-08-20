"use client";

import { motion, type Transition, type Variants } from "motion/react";
import { fadeUp, transitionStandard } from "@/lib/motion";

interface RevealProps {
  children: React.ReactNode;
  variants?: Variants;
  transition?: Transition;
  className?: string;
  delay?: number;
  as?: "div" | "li";
}

/**
 * Wrapper de scroll-reveal padrão: dispara uma única vez, com margem
 * antecipada para não parecer atrasado. Troque `variants`/`transition`
 * para variar o comportamento (fadeUp, photoReveal…) mantendo o mesmo gatilho.
 */
export function Reveal({
  children,
  variants = fadeUp,
  transition = transitionStandard,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const Component = motion[as];
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={variants}
      transition={{ ...transition, delay }}
      className={className}
    >
      {children}
    </Component>
  );
}
