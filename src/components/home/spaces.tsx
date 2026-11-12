import Link from "next/link";

import { ArrowUpRightIcon, MapPinIcon } from "@/components/icons/pack";
import { SplitHeading, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Photo } from "@/components/shared/photo";
import { SectionBadge } from "@/components/shared/section-badge";
import { Button } from "@/components/ui/button";
import { contact, spaces } from "@/data/home";

export function Spaces() {
  return (
    <section id="spaces" className="py-20 sm:py-28 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col items-center text-center">
          <SectionBadge>Our Spaces</SectionBadge>
          <SplitHeading
            className="mt-6 sm:mt-8"
            lines={[{ text: "Work Your Way In" }, { text: "The Right Space", accent: true }]}
          />
        </div>

        <Stagger className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-2 lg:gap-14" stagger={0.15}>
          {spaces.map((space, i) => (
            <StaggerItem key={space.name} from={i % 2 === 0 ? "left" : "right"} distance={80}>
              <article className="group rounded-3xl bg-surface p-3 transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary/10 sm:p-5 md:odd:mt-0">
                <div className="overflow-hidden rounded-2xl">
                  <Photo
                    src={space.image}
                    alt={space.name}
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="aspect-[16/11]"
                    imgClassName="transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3 rounded-2xl bg-background p-5 sm:mt-5 sm:p-7">
                  <h3>{space.name}</h3>
                  <p className="mt-2 flex items-center gap-2 text-muted">
                    <MapPinIcon className="size-4" /> {space.caption} · {contact.shortAddress}
                  </p>
                  <div className="my-5 h-px bg-border" />
                  <ul className="flex flex-wrap gap-x-6 gap-y-3">
                    {space.tags.map(({ icon: Icon, label }) => (
                      <li key={label} className="flex items-center gap-2 text-[15px] sm:text-base">
                        <Icon className="size-5 text-primary" />
                        {label}
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg" className="mt-6 w-full">
                    <Link href="#book">
                      Book Space
                      <ArrowUpRightIcon className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                  </Button>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
