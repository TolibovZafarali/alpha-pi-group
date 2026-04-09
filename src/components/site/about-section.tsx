import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import type { SiteContent } from "@/content/site";

type AboutSectionProps = {
  about: SiteContent["about"];
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section className="scroll-mt-24 border-b border-white/10 py-20 sm:py-24 lg:py-28" id="about">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="font-mono text-[10px] tracking-[0.3em] text-white/52 uppercase">
            {about.eyebrow}
          </p>
          <h2 className="mt-5 text-[clamp(2.8rem,6vw,5.2rem)] leading-[0.92] font-medium tracking-[-0.1em] text-white">
            {about.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground-soft sm:text-xl sm:leading-9">
            {about.description}
          </p>
        </Reveal>

        <Reveal className="mt-10 border-t border-white/10 pt-6">
          <p className="font-mono text-[11px] tracking-[0.24em] text-white uppercase">
            {about.supportingLine}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
