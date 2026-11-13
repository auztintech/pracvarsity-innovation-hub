import { Counter, Reveal, SplitHeading, Stagger, StaggerItem } from "@/components/motion/reveal";
import { impactStats } from "@/data/company";

export function Impact() {
  return (
    <section className="py-10 sm:py-14">
      <div className="container-x">
        <Reveal from="up" distance={80}>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-white sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -top-32 -right-24 size-96 rounded-full bg-white/10" />
            <div className="pointer-events-none absolute -bottom-40 -left-20 size-96 rounded-full bg-white/5" />

            <div className="relative flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-medium tracking-[0.18em] text-white/70 uppercase">Our Impact</p>
                <SplitHeading
                  className="mt-4"
                  lines={[{ text: "Pracvarsity" }, { text: "At A Glance" }]}
                />
              </div>
              <p className="max-w-sm text-white/80 sm:text-lg">
                A few numbers that show the work so far, and the community still growing around it.
              </p>
            </div>

            <Stagger className="relative mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/15 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
              {impactStats.map((stat) => (
                <StaggerItem key={stat.label} from="up" className="h-full">
                  <div className="h-full bg-primary p-6 sm:p-8">
                    <p className="font-heading text-5xl font-medium tracking-tight sm:text-6xl">
                      {stat.value !== undefined ? <Counter to={stat.value} suffix={stat.suffix} /> : stat.label}
                    </p>
                    {stat.value !== undefined && (
                      <p className="mt-3 font-heading text-lg font-medium">{stat.label}</p>
                    )}
                    <p className="mt-2 text-white/75">{stat.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
