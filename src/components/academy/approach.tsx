import { Reveal, SplitHeading, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionBadge } from "@/components/shared/section-badge";
import { approach } from "@/data/academy";

export function Approach() {
  return (
    <section className="py-20 sm:py-28 lg:py-32">
      <div className="container-x">
        <SectionBadge from="left">How We Teach</SectionBadge>
        <div className="mt-6 flex flex-col gap-6 sm:mt-8 lg:flex-row lg:items-end lg:justify-between">
          <SplitHeading lines={[{ text: "Skills You Use," }, { text: "Not Just Study.", accent: true }]} />
          <Reveal from="right" className="max-w-md lg:pb-3">
            <p className="text-muted sm:text-lg">
              Every programme combines live teaching with real projects, so you leave with work to show
              and the confidence to do it again.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6" stagger={0.1}>
          {approach.map(({ icon: Icon, title, text }, i) => (
            <StaggerItem key={title} from={i % 2 === 0 ? "left" : "right"} className="h-full">
              <div className="group h-full rounded-3xl bg-surface p-6 transition-all duration-500 hover:-translate-y-1.5 hover:bg-primary hover:text-white hover:shadow-xl hover:shadow-primary/25 sm:p-7">
                <span className="flex size-14 items-center justify-center rounded-full bg-primary text-white transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-white group-hover:text-primary sm:size-16">
                  <Icon className="size-6 sm:size-7" />
                </span>
                <h3 className="mt-6 text-xl sm:mt-8 sm:text-2xl">{title}</h3>
                <p className="mt-2 text-muted transition-colors duration-500 group-hover:text-white/85">{text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
