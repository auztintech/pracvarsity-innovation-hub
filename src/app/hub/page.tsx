import type { Metadata } from "next";

import { BookingDialogProvider } from "@/components/booking/booking-dialog";
import { Booking } from "@/components/home/booking";
import { Faq } from "@/components/home/faq";
import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";
import { Location } from "@/components/home/location";
import { TrustedMarquee } from "@/components/home/marquee";
import { Pricing } from "@/components/home/pricing";
import { Reviews } from "@/components/home/reviews";
import { Spaces } from "@/components/home/spaces";
import { Why } from "@/components/home/why";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Innovation Hub | Pracvarsity",
  description:
    "24/7 co-working space with fast internet, meeting rooms and study areas, opposite the University of Benin main gate. Book online in minutes, no account needed.",
};

export default function HubPage() {
  return (
    <BookingDialogProvider>
      <Header />
      <main className="overflow-x-clip">
        <Hero />
        <TrustedMarquee />
        <Spaces />
        <Features />
        <Why />
        <Pricing />
        <Reviews />
        <Faq />
        <Booking />
        <Location />
      </main>
      <Footer />
    </BookingDialogProvider>
  );
}
