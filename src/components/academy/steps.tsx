import { SplitHeading, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionBadge } from "@/components/shared/section-badge";
import { steps } from "@/data/academy";

export function Steps() {
  return (
    <section className="py-20 sm:py-28 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-start sm:justify-between">
          <SplitHeading lines={[{ text: "Four Steps" }, { text: "To Get Started", accent: true }]} />
          <SectionBadge from="right" className="shrink-0">
            How It Works
          </SectionBadge>
        </div>

        <Stagger className="relative mt-12 grid gap-5 sm:mt-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-6" stagger={0.15}>
          <div className="pointer-events-none absolute top-8 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 lg:block" />
          {steps.map((step, i) => (
            <StaggerItem key={step.title} from="up" className="h-full">
              <div className="relative h-full">
                <span className="relative z-10 flex size-16 items-center justify-center rounded-full bg-primary font-heading text-2xl font-semibold text-white ring-8 ring-background">
                  {i + 1}
                </span>
                <h3 className="mt-6 text-xl sm:text-2xl">{step.title}</h3>
                <p className="mt-2 text-muted">{step.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
