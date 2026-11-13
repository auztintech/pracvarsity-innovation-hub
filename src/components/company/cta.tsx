import Link from "next/link";

import { ArrowUpRightIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons/pack";
import { Reveal, SplitHeading, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionBadge } from "@/components/shared/section-badge";
import { ctaActions } from "@/data/company";
import { contact } from "@/data/home";
import { cn } from "@/lib/utils";

const directions = ["left", "up", "right"] as const;

export function CallToAction() {
  return (
    <section id="contact" className="pt-20 sm:pt-28 lg:pt-32">
      <div className="container-x">
        <div className="flex flex-col items-center text-center">
          <SectionBadge>Get Involved</SectionBadge>
          <SplitHeading
            className="mt-6 sm:mt-8"
            lines={[{ text: "Let's Build Something" }, { text: "Meaningful Together.", accent: true }]}
          />
          <Reveal className="mt-5 max-w-2xl">
            <p className="text-muted sm:text-lg">
              Whether you&apos;re looking for a place to work, an opportunity to learn, or an
              organisation to collaborate with, there&apos;s a place for you at Pracvarsity.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-3 lg:gap-6" stagger={0.12}>
          {ctaActions.map((action, i) => (
            <StaggerItem key={action.title} from={directions[i]} className="h-full">
              <Link
                href={action.href}
                className={cn(
                  "group flex h-full flex-col justify-between gap-10 rounded-3xl p-7 transition-all duration-500 hover:-translate-y-2 sm:p-9",
                  i === 1
                    ? "bg-primary text-white hover:shadow-2xl hover:shadow-primary/30"
                    : "bg-surface hover:bg-foreground hover:text-white",
                )}
              >
                <span className="font-heading text-sm text-current/60">0{i + 1}</span>
                <div>
                  <h3 className="text-2xl sm:text-3xl">{action.title}</h3>
                  <p className={cn("mt-3", i === 1 ? "text-white/80" : "text-muted group-hover:text-white/75")}>
                    {action.text}
                  </p>
                  <span
                    className={cn(
                      "mt-8 flex size-14 items-center justify-center rounded-full transition-transform duration-500 group-hover:rotate-45",
                      i === 1 ? "bg-white text-primary" : "bg-primary text-white",
                    )}
                  >
                    <ArrowUpRightIcon className="size-5" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger className="mt-5 grid gap-4 md:grid-cols-3 lg:gap-6" stagger={0.1}>
          {[
            { icon: MailIcon, text: contact.emails[1] ?? contact.emails[0], href: `mailto:${contact.emails[1] ?? contact.emails[0]}` },
            { icon: PhoneIcon, text: contact.phones[0], href: `tel:${contact.phones[0].replace(/\s/g, "")}` },
            { icon: MapPinIcon, text: contact.shortAddress, href: "/hub#contact" },
          ].map(({ icon: Icon, text, href }) => (
            <StaggerItem key={text} from="up">
              <a
                href={href}
                className="flex items-center gap-4 rounded-2xl border border-border p-5 transition-colors hover:border-primary hover:text-primary"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <span className="font-heading text-lg">{text}</span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
