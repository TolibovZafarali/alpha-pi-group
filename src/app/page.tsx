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
        <HeroSection hero={siteContent.hero} />
        <ServicesSection services={siteContent.services} />
        <AboutSection about={siteContent.about} />
        <ContactCtaSection
          contact={siteContent.contact}
          contactDetails={siteContent.contactDetails}
        />
      </main>

      <Footer
        companyName={siteContent.companyName}
        footer={siteContent.footer}
        navigation={siteContent.navigation}
      />
    </div>
  );
}
