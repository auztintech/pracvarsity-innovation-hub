"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import {
  CheckCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  QuoteIcon,
  StarIcon,
  XIcon,
} from "@/components/icons/pack";
import { Counter, Reveal, SplitHeading } from "@/components/motion/reveal";
import { Photo } from "@/components/shared/photo";
import { SectionBadge } from "@/components/shared/section-badge";
import { images, testimonials } from "@/data/home";

export const socials = [
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
  { label: "X", href: "#", icon: XIcon },
  { label: "Facebook", href: "#", icon: FacebookIcon },
];

export function Reviews() {
  const [[index, dir], setState] = useState([0, 1]);
  const [paused, setPaused] = useState(false);

  const go = (step: number) =>
    setState(([i]) => [(i + step + testimonials.length) % testimonials.length, step]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), 6000);
    return () => clearInterval(id);
  }, [paused]);

  const current = testimonials[index];
  const featured = testimonials[(index + 1) % testimonials.length];

  return (
    <section className="py-20 sm:py-28 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col items-center text-center">
          <SectionBadge>Reviews</SectionBadge>
          <SplitHeading
            className="mt-6 sm:mt-8"
            lines={[
              { text: "Members", inline: true },
              { text: "Experience", accent: true, inline: true },
            ]}
          />
        </div>

        <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-12 lg:gap-8">
          {/* Stats */}
          <Reveal from="left" className="flex flex-col justify-between gap-8 lg:col-span-3">
            <div>
              <p className="flex items-end gap-3 font-heading">
                <StarIcon className="mb-2 size-12 text-star sm:size-14" />
                <span className="text-6xl font-medium sm:text-7xl">
                  <Counter to={100} suffix="+" />
                </span>
              </p>
              <ul className="mt-6 grid gap-3">
                {["Happy Members", "Lecturers & Students Trained", "1K+ Mbps Internet"].map((t) => (
                  <li key={t} className="flex items-center gap-3 font-heading text-lg sm:text-xl">
                    <CheckCircleIcon className="size-5 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-heading text-lg sm:text-xl">Stay Connected:</span>
              <div className="flex gap-2.5">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex size-11 items-center justify-center rounded-full bg-primary text-white transition-transform duration-300 hover:-translate-y-1 hover:bg-primary-dark sm:size-12"
                  >
                    <Icon className="size-5" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Image with featured quote */}
          <Reveal from="up" className="lg:col-span-5">
            <div className="relative h-full min-h-[380px] overflow-hidden rounded-3xl sm:min-h-[460px]">
              <Photo
                src={images.review}
                alt="A Pracvarsity member"
                className="absolute inset-0"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={featured.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <QuoteIcon className="size-8 text-white/80" />
                    <p className="mt-3 font-heading text-lg leading-snug sm:text-xl">“{featured.quote}”</p>
                    <p className="mt-4 text-white/80">— {featured.name}, {featured.role}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>

          {/* Carousel card */}
          <Reveal from="right" className="lg:col-span-4">
            <div
              className="flex h-full flex-col overflow-hidden rounded-3xl bg-surface p-6 sm:p-8"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="flex gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="size-6 text-star" />
                ))}
              </div>

              <div className="relative mt-6 flex-1">
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.div
                    key={current.name}
                    custom={dir}
                    initial={{ opacity: 0, x: dir * 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: dir * -60 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="flex h-full flex-col justify-between gap-8"
                  >
                    <p className="font-heading text-lg leading-relaxed sm:text-xl">“{current.quote}”</p>
                    <div className="flex items-center gap-4">
                      <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg font-semibold text-white sm:size-16">
                        {current.name
                          .replace(/^(Dr\.|Mrs\.|\s)+/g, "")
                          .split(" ")
                          .filter((w) => !/^(Dr\.|Mrs\.)$/.test(w))
                          .slice(0, 2)
                          .map((w) => w[0])
                          .join("")}
                      </span>
                      <div>
                        <p className="font-heading text-lg font-medium sm:text-xl">{current.name}</p>
                        <p className="text-muted">{current.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <div className="flex gap-2">
                  {testimonials.map((t, i) => (
                    <button
                      key={t.name}
                      type="button"
                      aria-label={`Show review ${i + 1}`}
                      onClick={() => setState([i, i > index ? 1 : -1])}
                      className={`h-2 cursor-pointer rounded-full transition-all duration-500 ${
                        i === index ? "w-8 bg-primary" : "w-2 bg-foreground/20"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    aria-label="Previous review"
                    onClick={() => go(-1)}
                    className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-foreground/15 transition-colors hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <ChevronLeftIcon className="size-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next review"
                    onClick={() => go(1)}
                    className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-dark"
                  >
                    <ChevronRightIcon className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
