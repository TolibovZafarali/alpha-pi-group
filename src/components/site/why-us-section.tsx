"use client";

import { useRef } from "react";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import type { SiteContent } from "@/content/site";
import { cx } from "@/lib/cx";

type WhyUsSectionProps = {
  whyUs: SiteContent["whyUs"];
};

const rowOffsets = [
  "lg:mr-14",
  "lg:ml-20",
  "lg:mr-8",
  "lg:ml-12",
  "lg:mr-4",
];

export function WhyUsSection({ whyUs }: WhyUsSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 72%", "end 88%"],
  });
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      className="relative scroll-mt-28 py-24 sm:py-28 lg:py-32"
      id="why-us"
      ref={ref}
    >
      <Container className="grid gap-14 xl:grid-cols-12 xl:gap-10">
        <div className="xl:col-span-4 xl:sticky xl:top-28 xl:self-start">
          <Reveal className="max-w-lg">
            <p className="font-mono text-[10px] tracking-[0.32em] text-white/52 uppercase">
              {whyUs.eyebrow}
            </p>
            <h2 className="mt-5 text-[clamp(3rem,5vw,5.4rem)] leading-[0.92] font-medium tracking-[-0.1em] text-white">
              {whyUs.title}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-foreground-soft">
              {whyUs.description}
            </p>

            <div className="mt-10 hidden items-start gap-5 xl:flex">
              <div className="relative mt-1 h-36 w-px bg-white/10">
                <motion.span
                  className="absolute inset-x-0 top-0 h-full origin-top bg-white"
                  style={prefersReducedMotion ? undefined : { scaleY: progressScale }}
                />
              </div>
              <p className="vertical-label font-mono text-[10px] tracking-[0.32em] text-white/40 uppercase">
                {whyUs.railLabel}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="xl:col-span-8 xl:pl-8">
          {whyUs.points.map((point, index) => (
            <Reveal
              className={cx(
                "relative border-t border-white/12 py-8 sm:py-10",
                rowOffsets[index],
              )}
              key={point.title}
              x={index % 2 === 0 ? 40 : -40}
              y={16}
            >
              <article className="grid gap-5 md:grid-cols-[88px_minmax(0,1fr)] md:gap-8">
                <span className="font-mono text-[10px] tracking-[0.32em] text-white/46 uppercase">
                  {point.index}
                </span>

                <div className="relative overflow-hidden border border-white/10 bg-white/[0.02] px-6 py-6 sm:px-8 sm:py-8">
                  <span className="editorial-outline pointer-events-none absolute right-4 top-3 text-6xl leading-none font-medium tracking-[-0.1em]">
                    {point.index}
                  </span>
                  <h3 className="max-w-3xl text-[clamp(2rem,3vw,3.3rem)] leading-[0.95] font-medium tracking-[-0.08em] text-white">
                    {point.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-foreground-soft sm:text-lg">
                    {point.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
