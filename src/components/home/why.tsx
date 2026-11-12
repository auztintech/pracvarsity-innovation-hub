"use client";

import { MinusIcon, PlusIcon } from "@/components/icons/pack";
import { Counter, Reveal, SplitHeading, ZoomIn } from "@/components/motion/reveal";
import { Photo } from "@/components/shared/photo";
import { SectionBadge } from "@/components/shared/section-badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { images, whyItems } from "@/data/home";

export function Why() {
  return (
    <section id="why" className="py-20 sm:py-28 lg:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionBadge from="left">Why Pracvarsity</SectionBadge>
          </div>
          <SplitHeading
            className="lg:col-span-8"
            lines={[{ text: "A Space That Works" }, { text: "The Way You Do", accent: true }]}
          />
        </div>

        <div className="mt-12 grid gap-8 sm:mt-16 lg:grid-cols-12 lg:gap-8">
          <Reveal from="left" className="flex flex-col justify-between gap-8 lg:col-span-4">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
              <div className="rounded-2xl bg-primary p-6 text-white sm:p-8 lg:w-fit lg:min-w-64">
                <p className="font-heading text-5xl font-medium sm:text-6xl">
                  <Counter to={380} suffix="+" />
                </p>
                <p className="mt-2 font-heading text-lg sm:text-xl">Happy Members</p>
              </div>
              <div className="rounded-2xl bg-surface p-6 sm:p-8 lg:w-fit lg:min-w-64">
                <p className="font-heading text-5xl font-medium sm:text-6xl">
                  <Counter to={24} />
                  <span className="text-primary">/7</span>
                </p>
                <p className="mt-2 font-heading text-lg sm:text-xl">Power &amp; Internet</p>
              </div>
            </div>
            <p className="max-w-sm text-muted sm:text-lg">
              From quiet focus corners to collaboration spaces, we built every part of the hub for
              learners and builders who want real progress.
            </p>
          </Reveal>

          <Reveal from="up" className="lg:col-span-4">
            <ZoomIn className="h-full rounded-3xl">
              <Photo
                src={images.why}
                alt="Members working together"
                className="aspect-[4/3] h-full rounded-3xl lg:aspect-auto lg:min-h-[420px]"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
            </ZoomIn>
          </Reveal>

          <Reveal from="right" className="lg:col-span-4">
            <Accordion type="single" defaultValue={whyItems[0].title} collapsible>
              {whyItems.map((item) => (
                <AccordionItem key={item.title} value={item.title} className="group border-b border-border">
                  <AccordionTrigger className="py-5 text-lg sm:text-2xl hover:text-primary">
                    {item.title}
                    <span className="relative size-6 shrink-0">
                      <PlusIcon className="absolute inset-0 size-6 transition-all duration-300 group-data-[state=open]:rotate-90 group-data-[state=open]:opacity-0" />
                      <MinusIcon className="absolute inset-0 size-6 opacity-0 transition-all duration-300 group-data-[state=open]:opacity-100" />
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-muted sm:text-lg">{item.text}</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {item.chips.map((chip) => (
                        <span key={chip} className="rounded-full bg-surface px-5 py-2.5 text-[15px]">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
