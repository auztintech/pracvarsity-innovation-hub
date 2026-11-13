import { AcademySection } from "@/components/company/academy-section";
import { ConsultancySection } from "@/components/company/consultancy-section";
import { CallToAction } from "@/components/company/cta";
import { CompanyHero } from "@/components/company/hero";
import { HubSection } from "@/components/company/hub-section";
import { Impact } from "@/components/company/impact";
import { Partners } from "@/components/company/partners";
import { Pillars } from "@/components/company/pillars";
import { Testimonials } from "@/components/company/testimonials";
import { WhoWeAre } from "@/components/company/who-we-are";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="overflow-x-clip">
        <CompanyHero />
        <WhoWeAre />
        <Pillars />
        <HubSection />
        <AcademySection />
        <ConsultancySection />
        <Impact />
        <Testimonials />
        <Partners />
        <CallToAction />
      </main>
      <Footer cta={false} />
    </>
  );
}