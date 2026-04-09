import { Mail, PhoneCall } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import type { SiteContent } from "@/content/site";

type ContactCtaSectionProps = {
  contact: SiteContent["contact"];
  contactDetails: SiteContent["contactDetails"];
};

export function ContactCtaSection({
  contact,
  contactDetails,
}: ContactCtaSectionProps) {
  return (
    <section
      className="scroll-mt-[calc(var(--site-header-height)+1.5rem)] flex min-h-screen min-h-dvh items-center bg-white py-20 text-black sm:py-24 lg:py-28"
      id="contact"
    >
      <Container className="w-full">
        <Reveal className="max-w-5xl">
          <p className="font-mono text-[10px] tracking-[0.3em] text-black/52 uppercase">
            {contact.eyebrow}
          </p>
          <h2 className="mt-5 text-[clamp(2.8rem,6vw,5.4rem)] leading-[0.92] font-medium tracking-[-0.1em] text-black md:whitespace-nowrap">
            {contact.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-black/66 sm:text-lg sm:leading-8">
            {contact.description}
          </p>
        </Reveal>

        <Reveal className="mt-10 grid gap-px bg-black/12 md:grid-cols-2">
          {contactDetails.operators.map((operator) => (
            <div
              className="bg-white px-6 py-6 text-center sm:px-7 sm:py-7"
              key={operator.email.href}
            >
              <p className="font-mono text-sm tracking-[0.2em] text-black uppercase sm:text-[15px]">
                {operator.name}
              </p>

              <div className="mt-5 mx-auto grid w-fit gap-4 justify-items-start text-left">
                <a
                  className="group inline-flex items-center gap-3 text-black transition-colors duration-200 hover:text-black/64"
                  href={operator.email.href}
                >
                  <Mail className="h-4 w-4 shrink-0 text-black/58" />
                  <p className="text-base leading-none text-black sm:text-lg">
                    {operator.email.value}
                  </p>
                </a>

                <a
                  className="group inline-flex items-center gap-3 text-black transition-colors duration-200 hover:text-black/64"
                  href={operator.phone.href}
                >
                  <PhoneCall className="h-4 w-4 shrink-0 text-black/58" />
                  <p className="text-base leading-none text-black sm:text-lg">
                    {operator.phone.value}
                  </p>
                </a>
              </div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
