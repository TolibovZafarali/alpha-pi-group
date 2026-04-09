import { BrandLogo } from "@/components/ui/brand-logo";
import { Container } from "@/components/ui/container";
import type { SiteContent } from "@/content/site";

type FooterProps = {
  companyName: string;
  footer: SiteContent["footer"];
  navigation: SiteContent["navigation"];
};

export function Footer({ companyName, footer, navigation }: FooterProps) {
  return (
    <footer className="border-t border-white/10 pb-10 pt-8">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-4">
          <a
            className="inline-block rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            href="#top"
          >
            <BrandLogo className="w-[150px]" />
          </a>
          <p className="max-w-md text-sm leading-7 text-muted-foreground">
            {footer.note}
          </p>
        </div>

        <div className="space-y-4 lg:text-right">
          <nav className="flex flex-wrap gap-4 lg:justify-end">
            {navigation.map((item) => (
              <a
                className="text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase transition hover:text-foreground"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

