import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import type { SiteContent } from "@/content/site";

type AboutSectionProps = {
  about: SiteContent["about"];
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section className="scroll-mt-28 py-24 sm:py-28 lg:py-32" id="about">
      <Container className="grid gap-14 lg:grid-cols-[minmax(240px,0.34fr)_minmax(0,0.66fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal className="max-w-md">
            <p className="font-mono text-[11px] tracking-[0.3em] text-white/78 uppercase">
              {about.eyebrow}
            </p>
            <h2 className="mt-5 text-4xl leading-[0.98] font-medium tracking-[-0.07em] text-white sm:text-5xl">
              {about.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-foreground-soft">
              {about.lead}
            </p>
          </Reveal>
        </div>

        <div className="space-y-12">
          <div className="space-y-8 border-t border-white/12 pt-8">
            {about.manifesto.map((paragraph, index) => (
              <Reveal key={paragraph} x={index % 2 === 0 ? 28 : -28} y={18}>
                <p className="max-w-3xl text-2xl leading-[1.45] tracking-[-0.04em] text-white/92 sm:text-[2rem]">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="space-y-1 border-t border-white/12">
            {about.principles.map((principle, index) => (
              <Reveal
                className="border-b border-white/10 py-7 sm:py-8"
                key={principle.title}
                x={index % 2 === 0 ? 36 : -36}
                y={12}
              >
                <article className="grid gap-4 md:grid-cols-[72px_minmax(0,0.85fr)_minmax(0,1fr)] md:gap-8">
                  <span className="font-mono text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
                    {principle.index}
                  </span>
                  <h3 className="text-2xl leading-tight font-medium tracking-[-0.05em] text-white">
                    {principle.title}
                  </h3>
                  <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                    {principle.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
