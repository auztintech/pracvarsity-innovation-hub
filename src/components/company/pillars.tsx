import Link from "next/link";

import { ArrowUpRightIcon } from "@/components/icons/pack";
import { Reveal, SplitHeading, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionBadge } from "@/components/shared/section-badge";
import { pillars } from "@/data/company";

const directions = ["left", "up", "right"] as const;

export function Pillars() {
  return (
    <section id="pillars" className="bg-surface py-20 sm:py-28 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col items-center text-center">
          <SectionBadge>Our Ecosystem</SectionBadge>
          <SplitHeading
            className="mt-6 sm:mt-8"
            lines={[{ text: "Three Pillars." }, { text: "One Shared Vision.", accent: true }]}
          />
          <Reveal className="mt-5 max-w-xl">
            <p className="text-muted sm:text-lg">
              Each pillar stands on its own, and each one makes the others stronger.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-3 lg:gap-6" stagger={0.15}>
          {pillars.map(({ key, name, tagline, text, href, cta, icon: Icon }, i) => (
            <StaggerItem key={key} from={directions[i]} distance={70} className="h-full">
              <Link
                href={href}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-background p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-primary hover:text-white hover:shadow-2xl hover:shadow-primary/30 sm:p-9"
              >
                <span className="pointer-events-none absolute -top-6 -right-2 font-heading text-[140px] leading-none font-semibold text-foreground/[0.04] transition-colors duration-500 group-hover:text-white/10">
                  0{i + 1}
                </span>
                <span className="relative flex size-16 items-center justify-center rounded-full bg-primary text-white transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-white group-hover:text-primary">
                  <Icon className="size-7" />
                </span>
                <p className="relative mt-8 text-sm font-medium tracking-[0.18em] text-primary uppercase transition-colors group-hover:text-white/80">
                  {tagline}
                </p>
                <h3 className="relative mt-2 text-3xl sm:text-4xl">{name}</h3>
                <p className="relative mt-4 flex-1 text-muted transition-colors duration-500 group-hover:text-white/85 sm:text-lg">
                  {text}
                </p>
                <span className="relative mt-8 inline-flex items-center gap-2 font-heading font-medium">
                  {cta}
                  <ArrowUpRightIcon className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
