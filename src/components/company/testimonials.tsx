import { QuoteIcon, StarIcon } from "@/components/icons/pack";
import { SplitHeading, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionBadge } from "@/components/shared/section-badge";
import { testimonials } from "@/data/home";
import { cn } from "@/lib/utils";

const initials = (name: string) =>
  name
    .split(" ")
    .filter((w) => !/^(Dr\.|Mrs\.|Mr\.|Prof\.)$/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col items-center text-center">
          <SectionBadge>Testimonials</SectionBadge>
          <SplitHeading
            className="mt-6 sm:mt-8"
            lines={[
              { text: "What People", inline: true },
              { text: "Are Saying", accent: true, inline: true },
            ]}
          />
        </div>

        <Stagger className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-2 lg:gap-6" stagger={0.12}>
          {testimonials.map((t, i) => {
            const featured = i === 0;
            return (
              <StaggerItem key={t.name} from={i % 2 === 0 ? "left" : "right"} className="h-full">
                <figure
                  className={cn(
                    "flex h-full flex-col justify-between gap-8 rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-1.5 sm:p-9",
                    featured ? "bg-primary text-white" : "bg-surface",
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <StarIcon key={s} className="size-5 text-star" />
                        ))}
                      </div>
                      <QuoteIcon className={cn("size-9", featured ? "text-white/30" : "text-primary/20")} />
                    </div>
                    <blockquote className="mt-6 font-heading text-lg leading-relaxed sm:text-xl">
                      “{t.quote}”
                    </blockquote>
                  </div>
                  <figcaption className="flex items-center gap-4">
                    <span
                      className={cn(
                        "flex size-14 shrink-0 items-center justify-center rounded-full font-heading text-lg font-semibold",
                        featured ? "bg-white text-primary" : "bg-primary text-white",
                      )}
                    >
                      {initials(t.name)}
                    </span>
                    <span>
                      <span className="block font-heading text-lg font-medium">{t.name}</span>
                      <span className={cn("block", featured ? "text-white/75" : "text-muted")}>{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
