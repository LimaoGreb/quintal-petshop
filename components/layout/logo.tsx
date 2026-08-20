import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Wordmark baseado na identidade real observada na fachada e no portão do
 * Quintal: "quintal" sempre em minúsculas, em laranja/terracota sólido,
 * numa sans arredondada — por isso usamos a Space Grotesk (nossa fonte de
 * corpo) em vez da serifada, que não tem nada a ver com a marca real deles.
 */
export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <Link
      href="#top"
      className="group flex items-center gap-2"
      aria-label="Quintal Pet Shop — voltar ao topo"
    >
      <span
        className={cn(
          "font-body text-[1.45rem] font-bold leading-none tracking-[-0.01em] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5",
          tone === "light" ? "text-terracotta" : "text-cream"
        )}
      >
        quintal
      </span>
      <span
        className={cn(
          "hidden text-[0.62rem] font-medium uppercase tracking-[0.16em] sm:block",
          tone === "light" ? "text-ink-faint" : "text-cream/50"
        )}
      >
        pet shop
      </span>
    </Link>
  );
}
