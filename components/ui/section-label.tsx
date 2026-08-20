import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[0.8rem] font-medium uppercase tracking-[0.14em]",
        tone === "light" ? "text-forest" : "text-forest-light/80",
        className
      )}
    >
      <span
        className={cn("h-px w-6", tone === "light" ? "bg-terracotta" : "bg-terracotta")}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}
