import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

type Tone = "sand" | "green" | "terracotta" | "ink";

const toneStyles: Record<Tone, string> = {
  sand: "from-[#f3e9d4] via-[#ede0c6] to-[#e4d5b8]",
  green: "from-[#e3ecdf] via-[#d3e2cd] to-[#c2d6bc]",
  terracotta: "from-[#f7ded1] via-[#f0c8b4] to-[#e6b39c]",
  ink: "from-[#2a352e] via-[#1e2620] to-[#141a16]",
};

/**
 * PLACEHOLDER FOTOGRÁFICO — SUBSTITUIR POR IMAGEM REAL.
 *
 * Não representa uma foto real do estabelecimento. Assim que houver
 * fotografia real, troque este componente por:
 *
 *   <Image src="/images/.../arquivo.jpg" alt="..." fill className="object-cover" />
 *
 * dentro do mesmo contêiner (mantém aspect-ratio e radius).
 * `label` documenta qual foto deve entrar nesse espaço.
 */
export function PhotoPlaceholder({
  label,
  tone = "sand",
  className,
  rounded = "rounded-[var(--radius-lg)]",
  showIcon = true,
}: {
  label: string;
  tone?: Tone;
  className?: string;
  rounded?: string;
  showIcon?: boolean;
}) {
  const isDark = tone === "ink";
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br",
        toneStyles[tone],
        rounded,
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-[0.35] mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(27,31,34,0.12) 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
        aria-hidden="true"
      />
      {showIcon && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            isDark ? "text-cream/15" : "text-ink/10"
          )}
          aria-hidden="true"
        >
          <Camera strokeWidth={1.1} className="h-10 w-10" />
        </div>
      )}
      <div
        className={cn(
          "absolute bottom-3 left-3 rounded-full px-3 py-1 text-[0.68rem] font-medium tracking-[0.02em] backdrop-blur-sm",
          isDark ? "bg-cream/10 text-cream/70" : "bg-ink/8 text-ink/55"
        )}
      >
        {label}
      </div>
    </div>
  );
}
