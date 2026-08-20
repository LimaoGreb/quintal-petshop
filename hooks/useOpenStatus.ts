"use client";

import { useEffect, useState } from "react";
import { business } from "@/lib/business";

interface OpenStatus {
  isOpen: boolean;
  /** null enquanto o cálculo ainda não rodou no cliente (evita mismatch de hidratação) */
  ready: boolean;
}

function computeIsOpen(): boolean {
  const now = new Date();

  // Extrai dia da semana e hora no fuso America/Sao_Paulo, independente do fuso do dispositivo.
  const weekday = new Intl.DateTimeFormat("en-US", {
    timeZone: business.timezone,
    weekday: "short",
  }).format(now);
  const hour = Number(
    new Intl.DateTimeFormat("en-US", {
      timeZone: business.timezone,
      hour: "numeric",
      hour12: false,
    }).format(now)
  );

  const weekdayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };
  const dayIndex = weekdayMap[weekday];

  const isOpenDay = (business.openDays as readonly number[]).includes(dayIndex);
  const isOpenHour = hour >= business.openHour && hour < business.closeHour;

  return isOpenDay && isOpenHour;
}

/**
 * Calcula "aberto agora" em tempo real, no fuso America/Sao_Paulo.
 * Roda apenas no cliente para evitar depender do relógio/fuso do servidor
 * e reavalia a cada minuto.
 */
export function useOpenStatus(): OpenStatus {
  const [state, setState] = useState<OpenStatus>({ isOpen: false, ready: false });

  useEffect(() => {
    // Depende do relógio/fuso do cliente — não pode ser calculado no
    // servidor sem arriscar mismatch de hidratação, então é sincronizado
    // aqui e recalculado a cada minuto.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState({ isOpen: computeIsOpen(), ready: true });
    const interval = setInterval(() => {
      setState({ isOpen: computeIsOpen(), ready: true });
    }, 60_000);
    return () => clearInterval(interval);
  }, []);

  return state;
}
