import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Fotografia real (substitui o PhotoPlaceholder quando já existe um asset
 * em /public/images). Mesma API de contêiner — aspect-ratio e radius ficam
 * no wrapper, aqui só preenchemos com `fill` + `object-cover`.
 */
export function RealPhoto({
  src,
  alt,
  className,
  rounded = "rounded-[var(--radius-lg)]",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  src: string;
  alt: string;
  className?: string;
  rounded?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden", rounded, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
