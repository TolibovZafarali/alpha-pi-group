import { AboutSection } from "@/components/site/about-section";
import { ContactCtaSection } from "@/components/site/contact-cta-section";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { HeroSection } from "@/components/site/hero-section";
import { ServicesSection } from "@/components/site/services-section";
import { WhyUsSection } from "@/components/site/why-us-section";
import { siteContent } from "@/content/site";

export default function Home() {
  return (
    <div className="relative overflow-x-clip bg-background text-foreground">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-5 top-0 h-full w-px bg-white/8 sm:left-8 lg:left-12" />
        <div className="absolute right-5 top-0 h-full w-px bg-white/8 sm:right-8 lg:right-12" />
        <div className="absolute left-[-10rem] top-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.16)_0%,_rgba(255,255,255,0)_70%)] blur-3xl" />
        <div className="absolute right-[-14rem] top-[20rem] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0)_70%)] blur-3xl" />
        <div className="absolute left-1/2 top-[22rem] hidden h-[34rem] w-px -translate-x-1/2 bg-gradient-to-b from-white/28 via-white/10 to-transparent lg:block" />
        <div className="editorial-outline absolute right-[-6vw] top-[14rem] hidden text-[clamp(8rem,18vw,18rem)] leading-none font-medium tracking-[-0.12em] uppercase xl:block">
          Alpha-Pi
        </div>
      </div>

      <Header
        ctaHref="#contact"
        navigation={siteContent.navigation}
      />

      <main className="relative">
        <HeroSection
          contactDetails={siteContent.contactDetails}
          hero={siteContent.hero}
        />
        <AboutSection about={siteContent.about} />
        <ServicesSection services={siteContent.services} />
        <WhyUsSection whyUs={siteContent.whyUs} />
        <ContactCtaSection
          companyName={siteContent.companyName}
          contact={siteContent.contact}
          contactDetails={siteContent.contactDetails}
        />
      </main>

      <Footer
        companyName={siteContent.companyName}
        contactDetails={siteContent.contactDetails}
        footer={siteContent.footer}
        navigation={siteContent.navigation}
      />
    </div>
  );
}
