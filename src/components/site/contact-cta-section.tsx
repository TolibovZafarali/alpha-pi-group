import { Mail, PhoneCall } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";
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
  return (
    <SectionShell className="pb-20 sm:pb-24" id="contact">
      <Reveal>
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.24)] backdrop-blur-md sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(198,176,138,0.18),_transparent_38%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.86fr)] lg:items-start">
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

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a
                  className="rounded-[24px] border border-white/10 bg-black/10 p-5 transition hover:border-white/16 hover:bg-black/15"
                  href={contactDetails.email.href}
                >
                  <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                    <Mail className="h-4 w-4" />
                    {contactDetails.email.label}
                  </div>
                  <p className="mt-3 text-base font-medium text-foreground">
                    {contactDetails.email.value}
                  </p>
                </a>
                <a
                  className="rounded-[24px] border border-white/10 bg-black/10 p-5 transition hover:border-white/16 hover:bg-black/15"
                  href={contactDetails.phone.href}
                >
                  <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                    <PhoneCall className="h-4 w-4" />
                    {contactDetails.phone.label}
                  </div>
                  <p className="mt-3 text-base font-medium text-foreground">
                    {contactDetails.phone.value}
                  </p>
                </a>
              </div>

              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                {contactDetails.note}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[#0b0f16] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
              <div className="inline-flex rounded-[22px] bg-[#efe6d8] px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                <BrandLogo className="w-[170px]" variant="dark" />
              </div>
              <div className="mt-6">
                <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                  Inquiry Form
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-foreground">
                  Frontend contact form preview
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  A polished contact form UI for business inquiries. Connect the
                  submission flow later if needed.
                </p>
              </div>

              <form className="mt-6 space-y-4">
                <label className="block">
                  <span className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                    Name
                  </span>
                  <input
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-accent/40 focus:bg-white/[0.05]"
                    placeholder="Your name"
                    type="text"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                    Company
                  </span>
                  <input
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-accent/40 focus:bg-white/[0.05]"
                    placeholder="Carrier or company name"
                    type="text"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                    Email
                  </span>
                  <input
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-accent/40 focus:bg-white/[0.05]"
                    placeholder="name@company.com"
                    type="email"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                    Message
                  </span>
                  <textarea
                    className="mt-2 min-h-32 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-accent/40 focus:bg-white/[0.05]"
                    placeholder="Tell us what you need help with."
                  />
                </label>

                <button
                  className="inline-flex w-full items-center justify-center rounded-full border border-accent/30 bg-accent px-5 py-3 text-sm font-semibold tracking-[0.16em] text-[#111317] uppercase shadow-[0_14px_36px_rgba(198,176,138,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  type="button"
                >
                  Send Inquiry
                </button>

                <p className="text-xs leading-6 text-muted-foreground">
                  UI only. Connect form submission when live inquiry handling is
                  ready.
                </p>
              </form>

              <p className="mt-6 text-sm leading-7 text-muted-foreground">
                {companyName} is positioned to feel direct, organized, and
                legitimate from first contact.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
