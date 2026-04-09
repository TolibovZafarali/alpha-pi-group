import { Mail } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";
import type { SiteContent } from "@/content/site";

type ContactCtaSectionProps = {
  companyName: string;
  email: string;
  contact: SiteContent["contact"];
};

export function ContactCtaSection({
  companyName,
  contact,
  email,
}: ContactCtaSectionProps) {
  return (
    <SectionShell className="pb-20 sm:pb-24" id="contact">
      <Reveal>
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.24)] backdrop-blur-md sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(198,176,138,0.18),_transparent_38%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.3em] text-accent uppercase">
                {contact.eyebrow}
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
                {contact.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                {contact.description}
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm font-semibold tracking-[0.18em] text-accent uppercase">
                <Mail className="h-4 w-4" />
                {email}
              </div>
            </div>

            <div className="space-y-6 lg:text-right">
              <div className="inline-flex rounded-[28px] bg-[#efe6d8] px-6 py-5 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                <BrandLogo className="w-[180px]" variant="dark" />
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <ButtonLink href={contact.primaryAction.href}>
                  {contact.primaryAction.label}
                </ButtonLink>
                <ButtonLink
                  href={contact.secondaryAction.href}
                  icon="arrow-right"
                  variant="secondary"
                >
                  {contact.secondaryAction.label}
                </ButtonLink>
              </div>
              <p className="text-sm leading-7 text-muted-foreground">
                {companyName} keeps engagement focused, discreet, and direct.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}

