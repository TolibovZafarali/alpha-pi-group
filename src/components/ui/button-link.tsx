import type { AnchorHTMLAttributes } from "react";

import { ArrowRight, ArrowUpRight } from "lucide-react";

import { cx } from "@/lib/cx";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary";
  icon?: "arrow-right" | "arrow-up-right";
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
        "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-[0.16em] uppercase transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variant === "primary"
          ? "border border-accent/30 bg-accent text-[#111317] shadow-[0_14px_36px_rgba(198,176,138,0.18)] hover:-translate-y-0.5 hover:bg-accent-strong"
          : "border border-white/12 bg-white/[0.03] text-foreground hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      <Icon className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

