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
        <div className="absolute left-1/2 top-[-12rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(198,176,138,0.24)_0%,_rgba(198,176,138,0)_68%)] blur-3xl" />
        <div className="absolute right-[-10rem] top-[20rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,_rgba(129,140,153,0.14)_0%,_rgba(129,140,153,0)_68%)] blur-3xl" />
      </div>

      <Header
        ctaHref={siteContent.contact.primaryAction.href}
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
