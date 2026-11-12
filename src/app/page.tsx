import { About } from "@/components/home/about";
import { Booking } from "@/components/home/booking";
import { Faq } from "@/components/home/faq";
import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";
import { Location } from "@/components/home/location";
import { TrustedMarquee } from "@/components/home/marquee";
import { Pricing } from "@/components/home/pricing";
import { Programs } from "@/components/home/programs";
import { Reviews } from "@/components/home/reviews";
import { Spaces } from "@/components/home/spaces";
import { Why } from "@/components/home/why";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="overflow-x-clip">
        <Hero />
        <TrustedMarquee />
        <About />
        <Spaces />
        <Features />
        <Why />
        <Pricing />
        <Programs />
        <Reviews />
        <Faq />
        <Booking />
        <Location />
      </main>
      <Footer />
    </>
  );
}
