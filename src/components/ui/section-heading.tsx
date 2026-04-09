import { cx } from "@/lib/cx";

type SectionHeadingProps = {
  align?: "left" | "center";
  description: string;
  eyebrow: string;
  title: string;
};

export function SectionHeading({
  align = "left",
  description,
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div
      className={cx(
        "max-w-3xl space-y-4",
        align === "center" && "mx-auto text-center",
      )}
    >
      <p className="font-mono text-[11px] tracking-[0.3em] text-white/78 uppercase">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-medium tracking-[-0.06em] text-white sm:text-4xl lg:text-[3rem]">
        {title}
      </h2>
      <p className="text-base leading-8 text-foreground-soft sm:text-lg">
        {description}
      </p>
    </div>
  );
}
