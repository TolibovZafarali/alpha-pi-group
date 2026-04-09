"use client";

import { useRef } from "react";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, Mail, PhoneCall } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import type { SiteContent } from "@/content/site";

type HeroSectionProps = {
  contactDetails: SiteContent["contactDetails"];
  hero: SiteContent["hero"];
};

export function HeroSection({ contactDetails, hero }: HeroSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const railY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const panelY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const panelScale = useTransform(scrollYProgress, [0, 0.55], [1, 0.97]);

  return (
    <section
      className="relative overflow-hidden pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40"
      id="top"
      ref={ref}
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[48rem] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:88px_88px] opacity-35 [mask-image:linear-gradient(180deg,rgba(0,0,0,0.85),transparent)]"
        style={prefersReducedMotion ? undefined : { y: backgroundY }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-[-8rem] top-8 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.02)_34%,rgba(255,255,255,0)_70%)] blur-3xl"
        style={prefersReducedMotion ? undefined : { y: glowY }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-[-10rem] top-24 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_32%,rgba(255,255,255,0)_72%)] blur-3xl"
        style={prefersReducedMotion ? undefined : { y: railY }}
      />

      <Container className="relative grid min-h-[calc(100svh-7rem)] items-end gap-14 xl:grid-cols-[minmax(0,1.06fr)_minmax(300px,0.56fr)] xl:gap-10">
        <div className="max-w-5xl pb-2 sm:pb-6">
          <Reveal>
            <div className="inline-flex items-center gap-3 border border-white/12 bg-white/[0.03] px-4 py-2 font-mono text-[11px] tracking-[0.28em] text-white/78 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              {hero.eyebrow}
            </div>
          </Reveal>

          <StaggerGroup amount={0.25} className="mt-7 space-y-1">
            {hero.titleLines.map((line) => (
              <StaggerItem key={line}>
                <span className="block text-[clamp(3.55rem,8vw,8rem)] leading-[0.92] font-medium tracking-[-0.08em] text-white">
                  {line}
                </span>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal className="mt-8 max-w-2xl" delay={0.12}>
            <p className="text-lg leading-8 text-foreground-soft sm:text-xl sm:leading-9">
              {hero.description}
            </p>
          </Reveal>

          <Reveal
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
            delay={0.2}
          >
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

          <Reveal className="mt-10" delay={0.28}>
            <a
              className="font-mono inline-flex items-center gap-3 text-[11px] tracking-[0.28em] text-muted-foreground uppercase transition hover:text-white"
              href="#about"
            >
              <span className="h-px w-14 bg-white/16" />
              {hero.scrollLabel}
              <ArrowDownRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <motion.div
          className="grid gap-4 xl:mb-8"
          style={
            prefersReducedMotion
              ? undefined
              : { y: panelY, scale: panelScale }
          }
        >
          <Reveal x={32} y={18}>
            <div className="border-t border-white/16 pt-6">
              <p className="max-w-sm text-lg leading-8 text-foreground-soft">
                {hero.supportingIntro}
              </p>
            </div>
          </Reveal>

          {hero.panels.map((panel, index) => (
            <Reveal
              className="border border-white/10 bg-white/[0.025] p-6 backdrop-blur-sm sm:p-7"
              delay={0.08 * index}
              key={panel.title}
              x={index % 2 === 0 ? 28 : -28}
              y={22}
            >
              <article>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[11px] tracking-[0.28em] text-white/78 uppercase">
                    {panel.index}
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>
                <h2 className="mt-5 max-w-sm text-2xl leading-tight font-medium tracking-[-0.05em] text-white">
                  {panel.title}
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground sm:text-base">
                  {panel.description}
                </p>
              </article>
            </Reveal>
          ))}

          <Reveal
            className="border border-white/10 bg-black/40 p-6 sm:p-7"
            delay={0.24}
            x={30}
            y={18}
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-[11px] tracking-[0.28em] text-white/78 uppercase">
                {hero.contactLabel}
              </span>
              <span className="h-px flex-1 bg-white/10" />
            </div>

            <div className="mt-5 grid gap-3">
              {contactDetails.operators.map((operator) => (
                <div
                  className="border-t border-white/10 pt-4"
                  key={operator.email.href}
                >
                  <p className="font-mono text-[11px] tracking-[0.28em] text-white/78 uppercase">
                    {operator.name}
                  </p>
                  <div className="mt-3 grid gap-3">
                    <a
                      className="group flex items-start gap-4 text-left transition hover:text-white"
                      href={operator.email.href}
                    >
                      <Mail className="mt-1 h-4 w-4 text-white/72" />
                      <div>
                        <p className="font-mono text-[11px] tracking-[0.26em] text-muted-foreground uppercase">
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
                        <p className="font-mono text-[11px] tracking-[0.26em] text-muted-foreground uppercase">
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
      </Container>
    </section>
  );
}
