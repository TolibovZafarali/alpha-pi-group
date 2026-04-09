"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BriefcaseBusiness,
  Building2,
  Landmark,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import type { IconName, SiteContent } from "@/content/site";

const serviceIcons: Record<
  Extract<IconName, "BriefcaseBusiness" | "Building2" | "Landmark" | "Workflow">,
  LucideIcon
> = {
  BriefcaseBusiness,
  Building2,
  Landmark,
  Workflow,
};

type ServicesSectionProps = {
  services: SiteContent["services"];
};

export function ServicesSection({ services }: ServicesSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionShell id="services">
      <Reveal>
        <SectionHeading
          align="center"
          description={services.description}
          eyebrow={services.eyebrow}
          title={services.title}
        />
      </Reveal>

      <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-2">
        {services.items.map((service) => {
          const Icon = serviceIcons[service.icon];

          return (
            <StaggerItem key={service.title}>
              <motion.article
                className="group h-full rounded-[30px] border border-white/10 bg-white/[0.03] p-7 shadow-[0_18px_42px_rgba(0,0,0,0.18)] backdrop-blur-sm"
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                whileFocus={prefersReducedMotion ? undefined : { y: -4 }}
                whileHover={prefersReducedMotion ? undefined : { y: -6 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-foreground">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-8 text-muted-foreground">
                  {service.description}
                </p>
              </motion.article>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </SectionShell>
  );
}

