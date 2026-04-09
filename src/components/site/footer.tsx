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
    <footer className="border-t border-white/10 pb-10 pt-10 sm:pb-12 sm:pt-12">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.56fr)_minmax(0,0.44fr)] lg:items-end">
        <div className="max-w-2xl">
          <p className="font-mono text-[10px] tracking-[0.32em] text-white/46 uppercase">
            {companyName}
          </p>
          <p className="mt-5 text-[clamp(1.8rem,3vw,3rem)] leading-[1.05] tracking-[-0.07em] text-white">
            {footer.note}
          </p>
        </div>

        <div className="grid gap-8 lg:justify-items-end">
          <nav className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
            {navigation.map((item) => (
              <a
                className="bg-black px-4 py-3 font-mono text-[11px] tracking-[0.26em] text-white/68 uppercase transition hover:bg-white hover:text-black"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="grid gap-5 text-sm text-muted-foreground sm:grid-cols-2 lg:text-right">
            {contactDetails.operators.map((operator) => (
              <div className="space-y-2" key={operator.email.href}>
                <p className="font-mono text-[10px] tracking-[0.28em] text-white/46 uppercase">
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

          <p className="font-mono text-[10px] tracking-[0.28em] text-white/38 uppercase">
            © {new Date().getFullYear()} {companyName}
          </p>
        </div>
      </Container>
    </footer>
  );
}
