import type { PropsWithChildren } from "react";

import { Container } from "@/components/ui/container";
import { cx } from "@/lib/cx";

type SectionShellProps = PropsWithChildren<{
  className?: string;
  containerClassName?: string;
  id: string;
}>;

export function SectionShell({
  children,
  className,
  containerClassName,
  id,
}: SectionShellProps) {
  return (
    <section
      className={cx("scroll-mt-28 py-24 sm:py-28 lg:py-32", className)}
      id={id}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

