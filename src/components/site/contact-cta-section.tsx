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

  const watermarkY = useTransform(scrollYProgress, [0, 1], [40, -30]);
  const asideY = useTransform(scrollYProgress, [0, 1], [0, -24]);

  return (
    <section
      className="relative scroll-mt-28 bg-white py-24 text-black sm:py-28 lg:py-32"
      id="contact"
      ref={ref}
    >
      <Container className="relative overflow-hidden border border-black/12 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <motion.span
          aria-hidden="true"
          className="editorial-outline-dark pointer-events-none absolute bottom-4 right-4 text-[clamp(5rem,18vw,14rem)] leading-none font-medium tracking-[-0.14em] uppercase"
          style={prefersReducedMotion ? undefined : { y: watermarkY }}
        >
          Contact
        </motion.span>

        <div className="relative grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal className="max-w-5xl">
              <p className="font-mono text-[10px] tracking-[0.32em] text-black/52 uppercase">
                {contact.eyebrow}
              </p>
              <h2 className="mt-5 text-[clamp(3rem,6vw,6.6rem)] leading-[0.9] font-medium tracking-[-0.11em] text-black">
                {contact.title}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-black/68 sm:text-xl sm:leading-9">
                {contact.description}
              </p>
            </Reveal>

            <Reveal
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
              delay={0.12}
            >
              <ButtonLink href={contact.primaryAction.href} variant="dark">
                {contact.primaryAction.label}
              </ButtonLink>
              <ButtonLink href={contact.secondaryAction.href} variant="outline-dark">
                {contact.secondaryAction.label}
              </ButtonLink>
            </Reveal>

            <Reveal className="mt-12 border-t border-black/12 pt-6" delay={0.2}>
              <p className="max-w-2xl text-xl leading-[1.5] tracking-[-0.04em] text-black">
                {contact.availability}
              </p>
            </Reveal>
          </div>

          <motion.div
            className="grid gap-4 self-end lg:col-span-5 lg:pl-8"
            style={prefersReducedMotion ? undefined : { y: asideY }}
          >
            <Reveal className="grid gap-px bg-black/12" delay={0.16}>
              {contactDetails.operators.map((operator) => (
                <div className="bg-black px-6 py-6 text-white sm:px-7 sm:py-7" key={operator.email.href}>
                  <p className="font-mono text-[10px] tracking-[0.32em] text-white/52 uppercase">
                    {operator.name}
                  </p>

                  <div className="mt-5 grid gap-4">
                    <a
                      className="group flex items-start gap-4 transition hover:text-white"
                      href={operator.email.href}
                    >
                      <Mail className="mt-1 h-4 w-4 text-white/72" />
                      <div>
                        <p className="font-mono text-[10px] tracking-[0.28em] text-white/46 uppercase">
                          {operator.email.label}
                        </p>
                        <p className="mt-2 text-base text-white/78 transition group-hover:text-white">
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
                        <p className="font-mono text-[10px] tracking-[0.28em] text-white/46 uppercase">
                          {operator.phone.label}
                        </p>
                        <p className="mt-2 text-base text-white/78 transition group-hover:text-white">
                          {operator.phone.value}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </Reveal>

            <Reveal className="border-t border-black/12 pt-6" delay={0.22}>
              <p className="text-sm leading-7 text-black/58">{contactDetails.note}</p>
              <p className="mt-6 font-mono text-[10px] tracking-[0.32em] text-black/52 uppercase">
                {companyName}
              </p>
            </Reveal>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
