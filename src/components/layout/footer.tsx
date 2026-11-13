"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

import { ArrowUpRightIcon } from "@/components/icons/pack";
import { socials } from "@/components/home/reviews";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { contact } from "@/data/home";

const columns = [
  {
    title: "Quick Links",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Contact Us", href: "#contact" },
      { label: "Book A Workspace", href: "#book" },
      { label: "Training Programs", href: "#programs" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { label: "Co-working Space", href: "#spaces" },
      { label: "Daily Pass", href: "#pricing" },
      { label: "Weekly Membership", href: "#pricing" },
      { label: "Monthly Subscription", href: "#pricing" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQs", href: "#faq" },
      { label: "Terms Of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Join Waiting List", href: "#programs" },
    ],
  },
];

function Year() {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.textContent = String(new Date().getFullYear());
  }, []);
  return <span ref={ref}>2026</span>;
}

export function Footer({ cta = true }: { cta?: boolean }) {
  return (
    <footer className="pt-20 sm:pt-28">
      <div className="container-x">
        {/* CTA */}
        {cta && (
        <Reveal from="up">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-white sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-white/10" />
            <div className="pointer-events-none absolute -bottom-32 left-1/3 size-80 rounded-full bg-white/5" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="h2-lead">Ready To Get Started?</h2>
                <p className="mt-3 max-w-lg text-white/80 sm:text-lg">
                  Grab a desk for the day or join the next training cohort.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" variant="white">
                  <Link href="#book">
                    Book A Workspace <ArrowUpRightIcon />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:border-white hover:bg-white hover:text-primary">
                  <Link href="#programs">Join Training Waiting List</Link>
                </Button>
              </div>
            </div>
          </div>
                </Reveal>
        )}

    

        <Stagger className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12" stagger={0.1}>
          <StaggerItem from="left" className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-muted">
              Empowering practical learning and innovation in Africa through co-working spaces and
              hands-on training.
            </p>
            <form className="mt-6 flex max-w-sm gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" placeholder="Your email for updates" className="bg-surface" aria-label="Email" />
              <Button type="submit">Subscribe</Button>
            </form>
          </StaggerItem>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8">
            {columns.map((col) => (
              <StaggerItem key={col.title} from="right">
                <h3 className="text-xl sm:text-2xl">{col.title}</h3>
                <ul className="mt-5 grid gap-3.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-muted transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </div>
        </Stagger>

        <Stagger className="grid gap-10 border-t border-border py-12 md:grid-cols-3" stagger={0.1}>
          <StaggerItem from="left">
            <h3 className="text-xl sm:text-2xl">Our Social Media</h3>
            <div className="mt-5 flex gap-2.5">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-12 items-center justify-center rounded-full bg-primary text-white transition-transform duration-300 hover:-translate-y-1 hover:bg-primary-dark"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </StaggerItem>
          <StaggerItem from="up">
            <h3 className="text-xl sm:text-2xl">Email</h3>
            <div className="mt-5 grid gap-1">
              {contact.emails.map((e) => (
                <a key={e} href={`mailto:${e}`} className="text-muted hover:text-primary">
                  {e}
                </a>
              ))}
            </div>
          </StaggerItem>
          <StaggerItem from="right">
            <h3 className="text-xl sm:text-2xl">Address</h3>
            <p className="mt-5 text-muted">{contact.address}</p>
          </StaggerItem>
        </Stagger>
      </div>

      <div className="border-t border-border">
        <div className="container-x flex flex-col gap-3 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:text-base">
          <p>Copyright © <Year /> Pracvarsity. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
