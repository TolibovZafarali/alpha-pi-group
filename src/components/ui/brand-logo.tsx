import Image from "next/image";

import { cx } from "@/lib/cx";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  variant?: "light" | "dark";
};

export function BrandLogo({
  className,
  priority = false,
  variant = "light",
}: BrandLogoProps) {
  return (
    <Image
      alt="Alpha-Pi Group"
      className={cx("h-auto w-[148px]", className)}
      height={375}
      priority={priority}
      src={
        variant === "light"
          ? "/alpha-pi-logo-white.svg"
          : "/alpha-pi-logo-black.svg"
      }
      unoptimized
      width={375}
    />
  );
}

