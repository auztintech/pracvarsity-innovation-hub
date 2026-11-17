"use client";

import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";

import { ArrowUpRightIcon, UsersIcon } from "@/components/icons/pack";
import { Reveal, SplitHeading } from "@/components/motion/reveal";
import { Photo } from "@/components/shared/photo";
import { SectionBadge } from "@/components/shared/section-badge";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/academy";
import { cn } from "@/lib/utils";

const filters = ["All", ...Array.from(new Set(courses.map((c) => c.tag)))];

export function Courses() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? courses : courses.filter((c) => c.tag === active);

  return (
    <section id="programmes" className="bg-surface py-20 sm:py-28 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col items-center text-center">
          <SectionBadge>MicroDegrees</SectionBadge>
          <SplitHeading
            className="mt-6 sm:mt-8"
            lines={[{ text: "Learn Skills" }, { text: "That Matter", accent: true }]}
          />
        </div>

        <Reveal className="mt-10 sm:mt-12">
          <LayoutGroup>
            <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActive(f)}
                  className={cn(
                    "relative h-10 shrink-0 cursor-pointer rounded-full px-5 font-heading text-[15px] font-medium transition-colors",
                    active === f ? "text-white" : "bg-background hover:text-primary",
                  )}
                >
                  {active === f && (
                    <motion.span layoutId="course-filter" className="absolute inset-0 rounded-full bg-primary" />
                  )}
                  <span className="relative">{f}</span>
                </button>
              ))}
            </div>
          </LayoutGroup>
        </Reveal>

        <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {shown.map((course, i) => (
              <motion.article
                key={course.slug}
                layout
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col rounded-3xl bg-background p-3 transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary/10 sm:p-4"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <Photo
                    src={course.image}
                    alt={course.title}
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                    className="aspect-[16/10]"
                    imgClassName="transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-primary px-4 py-1.5 font-heading text-sm font-medium text-white">
                    {course.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-2 pt-5 pb-2">
                  <p className="text-sm font-medium tracking-[0.15em] text-primary uppercase">MicroDegree</p>
                  <h3 className="mt-2 text-xl transition-colors group-hover:text-primary sm:text-2xl">
                    {course.title}
                  </h3>
                  <p className="mt-3 text-muted">{course.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {course.topics.map((t) => (
                      <span key={t} className="rounded-full bg-surface px-3 py-1.5 text-sm">
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="mt-5 flex items-start gap-2 text-sm text-muted">
                    <UsersIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>
                      <strong className="font-medium text-foreground">Best for:</strong> {course.audience.join(", ")}
                    </span>
                  </p>

                  <div className="mt-auto pt-6">
                    <Button asChild className="w-full">
                      <a href={course.registerUrl} target="_blank" rel="noreferrer">
                        Register <ArrowUpRightIcon />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
