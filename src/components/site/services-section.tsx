import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import type { SiteContent } from "@/content/site";

type ServicesSectionProps = {
  services: SiteContent["services"];
};

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section
      className="scroll-mt-24 bg-white py-20 text-black sm:py-24 lg:py-28"
      id="services"
    >
      <Container>
        <Reveal className="max-w-3xl">
          <p className="font-mono text-[10px] tracking-[0.3em] text-black/52 uppercase">
            {services.eyebrow}
          </p>
          <h2 className="mt-5 text-[clamp(2.8rem,6vw,5.4rem)] leading-[0.92] font-medium tracking-[-0.1em] text-black">
            {services.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-black/66 sm:text-lg sm:leading-8">
            {services.description}
          </p>
        </Reveal>

        <div className="mt-12 border-t border-black/12">
          {services.items.map((item) => (
            <Reveal key={item.index}>
              <article className="grid gap-4 border-b border-black/12 py-6 sm:py-8 md:grid-cols-[72px_minmax(180px,240px)_minmax(0,1fr)] md:gap-6">
                <span className="font-mono text-[10px] tracking-[0.3em] text-black/48 uppercase">
                  {item.index}
                </span>
                <h3 className="text-2xl leading-none font-medium tracking-[-0.05em] text-black sm:text-[2rem]">
                  {item.title}
                </h3>
                <p className="max-w-2xl text-base leading-7 text-black/68 sm:text-lg sm:leading-8">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
