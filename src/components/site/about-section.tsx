import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import type { SiteContent } from "@/content/site";
import { cx } from "@/lib/cx";

type AboutSectionProps = {
  about: SiteContent["about"];
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section className="scroll-mt-28 py-24 sm:py-28 lg:py-32" id="about">
      <Container className="grid gap-14 xl:grid-cols-12 xl:gap-10">
        <div className="xl:col-span-3 xl:sticky xl:top-28 xl:self-start">
          <Reveal className="max-w-md">
            <p className="font-mono text-[10px] tracking-[0.32em] text-white/52 uppercase">
              {about.eyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(2.9rem,5vw,5.2rem)] leading-[0.92] font-medium tracking-[-0.09em] text-white">
              {about.title}
            </h2>
          </Reveal>
        </div>

        <div className="xl:col-span-9">
          <Reveal className="border-t border-white/12 pt-8">
            <p className="max-w-5xl text-[clamp(2.15rem,4.7vw,4.8rem)] leading-[1.02] tracking-[-0.08em] text-white">
              {about.lead}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
            {about.manifesto.map((paragraph, index) => (
              <Reveal
                className={cx(
                  "border border-white/10 bg-white/[0.02] p-6 sm:p-8",
                  index === 1 && "lg:translate-y-12",
                )}
                key={paragraph}
                x={index === 0 ? 30 : -30}
                y={18}
              >
                <p
                  className={cx(
                    "text-lg leading-8 tracking-[-0.03em] sm:text-xl sm:leading-9",
                    index === 0 ? "text-white" : "text-foreground-soft",
                  )}
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 grid gap-5 md:grid-cols-3">
            {about.principles.map((principle, index) => (
              <Reveal
                className={cx(
                  "relative overflow-hidden border border-white/10 bg-black/45 p-6 sm:p-7",
                  index === 1 && "md:translate-y-10",
                )}
                key={principle.title}
                x={index % 2 === 0 ? 28 : -28}
                y={18}
              >
                <span className="editorial-outline pointer-events-none absolute right-4 top-4 text-6xl leading-none font-medium tracking-[-0.1em]">
                  {principle.index}
                </span>
                <span className="font-mono text-[10px] tracking-[0.3em] text-white/46 uppercase">
                  {principle.index}
                </span>
                <h3 className="mt-8 max-w-[14rem] text-[2rem] leading-[1.02] font-medium tracking-[-0.07em] text-white">
                  {principle.title}
                </h3>
                <p className="mt-5 max-w-xs text-base leading-8 text-muted-foreground sm:text-lg">
                  {principle.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
