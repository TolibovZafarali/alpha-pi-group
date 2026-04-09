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
    offset: ["start 88%", "end 40%"],
  });

  const cardX = useTransform(scrollYProgress, [0, 1], [reverse ? -46 : 46, 0]);
  const cardY = useTransform(scrollYProgress, [0, 1], [34, 0]);
  const ghostY = useTransform(scrollYProgress, [0, 1], [56, -18]);

  return (
    <article className="relative py-14 sm:py-16 lg:py-20" ref={ref}>
      <motion.span
        aria-hidden="true"
        className={cx(
          "editorial-outline-dark pointer-events-none absolute top-3 hidden text-[clamp(6rem,18vw,14rem)] leading-none font-medium tracking-[-0.14em] lg:block",
          reverse ? "left-0" : "right-0",
        )}
        style={prefersReducedMotion ? undefined : { y: ghostY }}
      >
        {item.index}
      </motion.span>

      <div className="grid gap-7 border-t border-black/12 pt-8 lg:grid-cols-12 lg:items-start lg:gap-8">
        <div
          className={cx(
            "relative z-10 lg:col-span-3",
            reverse ? "lg:col-start-10 lg:text-right" : "lg:col-start-1",
          )}
        >
          <p className="font-mono text-[10px] tracking-[0.32em] text-black/52 uppercase">
            {item.index}
          </p>
          <p className="mt-4 text-sm tracking-[0.18em] text-black/62 uppercase">
            {item.label}
          </p>
        </div>

        <motion.div
          className={cx(
            "editorial-panel-light relative z-10 overflow-hidden border border-black/12 bg-black px-6 py-7 text-white sm:px-8 sm:py-9 lg:col-span-7",
            reverse ? "lg:col-start-1" : "lg:col-start-5",
          )}
          style={prefersReducedMotion ? undefined : { x: cardX, y: cardY }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_40%)] opacity-80" />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.68fr)_minmax(180px,0.32fr)] lg:gap-10">
            <div>
              <h3 className="max-w-3xl text-[clamp(2.2rem,4vw,4rem)] leading-[0.95] font-medium tracking-[-0.08em] text-white">
                {item.title}
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/74 sm:text-lg">
                {item.description}
              </p>
            </div>

            <div className="border-t border-white/12 pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
              <p className="font-mono text-[10px] tracking-[0.32em] text-white/46 uppercase">
                Outcomes
              </p>
              <div className="mt-5 grid gap-3">
                {item.outcomes.map((outcome) => (
                  <span
                    className="border border-white/14 px-3 py-3 font-mono text-[10px] tracking-[0.24em] text-white/78 uppercase"
                    key={outcome}
                  >
                    {outcome}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  );
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section
      className="scroll-mt-28 bg-white py-24 text-black sm:py-28 lg:py-32"
      id="services"
    >
      <Container>
        <Reveal className="grid gap-8 lg:grid-cols-[minmax(0,0.62fr)_minmax(260px,0.38fr)] lg:items-end">
          <div>
            <p className="font-mono text-[10px] tracking-[0.32em] text-black/52 uppercase">
              {services.eyebrow}
            </p>
            <h2 className="mt-5 max-w-4xl text-[clamp(3rem,6vw,6rem)] leading-[0.92] font-medium tracking-[-0.1em] text-black">
              {services.title}
            </h2>
          </div>

          <p className="max-w-lg text-base leading-8 text-black/66 sm:text-lg">
            {services.description}
          </p>
        </Reveal>

        <div className="mt-14">
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
