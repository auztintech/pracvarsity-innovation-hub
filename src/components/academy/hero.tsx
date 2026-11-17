"use client";

import Link from "next/link";
import { motion } from "motion/react";

import { ArrowUpRightIcon, CheckCircleIcon, GraduationIcon } from "@/components/icons/pack";
import { Counter, SplitHeading } from "@/components/motion/reveal";
import { Photo } from "@/components/shared/photo";
import { SectionBadge } from "@/components/shared/section-badge";
import { Button } from "@/components/ui/button";
import { REGISTER_URL, academyImages, courses } from "@/data/academy";

const EASE = [0.22, 1, 0.36, 1] as const;

export function AcademyHero() {
  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44">
      <div className="container-x">
        <SectionBadge from="left">Pracvarsity Academy</SectionBadge>

        <div className="mt-6 grid gap-8 sm:mt-10 lg:grid-cols-12 lg:items-end lg:gap-10">
          <SplitHeading
            as="h1"
            animateOnMount
            delay={0.2}
            className="lg:col-span-8"
            lines={[{ text: "Learning That Leads" }, { text: "To Possibilities.", accent: true }]}
          />
          <motion.div
            className="lg:col-span-4 lg:pb-4"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
          >
            <p className="max-w-md text-muted sm:text-lg">
              Practical MicroDegrees in digital skills, data and emerging technologies, taught through
              instructor-led sessions, hands-on projects and mentorship.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="#programmes">
                  View Programmes <ArrowUpRightIcon />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={REGISTER_URL} target="_blank" rel="noreferrer">
                  Register Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-12 lg:gap-6">
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.75, ease: EASE }}
          >
            <div className="group overflow-hidden rounded-3xl">
              <motion.div initial={{ scale: 1.2 }} animate={{ scale: 1 }} transition={{ duration: 1.6, delay: 0.75, ease: EASE }}>
                <Photo
                  src={academyImages.hero}
                  alt="A Pracvarsity Academy class"
                  priority
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-[460px]"
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-5 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: EASE }}
          >
            <div className="rounded-3xl bg-primary p-6 text-white sm:p-8">
              <GraduationIcon className="size-10" />
              <p className="mt-5 font-heading text-5xl font-medium sm:text-6xl">
                <Counter to={957} suffix="+" />
              </p>
              <p className="mt-2 text-white/80">People trained through our digital education initiative</p>
            </div>
            <div className="rounded-3xl bg-surface p-6 sm:p-8">
              <p className="font-heading text-5xl font-medium sm:text-6xl">
                <Counter to={courses.length} />
              </p>
              <p className="mt-2 font-heading text-lg">MicroDegree programmes</p>
              <ul className="mt-4 grid gap-2 text-muted">
                {["Instructor-led", "Hands-on projects", "Mentorship"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckCircleIcon className="size-4.5 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
