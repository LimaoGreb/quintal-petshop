import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  as: Component = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer";
}) {
  return (
    <Component className={cn("mx-auto w-full max-w-[1320px] px-6 md:px-10", className)}>
      {children}
    </Component>
  );
}
