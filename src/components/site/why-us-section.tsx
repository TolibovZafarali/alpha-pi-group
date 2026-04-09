import {
  Clock3,
  MessageSquareText,
  ShieldCheck,
  Waypoints,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import type { IconName, SiteContent } from "@/content/site";

const pointIcons: Record<
  Extract<
    IconName,
    "Clock3" | "MessageSquareText" | "ShieldCheck" | "Waypoints" | "Workflow"
  >,
  LucideIcon
> = {
  Clock3,
  MessageSquareText,
  ShieldCheck,
  Waypoints,
  Workflow,
};

type WhyUsSectionProps = {
  whyUs: SiteContent["whyUs"];
};

export function WhyUsSection({ whyUs }: WhyUsSectionProps) {
  return (
    <SectionShell id="why-us">
      <Reveal>
        <SectionHeading
          align="center"
          description={whyUs.description}
          eyebrow={whyUs.eyebrow}
          title={whyUs.title}
        />
      </Reveal>

      <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {whyUs.points.map((point, index) => {
          const Icon = pointIcons[point.icon];

          return (
            <StaggerItem key={point.title}>
              <article className="h-full rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_42px_rgba(0,0,0,0.15)] backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-foreground">
                  {point.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {point.description}
                </p>
              </article>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </SectionShell>
  );
}
