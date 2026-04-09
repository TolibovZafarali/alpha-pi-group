import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import type { SiteContent } from "@/content/site";

type AboutSectionProps = {
  about: SiteContent["about"];
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <SectionShell id="about">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <Reveal>
          <SectionHeading
            description={about.description}
            eyebrow={about.eyebrow}
            title={about.title}
          />
        </Reveal>

        <StaggerGroup className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {about.principles.map((principle) => (
            <StaggerItem key={principle.title}>
              <article className="h-full rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur-sm">
                <p className="text-sm font-semibold tracking-[0.18em] text-accent uppercase">
                  {principle.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {principle.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </SectionShell>
  );
}

