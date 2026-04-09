"use client";

import { useRef } from "react";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Mail, PhoneCall } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import type { SiteContent } from "@/content/site";

type ContactCtaSectionProps = {
  companyName: string;
  contact: SiteContent["contact"];
  contactDetails: SiteContent["contactDetails"];
};

export function ContactCtaSection({
  companyName,
  contact,
  contactDetails,
}: ContactCtaSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const watermarkY = useTransform(scrollYProgress, [0, 1], [50, -40]);
  const asideY = useTransform(scrollYProgress, [0, 1], [0, -28]);

  return (
    <section className="scroll-mt-28 py-24 sm:py-28 lg:py-32" id="contact" ref={ref}>
      <Container className="relative overflow-hidden border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-4 left-4 text-[clamp(4.5rem,16vw,11rem)] leading-none font-medium tracking-[-0.12em] text-white/[0.04] uppercase"
          style={prefersReducedMotion ? undefined : { y: watermarkY }}
        >
          Alpha-Pi
        </motion.span>

        <div className="relative grid gap-14 lg:grid-cols-[minmax(0,0.62fr)_minmax(280px,0.38fr)] lg:gap-10">
          <div>
            <Reveal className="max-w-4xl">
              <p className="font-mono text-[11px] tracking-[0.3em] text-white/78 uppercase">
                {contact.eyebrow}
              </p>
              <h2 className="mt-5 text-4xl leading-[0.96] font-medium tracking-[-0.08em] text-white sm:text-5xl lg:text-[4.75rem]">
                {contact.title}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground-soft sm:text-xl sm:leading-9">
                {contact.description}
              </p>
            </Reveal>

            <Reveal
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
              delay={0.12}
            >
              <ButtonLink href={contact.primaryAction.href}>
                {contact.primaryAction.label}
              </ButtonLink>
              <ButtonLink href={contact.secondaryAction.href} variant="secondary">
                {contact.secondaryAction.label}
              </ButtonLink>
            </Reveal>
          </div>

          <motion.div
            className="grid gap-4 self-end lg:pl-8"
            style={prefersReducedMotion ? undefined : { y: asideY }}
          >
            <Reveal className="border-t border-white/12 pt-6" delay={0.16}>
              <p className="font-mono text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
                Direct contact
              </p>

              <div className="mt-5 grid gap-6">
                {contactDetails.operators.map((operator) => (
                  <div
                    className="border-b border-white/10 pb-5"
                    key={operator.email.href}
                  >
                    <p className="font-mono text-[11px] tracking-[0.28em] text-white/78 uppercase">
                      {operator.name}
                    </p>

                    <div className="mt-4 grid gap-4">
                      <a
                        className="group flex items-start gap-4 transition hover:text-white"
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
                        className="group flex items-start gap-4 transition hover:text-white"
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

              <p className="mt-6 text-base leading-8 text-foreground-soft">
                {contact.availability}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {contactDetails.note}
              </p>
              <p className="mt-6 font-mono text-[11px] tracking-[0.28em] text-white/52 uppercase">
                {companyName}
              </p>
            </Reveal>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
