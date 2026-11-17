"use client";

import Link from "next/link";

import { ArrowUpRightIcon, ChevronDownIcon } from "@/components/icons/pack";
import { Reveal, SplitHeading, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionBadge } from "@/components/shared/section-badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { REGISTER_URL, academyFaqs } from "@/data/academy";
import { routes } from "@/data/navigation";

export function AcademyFaq() {
  return (
    <section className="pb-20 sm:pb-28 lg:pb-32">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <SectionBadge from="left">Questions</SectionBadge>
          <SplitHeading
            className="mt-6 sm:mt-8 lg:text-[clamp(3rem,5vw,4.5rem)]"
            lines={[{ text: "Before You" }, { text: "Register", accent: true }]}
          />
          <Reveal from="left" className="mt-10 grid gap-4 sm:mt-14">
            <div className="rounded-3xl bg-primary p-7 text-white sm:p-9">
              <h3>Training a team?</h3>
              <p className="mt-2 text-white/85">
                We design custom programmes for universities, companies and NGOs.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="white">
                  <Link href={routes.contact}>
                    Talk To Us <ArrowUpRightIcon />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white/40 text-white hover:border-white hover:bg-white hover:text-primary">
                  <a href={REGISTER_URL} target="_blank" rel="noreferrer">
                    Join Waiting List
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>

        <Stagger className="lg:col-span-6" stagger={0.1}>
          <Accordion type="single" collapsible defaultValue={academyFaqs[0].q} className="grid gap-4 sm:gap-5">
            {academyFaqs.map((faq) => (
              <StaggerItem key={faq.q} from="right">
                <AccordionItem value={faq.q} className="group">
                  <AccordionTrigger className="rounded-2xl bg-surface px-5 py-5 text-base transition-colors duration-300 hover:bg-primary/10 data-[state=open]:bg-primary data-[state=open]:text-white sm:px-8 sm:py-6 sm:text-xl">
                    {faq.q}
                    <ChevronDownIcon className="size-5 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180 sm:size-6" />
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pt-4 pb-2 text-muted sm:px-8 sm:text-lg">{faq.a}</AccordionContent>
                </AccordionItem>
              </StaggerItem>
            ))}
          </Accordion>
        </Stagger>
      </div>
    </section>
  );
}
