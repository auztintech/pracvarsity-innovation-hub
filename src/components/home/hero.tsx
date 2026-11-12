"use client";

import Link from "next/link";
import { motion } from "motion/react";

import { ArrowUpRightIcon, PlayIcon } from "@/components/icons/pack";
import { SplitHeading } from "@/components/motion/reveal";
import { Photo } from "@/components/shared/photo";
import { SectionBadge } from "@/components/shared/section-badge";
import { Button } from "@/components/ui/button";
import { images } from "@/data/home";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44">
      <div className="container-x">
        <SectionBadge from="left">Pracvarsity Hub</SectionBadge>

        <div className="mt-6 grid gap-8 sm:mt-10 lg:grid-cols-12 lg:items-end lg:gap-10">
          <SplitHeading
            as="h1"
            animateOnMount
            delay={0.2}
            className="lg:col-span-8"
            lines={[{ text: "Where Ideas Become Skills," }, { text: "Skills Become Innovation", accent: true }]}
          />

          <motion.div
            className="lg:col-span-4 lg:pb-4"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
          >
            <p className="max-w-md text-muted sm:text-lg">
              A practical co-working and learning hub for students, remote workers, freelancers and
              young innovators, right opposite the University of Benin main gate.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="#book">
                  Book Now
                  <ArrowUpRightIcon className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#programs">Join Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-12 lg:gap-6">
          {/* Main image */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.75, ease: EASE }}
          >
            <div className="group relative overflow-hidden rounded-3xl">
              <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.6, delay: 0.75, ease: EASE }}
              >
                <Photo
                  src={images.hero}
                  alt="Members working at the Pracvarsity hub"
                  priority
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-[460px]"
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>

              <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-full bg-white/90 py-2 pr-5 pl-2 backdrop-blur sm:bottom-6 sm:left-6">
                <span className="relative flex size-10 items-center justify-center rounded-full bg-primary text-white">
                  <span className="absolute inset-0 animate-ping rounded-full bg-primary/40" />
                  <PlayIcon className="relative size-4" />
                </span>
                <span className="font-heading text-sm font-medium sm:text-base">Open 24/7</span>
              </div>
            </div>
          </motion.div>

          {/* Featured spaces card */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: EASE }}
          >
            <div className="flex h-full flex-col rounded-3xl bg-surface p-5 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <h3>Our Featured Spaces</h3>
                <Link
                  href="#spaces"
                  aria-label="See all spaces"
                  className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-transform duration-300 hover:rotate-45 sm:size-14"
                >
                  <ArrowUpRightIcon className="size-5" />
                </Link>
              </div>
              <div className="mt-6 grid flex-1 grid-cols-2 gap-4">
                {images.gallery.slice(0, 2).map((src, i) => (
                  <div key={src} className="group overflow-hidden rounded-2xl">
                    <Photo
                      src={src}
                      alt={i === 0 ? "Workstations" : "Meeting area"}
                      sizes="(min-width: 1024px) 16vw, 50vw"
                      className="aspect-[4/3] h-full lg:aspect-auto lg:min-h-48"
                      imgClassName="transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
