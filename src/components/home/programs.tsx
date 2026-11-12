import Link from "next/link";

import { ArrowUpRightIcon, UsersIcon } from "@/components/icons/pack";
import { Reveal, SplitHeading, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Photo } from "@/components/shared/photo";
import { SectionBadge } from "@/components/shared/section-badge";
import { Button } from "@/components/ui/button";
import { programs } from "@/data/home";

const directions = ["left", "up", "right"] as const;

export function Programs() {
  return (
    <section id="programs" className="py-20 sm:py-28 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-start sm:justify-between">
          <SplitHeading lines={[{ text: "Learn Skills" }, { text: "That Matter", accent: true }]} />
          <SectionBadge from="right" className="shrink-0">
            MicroDegrees
          </SectionBadge>
        </div>

        <Stagger className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-10" stagger={0.1}>
          {programs.map((program, i) => (
            <StaggerItem key={program.title} from={directions[i % 3]} className="h-full">
              <article className="group flex h-full flex-col rounded-3xl bg-surface p-3 sm:p-5">
                <div className="overflow-hidden rounded-2xl">
                  <Photo
                    src={program.image}
                    alt={program.title}
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                    className="aspect-[16/11]"
                    imgClassName="transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col px-2 pt-5 pb-2 sm:px-1">
                  <span className="w-fit rounded-full bg-primary px-4 py-1.5 font-heading text-sm font-medium text-white">
                    {program.tag}
                  </span>
                  <h3 className="mt-4 text-xl transition-colors group-hover:text-primary sm:text-2xl">
                    MicroDegree in {program.title}
                  </h3>
                  <p className="mt-2 text-muted">{program.text}</p>
                  <p className="mt-4 flex items-start gap-2 text-sm text-muted">
                    <UsersIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                    {program.audience}
                  </p>
                  <Link
                    href="#book"
                    className="mt-auto inline-flex items-center gap-2 pt-6 font-heading font-medium text-primary"
                  >
                    Register Now
                    <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-12 flex justify-center sm:mt-16">
          <Button asChild size="lg" variant="outline">
            <Link href="#book">
              Explore All Programs <ArrowUpRightIcon />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
