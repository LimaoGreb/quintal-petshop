import type { Transition, Variants } from "motion/react";

/**
 * MOTION SYSTEM — Quintal Pet Shop
 * Um único vocabulário de movimento: opacity, translateY/X pequenos,
 * scale sutil, easing editorial consistente. Nada de bounce, elastic
 * ou velocidades divergentes entre elementos.
 */

export const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  fast: 0.28, // hover, botões, toggles
  standard: 0.5, // cards, títulos, blocos de seção
  editorial: 0.75, // hero, fotografias grandes
} as const;

export const transitionFast: Transition = {
  duration: DURATION.fast,
  ease: EASE_EDITORIAL,
};

export const transitionStandard: Transition = {
  duration: DURATION.standard,
  ease: EASE_EDITORIAL,
};

export const transitionEditorial: Transition = {
  duration: DURATION.editorial,
  ease: EASE_EDITORIAL,
};

/**
 * Os variants abaixo definem apenas os estados (hidden/visible). A duração e
 * o easing vêm sempre do `transition` aplicado no componente (ver Reveal),
 * para que `delay` de stagger componha corretamente sem sobrescrever o
 * timing de cada variante.
 */

/** Fade + subida curta. Uso padrão para texto e blocos. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/** Variante mais rápida para linhas de headline (bloco a bloco, não letra a letra). */
export const fadeUpLine: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

/** Reveal fotográfico — clip-path + scale, distinto do texto. */
export const photoReveal: Variants = {
  hidden: { opacity: 0, scale: 1.04, clipPath: "inset(6% 6% 6% 6% round 24px)" },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: "inset(0% 0% 0% 0% round 24px)",
  },
};

/** Container para orquestrar stagger de filhos. */
export function staggerContainer(stagger = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}

/** Contagem de grid de cards. */
export const gridStagger = staggerContainer(0.07);

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
