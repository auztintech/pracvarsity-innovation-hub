import Link from "next/link";

import { ArrowUpRightIcon } from "@/components/icons/pack";
import { Reveal, SplitHeading, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Photo } from "@/components/shared/photo";
import { SectionBadge } from "@/components/shared/section-badge";
import { Button } from "@/components/ui/button";
import { companyImages, consultancyServices } from "@/data/company";
import { routes } from "@/data/navigation";

export function ConsultancySection() {
  return (
    <section id="consultancy" className="py-20 sm:py-28 lg:py-32">
      <div className="container-x">
        <SectionBadge from="left">Pracvarsity Consultancy</SectionBadge>
        <div className="mt-6 flex flex-col gap-6 sm:mt-8 lg:flex-row lg:items-end lg:justify-between">
          <SplitHeading
            className="lg:text-[clamp(2.5rem,1rem+3.2vw,4.25rem)]"
            lines={[{ text: "Expertise That Moves" }, { text: "Organisations Forward.", accent: true }]}
          />
          <Reveal from="right" className="max-w-md lg:pb-3">
            <p className="text-muted sm:text-lg">
              We help universities, companies, NGOs and development organisations use technology,
              data and people development to deliver real results.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-12 lg:gap-6">
          <Reveal from="left" className="lg:col-span-4">
            <div className="relative h-full min-h-[380px] overflow-hidden rounded-3xl">
              <Photo
                src={companyImages.consultancy}
                alt="Pracvarsity consultancy session"
                className="absolute inset-0"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <h3>Have a project in mind?</h3>
                <p className="mt-2 text-white/85">Tell us what you&apos;re working on and we&apos;ll shape the right support.</p>
                <Button asChild variant="white" className="mt-6">
                  <Link href={routes.contact}>
                    Work With Us <ArrowUpRightIcon />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Stagger className="grid gap-4 sm:grid-cols-2 lg:col-span-8 lg:gap-5" stagger={0.08}>
            {consultancyServices.map(({ icon: Icon, title, text }, i) => (
              <StaggerItem key={title} from={i % 2 === 0 ? "up" : "right"} className="h-full">
                <div className="group h-full rounded-3xl bg-surface p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-primary hover:text-white sm:p-7">
                  <div className="flex items-center gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-white group-hover:text-primary">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="text-lg sm:text-xl">{title}</h3>
                  </div>
                  <p className="mt-4 text-muted transition-colors duration-500 group-hover:text-white/85">{text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
