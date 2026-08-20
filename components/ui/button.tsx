import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "dark";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[0.95rem] font-medium tracking-[-0.01em] transition-all duration-[280ms] ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-terracotta disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-terracotta text-cream shadow-[0_1px_2px_rgba(27,31,34,0.08)] hover:bg-[#c73f14] hover:shadow-[0_6px_20px_-4px_rgba(227,74,28,0.45)] hover:-translate-y-0.5",
  secondary:
    "bg-transparent text-ink border border-ink/15 hover:border-forest hover:text-forest hover:-translate-y-0.5",
  ghost: "bg-forest-light text-forest-deep hover:bg-[#d5e4d1] hover:-translate-y-0.5",
  dark: "bg-cream text-night hover:bg-white hover:-translate-y-0.5",
};

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export function Button({
  href = "#",
  variant = "primary",
  icon,
  iconPosition = "right",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...props}>
      {icon && iconPosition === "left" && (
        <span className="transition-transform duration-[280ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="transition-transform duration-[280ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </Link>
  );
}
