import { Check, Mail, PhoneCall } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Container } from "@/components/ui/container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import type { SiteContent } from "@/content/site";

type HeroSectionProps = {
  contactDetails: SiteContent["contactDetails"];
  hero: SiteContent["hero"];
};

export function HeroSection({ contactDetails, hero }: HeroSectionProps) {
  const titleWithoutHighlight = hero.title.replace(hero.highlightedText, "").trim();

  return (
    <section
      className="relative overflow-hidden pb-24 pt-16 sm:pb-28 sm:pt-20 lg:pb-32 lg:pt-24"
      id="top"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[32rem] bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.18] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.8),transparent)]"
      />
      <Container className="grid items-end gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)] lg:gap-12">
        <div className="max-w-3xl">
          <Reveal>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold tracking-[0.24em] text-accent uppercase shadow-[0_10px_40px_rgba(0,0,0,0.18)]">
              <span className="h-2 w-2 rounded-full bg-accent" />
              {hero.eyebrow}
            </div>
          </Reveal>

          <Reveal className="mt-8" delay={0.08}>
            <h1 className="max-w-4xl text-5xl leading-[0.95] font-semibold tracking-[-0.06em] text-foreground sm:text-6xl lg:text-[5.6rem]">
              {titleWithoutHighlight}{" "}
              <span className="font-serif font-medium italic text-accent-strong">
                {hero.highlightedText}
              </span>
            </h1>
          </Reveal>

          <Reveal className="mt-8 max-w-2xl" delay={0.16}>
            <p className="text-lg leading-8 text-muted-foreground sm:text-xl">
              {hero.description}
            </p>
          </Reveal>

          <Reveal className="mt-10 flex flex-col gap-4 sm:flex-row" delay={0.24}>
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

        <Reveal className="lg:justify-self-end" delay={0.18}>
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.38)] backdrop-blur-md sm:p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(198,176,138,0.12),_transparent_50%)]" />

            <div className="relative rounded-[28px] bg-[#efe6d8] p-8 text-[#14161c] sm:p-10">
              <BrandLogo className="w-[180px] sm:w-[210px]" variant="dark" />
              <div className="mt-10 max-w-sm space-y-5">
                <p className="text-xs font-semibold tracking-[0.24em] uppercase text-[#6f6558]">
                  {hero.plaqueTitle}
                </p>
                <p className="text-lg leading-8 text-[#242831]">
                  {hero.plaqueDescription}
                </p>
              </div>

              <StaggerGroup className="mt-8 space-y-3">
                {hero.plaqueHighlights.map((highlight) => (
                  <StaggerItem key={highlight}>
                    <div className="flex items-center gap-3 text-sm font-semibold tracking-[0.14em] uppercase text-[#1c2028]">
                      <Check className="h-4 w-4 text-[#8d7753]" />
                      {highlight}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>

            <div className="relative mt-4 grid gap-4 sm:grid-cols-2">
              {hero.supportingNotes.map((note) => (
                <div
                  className="rounded-[24px] border border-white/10 bg-[#0f131b] p-5"
                  key={note.title}
                >
                  <p className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
                    {note.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {note.description}
                  </p>
                </div>
              ))}
              <div className="rounded-[24px] border border-accent/20 bg-accent/10 p-5 sm:col-span-2">
                <div className="grid gap-4 sm:grid-cols-2">
                  <a
                    className="rounded-[18px] border border-white/10 bg-black/10 px-4 py-4 transition hover:bg-black/15"
                    href={contactDetails.email.href}
                  >
                    <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.18em] text-[#8d7753] uppercase">
                      <Mail className="h-4 w-4" />
                      {contactDetails.email.label}
                    </div>
                    <p className="mt-2 text-sm font-medium text-[#2a3039]">
                      {contactDetails.email.value}
                    </p>
                  </a>
                  <a
                    className="rounded-[18px] border border-white/10 bg-black/10 px-4 py-4 transition hover:bg-black/15"
                    href={contactDetails.phone.href}
                  >
                    <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.18em] text-[#8d7753] uppercase">
                      <PhoneCall className="h-4 w-4" />
                      {contactDetails.phone.label}
                    </div>
                    <p className="mt-2 text-sm font-medium text-[#2a3039]">
                      {contactDetails.phone.value}
                    </p>
                  </a>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#594c35]">
                  {contactDetails.note}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
