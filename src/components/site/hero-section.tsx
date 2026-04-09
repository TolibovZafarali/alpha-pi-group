import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import type { SiteContent } from "@/content/site";

import { HeroTruckIllustration } from "@/components/site/hero-truck-illustration";

type HeroSectionProps = {
  hero: SiteContent["hero"];
};

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section
      className="relative isolate flex min-h-screen min-h-dvh items-center overflow-hidden border-b border-white/10 pb-20 pt-[calc(var(--site-header-height)+3rem)] sm:pb-24 sm:pt-[calc(var(--site-header-height)+3.5rem)] lg:pb-28 lg:pt-[calc(var(--site-header-height)+4rem)]"
      id="top"
    >
      <HeroTruckIllustration />

      <Container className="relative z-10 w-full">
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
