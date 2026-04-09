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
  "lg:mr-20",
  "lg:ml-10",
  "lg:mr-10",
  "lg:ml-20",
  "lg:mr-6",
];

export function WhyUsSection({ whyUs }: WhyUsSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 85%"],
  });
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="scroll-mt-28 py-24 sm:py-28 lg:py-32" id="why-us" ref={ref}>
      <Container className="grid gap-14 lg:grid-cols-[minmax(240px,0.34fr)_minmax(0,0.66fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal className="max-w-md">
            <p className="font-mono text-[11px] tracking-[0.3em] text-white/78 uppercase">
              {whyUs.eyebrow}
            </p>
            <h2 className="mt-5 text-4xl leading-[0.98] font-medium tracking-[-0.07em] text-white sm:text-5xl">
              {whyUs.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-foreground-soft">
              {whyUs.description}
            </p>

            <div className="mt-10 flex items-start gap-5">
              <div className="relative mt-1 h-28 w-px bg-white/10">
                <motion.span
                  className="absolute inset-x-0 top-0 h-full origin-top bg-white"
                  style={prefersReducedMotion ? undefined : { scaleY: progressScale }}
                />
              </div>
              <p className="font-mono text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
                {whyUs.railLabel}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="border-t border-white/12">
          {whyUs.points.map((point, index) => (
            <Reveal
              className={cx(
                "border-b border-white/10 py-8 sm:py-10",
                rowOffsets[index],
              )}
              key={point.title}
              x={index % 2 === 0 ? 42 : -42}
              y={12}
            >
              <article className="grid gap-5 sm:grid-cols-[88px_1fr] sm:gap-8">
                <span className="font-mono text-[11px] tracking-[0.28em] text-white/78 uppercase">
                  {point.index}
                </span>

                <div>
                  <h3 className="text-3xl leading-[1.05] font-medium tracking-[-0.06em] text-white sm:text-[2.2rem]">
                    {point.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
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
