"use client";

import { useRef } from "react";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, Mail, PhoneCall } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import type { SiteContent } from "@/content/site";
import { cx } from "@/lib/cx";

type HeroSectionProps = {
  contactDetails: SiteContent["contactDetails"];
  hero: SiteContent["hero"];
};

const titleOffsets = [
  "",
  "sm:pl-16 lg:pl-20 editorial-outline",
  "sm:pl-8 lg:pl-10",
  "sm:pl-20 lg:pl-28",
];

export function HeroSection({ contactDetails, hero }: HeroSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backdropY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const sideY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const watermarkY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const watermarkX = useTransform(scrollYProgress, [0, 1], [0, 70]);

  return (
    <section
      className="relative overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-36"
      id="top"
      ref={ref}
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[52rem] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:88px_88px] opacity-35 [mask-image:linear-gradient(180deg,rgba(0,0,0,0.9),transparent)]"
        style={prefersReducedMotion ? undefined : { y: backdropY }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-[-12rem] top-6 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.16)_0%,_rgba(255,255,255,0.03)_36%,_rgba(255,255,255,0)_72%)] blur-3xl"
        style={prefersReducedMotion ? undefined : { y: backdropY }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-[-10rem] top-28 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0.02)_32%,_rgba(255,255,255,0)_72%)] blur-3xl"
        style={prefersReducedMotion ? undefined : { y: sideY }}
      />

      <Container className="relative min-h-[calc(100svh-6rem)]">
        <div className="grid gap-10 xl:grid-cols-[72px_minmax(0,1fr)_minmax(320px,30rem)] xl:gap-10">
          <div className="hidden xl:flex xl:min-h-[calc(100svh-9rem)] xl:flex-col xl:justify-between xl:pb-10">
            <Reveal className="vertical-label self-start font-mono text-[10px] tracking-[0.32em] text-white/46 uppercase">
              Issue 01
            </Reveal>
            <Reveal
              className="vertical-label self-start font-mono text-[10px] tracking-[0.32em] text-white/32 uppercase"
              delay={0.12}
            >
              {hero.scrollLabel}
            </Reveal>
          </div>

          <motion.div
            className="relative z-10 max-w-[72rem] pt-6 sm:pt-10 lg:pt-16"
            style={prefersReducedMotion ? undefined : { y: titleY }}
          >
            <Reveal>
              <div className="inline-flex items-center gap-4 border-y border-white/14 py-3 pr-4">
                <span className="font-mono text-[10px] tracking-[0.34em] text-white uppercase">
                  {hero.eyebrow}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>
            </Reveal>

            <StaggerGroup amount={0.22} className="mt-8 space-y-1 sm:space-y-2">
              {hero.titleLines.map((line, index) => (
                <StaggerItem className={titleOffsets[index]} key={line}>
                  <span
                    className={cx(
                      "block text-[clamp(3.9rem,9vw,8.8rem)] leading-[0.87] font-medium tracking-[-0.11em]",
                      index === 1 ? "editorial-outline" : "text-white",
                    )}
                  >
                    {line}
                  </span>
                </StaggerItem>
              ))}
            </StaggerGroup>

            <div className="mt-10 grid gap-10 border-t border-white/12 pt-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:gap-12">
              <Reveal className="max-w-2xl">
                <p className="text-lg leading-8 text-foreground-soft sm:text-xl sm:leading-9">
                  {hero.description}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
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
                </div>
              </Reveal>

              <Reveal className="grid gap-5 lg:pl-6" delay={0.14}>
                <p className="max-w-md text-xl leading-[1.45] tracking-[-0.05em] text-white">
                  {hero.supportingIntro}
                </p>

                <a
                  className="group inline-flex w-fit items-center gap-4 font-mono text-[11px] tracking-[0.28em] text-muted-foreground uppercase transition hover:text-white"
                  href="#about"
                >
                  <span className="h-px w-14 bg-white/18 transition group-hover:w-20" />
                  {hero.scrollLabel}
                  <ArrowDownRight className="h-4 w-4" />
                </a>
              </Reveal>
            </div>
          </motion.div>

          <motion.div
            className="relative z-10 grid gap-5 xl:pt-28"
            style={prefersReducedMotion ? undefined : { y: sideY }}
          >
            <Reveal
              className="editorial-panel-dark border border-white/12 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-7"
              x={30}
              y={18}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] tracking-[0.3em] text-white/52 uppercase">
                  Operating view
                </span>
                <span className="font-mono text-[10px] tracking-[0.3em] text-white uppercase">
                  Alpha-Pi
                </span>
              </div>
              <div className="mt-6 grid gap-5">
                {hero.panels.map((panel, index) => (
                  <article
                    className={cx(
                      "border-t border-white/12 pt-5",
                      index === hero.panels.length - 1 && "pb-1",
                    )}
                    key={panel.title}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] tracking-[0.28em] text-white/46 uppercase">
                        {panel.index}
                      </span>
                      <span className="h-px flex-1 bg-white/12" />
                    </div>
                    <h2 className="mt-4 text-[1.9rem] leading-[1.02] font-medium tracking-[-0.07em] text-white">
                      {panel.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-foreground-soft sm:text-base">
                      {panel.description}
                    </p>
                  </article>
                ))}
              </div>
            </Reveal>

            <Reveal
              className="border-t border-white/12 bg-black/35 p-6 sm:p-7"
              delay={0.12}
              x={32}
              y={18}
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] tracking-[0.3em] text-white/52 uppercase">
                  {hero.contactLabel}
                </span>
                <span className="h-px flex-1 bg-white/10" />
              </div>

              <div className="mt-5 grid gap-6">
                {contactDetails.operators.map((operator) => (
                  <div className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0" key={operator.email.href}>
                    <p className="font-mono text-[10px] tracking-[0.3em] text-white uppercase">
                      {operator.name}
                    </p>
                    <div className="mt-4 grid gap-4">
                      <a
                        className="group flex items-start gap-4 text-left transition hover:text-white"
                        href={operator.email.href}
                      >
                        <Mail className="mt-1 h-4 w-4 text-white/72" />
                        <div>
                          <p className="font-mono text-[10px] tracking-[0.28em] text-muted-foreground uppercase">
                            {operator.email.label}
                          </p>
                          <p className="mt-2 text-base text-foreground-soft transition group-hover:text-white">
                            {operator.email.value}
                          </p>
                        </div>
                      </a>

                      <a
                        className="group flex items-start gap-4 text-left transition hover:text-white"
                        href={operator.phone.href}
                      >
                        <PhoneCall className="mt-1 h-4 w-4 text-white/72" />
                        <div>
                          <p className="font-mono text-[10px] tracking-[0.28em] text-muted-foreground uppercase">
                            {operator.phone.label}
                          </p>
                          <p className="mt-2 text-base text-foreground-soft transition group-hover:text-white">
                            {operator.phone.value}
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </motion.div>
        </div>

        <motion.div
          aria-hidden="true"
          className="editorial-outline pointer-events-none absolute bottom-4 right-0 hidden text-[clamp(7rem,20vw,18rem)] leading-none font-medium tracking-[-0.12em] uppercase xl:block"
          style={prefersReducedMotion ? undefined : { x: watermarkX, y: watermarkY }}
        >
          Carrier
        </motion.div>
      </Container>
    </section>
  );
}
