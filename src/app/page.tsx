import { AboutSection } from "@/components/site/about-section";
import { ContactCtaSection } from "@/components/site/contact-cta-section";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { HeroSection } from "@/components/site/hero-section";
import { ServicesSection } from "@/components/site/services-section";
import { siteContent } from "@/content/site";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Header ctaHref="#contact" navigation={siteContent.navigation} />

      <main className="relative">
        <div data-scroll-theme="dark">
          <HeroSection hero={siteContent.hero} />
        </div>
        <div data-scroll-theme="light">
          <ServicesSection services={siteContent.services} />
        </div>
        <div data-scroll-theme="dark">
          <AboutSection about={siteContent.about} />
        </div>
        <div data-scroll-theme="light">
          <ContactCtaSection
            contact={siteContent.contact}
            contactDetails={siteContent.contactDetails}
          />
        </div>
      </main>

      <div data-scroll-theme="dark">
        <Footer
          companyName={siteContent.companyName}
          footer={siteContent.footer}
          navigation={siteContent.navigation}
        />
      </div>
    </div>
  );
}
