"use client";

import Link from "next/link";

import { ArrowUpRightIcon, ChevronDownIcon } from "@/components/icons/pack";
import { Reveal, SplitHeading, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionBadge } from "@/components/shared/section-badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs } from "@/data/home";

export function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28 lg:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <SectionBadge from="left">Need Help?</SectionBadge>
          <SplitHeading
            className="mt-6 sm:mt-8 lg:text-[clamp(3rem,5vw,4.5rem)]"
            lines={[
              { text: "Everything You" },
              { text: "Need", inline: true },
              { text: "To Know", accent: true, inline: true },
            ]}
          />
          <Reveal from="left" className="mt-10 sm:mt-14">
            <h3>Have Another Question In Mind?</h3>
            <Button asChild size="lg" className="mt-6">
              <Link href="#contact">
                Ask Us <ArrowUpRightIcon />
              </Link>
            </Button>
          </Reveal>
        </div>

        <Stagger className="lg:col-span-6" stagger={0.1}>
          <Accordion type="single" collapsible defaultValue={faqs[0].q} className="grid gap-4 sm:gap-5">
            {faqs.map((faq) => (
              <StaggerItem key={faq.q} from="right">
                <AccordionItem value={faq.q} className="group">
                  <AccordionTrigger className="rounded-2xl bg-surface px-5 py-5 text-base transition-colors duration-300 hover:bg-primary/10 data-[state=open]:bg-primary data-[state=open]:text-white sm:px-8 sm:py-6 sm:text-xl">
                    {faq.q}
                    <ChevronDownIcon className="size-5 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180 sm:size-6" />
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pt-4 pb-2 text-muted sm:px-8 sm:text-lg">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </StaggerItem>
            ))}
          </Accordion>
        </Stagger>
      </div>
    </section>
  );
}
