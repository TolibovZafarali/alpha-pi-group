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
        <div className="absolute left-[-8rem] top-20 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.12)_0%,_rgba(255,255,255,0)_68%)] blur-3xl" />
        <div className="absolute right-[-12rem] top-[28rem] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_0%,_rgba(255,255,255,0)_70%)] blur-3xl" />
        <div className="absolute inset-x-0 top-[38rem] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
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
