import type { Metadata } from "next";

import { AcademyFaq } from "@/components/academy/academy-faq";
import { Approach } from "@/components/academy/approach";
import { Courses } from "@/components/academy/courses";
import { AcademyHero } from "@/components/academy/hero";
import { Steps } from "@/components/academy/steps";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Academy | Pracvarsity",
  description:
    "Practical MicroDegrees in emerging technologies, data analytics, research, healthcare, social impact and low-code development.",
};

export default function AcademyPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-clip">
        <AcademyHero />
        <Approach />
        <Courses />
        <Steps />
        <AcademyFaq />
      </main>
      <Footer />
    </>
  );
}
