"use client";

import { MotionConfig } from "motion/react";
import { EASE_EDITORIAL, DURATION } from "@/lib/motion";

/**
 * Provider global de motion. `reducedMotion="user"` faz o Motion respeitar
 * automaticamente `prefers-reduced-motion` em toda a árvore, sem precisar
 * checar a media query manualmente em cada componente.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: DURATION.standard, ease: EASE_EDITORIAL }}>
      {children}
    </MotionConfig>
  );
}
