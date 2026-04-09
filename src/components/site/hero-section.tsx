import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import type { SiteContent } from "@/content/site";

type HeroSectionProps = {
  hero: SiteContent["hero"];
};

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="border-b border-white/10 pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-36" id="top">
      <Container>
        <div className="max-w-4xl">
          <Reveal>
            <p className="font-mono text-[10px] tracking-[0.3em] text-white/52 uppercase">
              {hero.eyebrow}
            </p>
          </Reveal>

          <StaggerGroup className="mt-6">
            <StaggerItem>
              <h1 className="max-w-5xl text-[clamp(3.3rem,8vw,6.8rem)] leading-[0.92] font-medium tracking-[-0.1em] text-white">
                {hero.title}
              </h1>
            </StaggerItem>

            <StaggerItem className="mt-6 max-w-2xl">
              <p className="text-lg leading-8 text-foreground-soft sm:text-xl sm:leading-9">
                {hero.description}
              </p>
            </StaggerItem>
          </StaggerGroup>

          <Reveal className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <ButtonLink href={hero.primaryAction.href}>
              {hero.primaryAction.label}
            </ButtonLink>
            <ButtonLink
              href={hero.secondaryAction.href}
              icon="arrow-right"
              variant="secondary"
            >
              {hero.secondaryAction.label}
            </ButtonLink>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
