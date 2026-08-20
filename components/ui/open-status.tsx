"use client";

import { useOpenStatus } from "@/hooks/useOpenStatus";
import { cn } from "@/lib/utils";

export function OpenStatus({
  className,
  openDays,
  openHour,
  closeHour,
}: {
  className?: string;
  openDays: readonly number[];
  openHour: number;
  closeHour: number;
}) {
  const { isOpen, ready } = useOpenStatus({ openDays, openHour, closeHour });

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-[0.88rem] font-medium",
        !ready && "opacity-0",
        className
      )}
      aria-live="polite"
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          isOpen ? "bg-forest" : "bg-ink-faint"
        )}
        aria-hidden="true"
      />
      {isOpen ? "Aberto agora" : "Fechado no momento"}
    </span>
  );
}
