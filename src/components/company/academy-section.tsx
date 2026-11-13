import Link from "next/link";

import { ArrowUpRightIcon, CheckCircleIcon } from "@/components/icons/pack";
import { Reveal, SplitHeading, Stagger, StaggerItem, ZoomIn } from "@/components/motion/reveal";
import { Photo } from "@/components/shared/photo";
import { SectionBadge } from "@/components/shared/section-badge";
import { Button } from "@/components/ui/button";
import { academyHighlights, companyImages } from "@/data/company";
import { programs } from "@/data/home";
import { routes } from "@/data/navigation";

const directions = ["left", "up", "right"] as const;

export function AcademySection() {
  return (
    <section id="academy" className="bg-surface py-20 sm:py-28 lg:py-32">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
          <Reveal from="left" className="order-2 lg:order-1 lg:col-span-5">
            <ZoomIn className="rounded-3xl">
              <Photo
                src={companyImages.academy}
                alt="A training session at Pracvarsity Academy"
                className="aspect-[4/5] rounded-3xl sm:aspect-[4/3] lg:aspect-[4/5]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </ZoomIn>
          </Reveal>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <SectionBadge from="right">Pracvarsity Academy</SectionBadge>
            <SplitHeading
              className="mt-6 sm:mt-8 lg:text-[clamp(2.5rem,1rem+3.2vw,4.25rem)]"
              lines={[{ text: "Learning That Leads" }, { text: "To Possibilities.", accent: true }]}
            />
            <Reveal from="right" className="mt-6">
              <p className="max-w-xl text-muted sm:text-lg">
                Our educational arm, focused on practical learning, digital skills, professional
                development and emerging technologies.
              </p>
            </Reveal>
            <Stagger className="mt-8 grid gap-3 sm:grid-cols-2" stagger={0.08}>
              {academyHighlights.map((item) => (
                <StaggerItem key={item} from="right">
                  <p className="flex items-start gap-3 font-heading text-lg">
                    <CheckCircleIcon className="mt-1 size-5 shrink-0 text-primary" />
                    {item}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal from="right" className="mt-9">
              <Button asChild size="lg">
                <Link href={routes.academy}>
                  Explore the Academy <ArrowUpRightIcon />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-20 flex items-end justify-between gap-6 sm:mt-24">
          <h3 className="text-2xl sm:text-3xl">Featured MicroDegrees</h3>
          <Link
            href={routes.academy}
            className="group hidden items-center gap-2 font-heading font-medium text-primary sm:inline-flex"
          >
            View all programmes
            <ArrowUpRightIcon className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </Reveal>

        <Stagger className="mt-8 grid gap-5 md:grid-cols-3 lg:gap-6" stagger={0.12}>
          {programs.slice(0, 3).map((program, i) => (
            <StaggerItem key={program.title} from={directions[i]} className="h-full">
              <Link
                href={routes.academy}
                className="group flex h-full flex-col rounded-3xl bg-background p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10 sm:p-7"
              >
                <span className="w-fit rounded-full bg-primary px-4 py-1.5 font-heading text-sm font-medium text-white">
                  {program.tag}
                </span>
                <h4 className="mt-5 text-xl transition-colors group-hover:text-primary sm:text-2xl">
                  {program.title}
                </h4>
                <p className="mt-3 flex-1 text-muted">{program.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-heading font-medium text-primary">
                  Learn more
                  <ArrowUpRightIcon className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
