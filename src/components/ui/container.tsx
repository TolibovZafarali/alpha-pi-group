import { cx } from "@/lib/cx";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cx(
        "mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12",
        className,
      )}
      {...props}
    />
  );
}
