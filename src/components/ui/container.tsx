import { cx } from "@/lib/cx";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cx(
        "mx-auto w-full max-w-[1280px] px-6 sm:px-8 lg:px-10",
        className,
      )}
      {...props}
    />
  );
}

