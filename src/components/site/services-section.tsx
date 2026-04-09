"use client";

import { useRef } from "react";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import type { SiteContent } from "@/content/site";
import { cx } from "@/lib/cx";

type ServicesSectionProps = {
  services: SiteContent["services"];
};

type ServiceItem = SiteContent["services"]["items"][number];

function ServiceChapter({
  item,
  reverse,
}: {
  item: ServiceItem;
  reverse: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 88%", "end 35%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.28, 1], [0.45, 1, 0.78]);
  const scale = useTransform(scrollYProgress, [0, 0.35, 1], [0.96, 1, 0.985]);
  const numberX = useTransform(scrollYProgress, [0, 1], [reverse ? -30 : 30, 0]);

  return (
    <motion.article
      className="relative border-t border-white/12 py-14 sm:py-16 lg:py-20"
      ref={ref}
      style={prefersReducedMotion ? undefined : { opacity, scale }}
    >
      <div className="grid gap-7 lg:grid-cols-12 lg:gap-8">
        <motion.div
          className={cx(
            "relative lg:col-span-3",
            reverse ? "lg:col-start-10 lg:text-right" : "lg:col-start-1",
          )}
          style={prefersReducedMotion ? undefined : { x: numberX }}
        >
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/82 uppercase">
            {item.index}
          </p>
          <span className="pointer-events-none mt-4 block text-[4.5rem] leading-none font-medium tracking-[-0.09em] text-white/10 sm:text-[6.5rem]">
            {item.index}
          </span>
        </motion.div>

        <div
          className={cx(
            "space-y-6 lg:col-span-7",
            reverse ? "lg:col-start-2 lg:text-right" : "lg:col-start-4",
          )}
        >
          <p className="font-mono text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
            {item.label}
          </p>
          <h3
            className={cx(
              "max-w-3xl text-4xl leading-[1.02] font-medium tracking-[-0.07em] text-white sm:text-5xl",
              reverse && "lg:ml-auto",
            )}
          >
            {item.title}
          </h3>
          <p
            className={cx(
              "max-w-2xl text-base leading-8 text-foreground-soft sm:text-lg",
              reverse && "lg:ml-auto",
            )}
          >
            {item.description}
          </p>

          <div
            className={cx(
              "flex flex-wrap gap-3 pt-2",
              reverse && "lg:justify-end",
            )}
          >
            {item.outcomes.map((outcome) => (
              <span
                className="border border-white/10 bg-white/[0.025] px-3 py-2 font-mono text-[11px] tracking-[0.24em] text-white/76 uppercase"
                key={outcome}
              >
                {outcome}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="scroll-mt-28 py-24 sm:py-28 lg:py-32" id="services">
      <Container>
        <Reveal className="grid gap-8 border-t border-white/12 pt-8 lg:grid-cols-[minmax(0,0.58fr)_minmax(260px,0.42fr)] lg:items-end">
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] text-white/78 uppercase">
              {services.eyebrow}
            </p>
            <h2 className="mt-5 max-w-4xl text-4xl leading-[0.98] font-medium tracking-[-0.07em] text-white sm:text-5xl lg:text-[4.25rem]">
              {services.title}
            </h2>
          </div>

          <p className="max-w-lg text-base leading-8 text-muted-foreground sm:text-lg">
            {services.description}
          </p>
        </Reveal>

        <div className="mt-12">
          {services.items.map((item, index) => (
            <ServiceChapter
              item={item}
              key={item.title}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
