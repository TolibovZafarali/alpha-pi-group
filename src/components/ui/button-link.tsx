import type { AnchorHTMLAttributes } from "react";

import { ArrowRight, ArrowUpRight } from "lucide-react";

import { cx } from "@/lib/cx";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "dark" | "outline-dark";
  icon?: "arrow-right" | "arrow-up-right" | "none";
};

export function ButtonLink({
  children,
  className,
  icon = "arrow-up-right",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  const Icon = icon === "arrow-right" ? ArrowRight : ArrowUpRight;

  return (
    <a
      className={cx(
        "font-mono inline-flex items-center gap-3 border px-5 py-3 text-[11px] font-medium tracking-[0.28em] uppercase transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variant === "primary"
          ? "border-white bg-white text-black hover:-translate-y-0.5 hover:bg-transparent hover:text-white"
          : variant === "secondary"
            ? "border-white/16 bg-white/[0.02] text-white hover:-translate-y-0.5 hover:border-white/28 hover:bg-white/[0.06]"
            : variant === "dark"
              ? "border-black bg-black text-white hover:-translate-y-0.5 hover:bg-transparent hover:text-black focus-visible:ring-black focus-visible:ring-offset-white"
              : "border-black/18 bg-transparent text-black hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-white focus-visible:ring-black focus-visible:ring-offset-white",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {icon === "none" ? null : <Icon className="h-4 w-4" aria-hidden="true" />}
    </a>
  );
}
