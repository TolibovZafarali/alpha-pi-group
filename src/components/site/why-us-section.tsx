import { Orbit, ShieldCheck, Waypoints, type LucideIcon } from "lucide-react";

import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import type { IconName, SiteContent } from "@/content/site";

const pointIcons: Record<
  Extract<IconName, "Orbit" | "ShieldCheck" | "Waypoints">,
  LucideIcon
> = {
  Orbit,
  ShieldCheck,
  Waypoints,
};

type WhyUsSectionProps = {
  whyUs: SiteContent["whyUs"];
};

export function WhyUsSection({ whyUs }: WhyUsSectionProps) {
  return (
    <SectionShell id="why-us">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <Reveal>
          <SectionHeading
            description={whyUs.description}
            eyebrow={whyUs.eyebrow}
            title={whyUs.title}
          />
        </Reveal>

        <StaggerGroup className="space-y-4">
          {whyUs.points.map((point) => {
            const Icon = pointIcons[point.icon];

            return (
              <StaggerItem key={point.title}>
                <article className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_42px_rgba(0,0,0,0.15)] backdrop-blur-sm sm:p-7">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
                        {point.title}
                      </h3>
                      <p className="mt-3 text-base leading-8 text-muted-foreground">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </SectionShell>
  );
}

