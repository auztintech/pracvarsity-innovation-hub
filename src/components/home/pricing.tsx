import { BookPlanButton } from "@/components/booking/booking-dialog";
import { ArrowUpRightIcon, CheckIcon } from "@/components/icons/pack";
import { Reveal, SplitHeading, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionBadge } from "@/components/shared/section-badge";
import { plans } from "@/data/home";
import { cn } from "@/lib/utils";

const directions = ["left", "up", "right"] as const;

export function Pricing() {
  return (
    <section id="pricing" className="bg-surface py-20 sm:py-28 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col items-center text-center">
          <SectionBadge>Pricing</SectionBadge>
          <SplitHeading
            className="mt-6 sm:mt-8"
            lines={[{ text: "Choose Your" }, { text: "Perfect Plan", accent: true }]}
          />
          <Reveal className="mt-5 max-w-xl">
            <p className="text-muted sm:text-lg">
              Every plan includes 24/7 electricity, high-speed internet, a comfortable workstation and
              community access.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-3 lg:items-center lg:gap-6" stagger={0.15}>
          {plans.map((plan, i) => (
            <StaggerItem key={plan.name} from={directions[i]} distance={70}>
              <div
                className={cn(
                  "relative rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-2 sm:p-9",
                  plan.featured
                    ? "bg-primary text-white shadow-2xl shadow-primary/30 lg:py-14"
                    : "bg-background",
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3>{plan.name}</h3>
                  <span
                    className={cn(
                      "rounded-full px-4 py-1.5 text-sm",
                      plan.featured ? "bg-white text-primary" : "bg-surface",
                    )}
                  >
                    {plan.note}
                  </span>
                </div>
                <p className="mt-6 font-heading">
                  <span className="text-5xl font-medium tracking-tight sm:text-6xl">{plan.price}</span>
                  <span className={plan.featured ? "text-white/75" : "text-muted"}>{plan.period}</span>
                </p>
                <div className={cn("my-7 h-px", plan.featured ? "bg-white/20" : "bg-border")} />
                <ul className="grid gap-3.5">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-3">
                      <span
                        className={cn(
                          "flex size-6 items-center justify-center rounded-full",
                          plan.featured ? "bg-white text-primary" : "bg-primary text-white",
                        )}
                      >
                        <CheckIcon className="size-3.5" />
                      </span>
                      <span className={plan.featured ? "text-white/90" : "text-muted"}>{perk}</span>
                    </li>
                  ))}
                </ul>
                <BookPlanButton
                  plan={plan.name.toLowerCase()}
                  variant={plan.featured ? "white" : "default"}
                  className="mt-8 w-full"
                >
                  Choose {plan.name}
                  <ArrowUpRightIcon />
                </BookPlanButton>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
