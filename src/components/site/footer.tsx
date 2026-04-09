import { Container } from "@/components/ui/container";
import type { SiteContent } from "@/content/site";

type FooterProps = {
  companyName: string;
  contactDetails: SiteContent["contactDetails"];
  footer: SiteContent["footer"];
  navigation: SiteContent["navigation"];
};

export function Footer({
  companyName,
  contactDetails,
  footer,
  navigation,
}: FooterProps) {
  return (
    <footer className="border-t border-white/10 pb-10 pt-8 sm:pb-12">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-md space-y-4">
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/58 uppercase">
            {companyName}
          </p>
          <p className="text-sm leading-7 text-muted-foreground">{footer.note}</p>
        </div>

        <div className="space-y-4 lg:text-right">
          <nav className="flex flex-wrap gap-4 lg:justify-end">
            {navigation.map((item) => (
              <a
                className="font-mono text-[11px] tracking-[0.28em] text-muted-foreground uppercase transition hover:text-white"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="grid gap-4 text-sm text-muted-foreground">
            {contactDetails.operators.map((operator) => (
              <div className="space-y-1" key={operator.email.href}>
                <p className="font-mono text-[11px] tracking-[0.24em] text-white/58 uppercase">
                  {operator.name}
                </p>
                <a
                  className="block transition hover:text-white"
                  href={operator.email.href}
                >
                  {operator.email.value}
                </a>
                <a
                  className="block transition hover:text-white"
                  href={operator.phone.href}
                >
                  {operator.phone.value}
                </a>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
