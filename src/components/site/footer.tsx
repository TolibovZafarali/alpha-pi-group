import { Container } from "@/components/ui/container";
import type { SiteContent } from "@/content/site";

type FooterProps = {
  companyName: string;
  footer: SiteContent["footer"];
  navigation: SiteContent["navigation"];
};

export function Footer({ companyName, footer, navigation }: FooterProps) {
  return (
    <footer className="border-t border-white/10 py-8 sm:py-10">
      <Container className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="font-mono text-[10px] tracking-[0.3em] text-white/46 uppercase">
            {companyName}
          </p>
          <p className="mt-3 text-sm leading-6 text-white/64 sm:text-base">
            {footer.note}
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <nav className="flex flex-wrap gap-5">
            {navigation.map((item) => (
              <a
                className="font-mono text-[11px] tracking-[0.24em] text-white/64 uppercase transition-colors duration-200 hover:text-white"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <p className="font-mono text-[10px] tracking-[0.24em] text-white/38 uppercase">
            © {new Date().getFullYear()} {companyName}
          </p>
        </div>
      </Container>
    </footer>
  );
}
