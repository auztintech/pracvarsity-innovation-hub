"use client";

import Link from "next/link";
import { motion } from "motion/react";

import { ArrowUpRightIcon } from "@/components/icons/pack";
import { SplitHeading } from "@/components/motion/reveal";
import { Photo } from "@/components/shared/photo";
import { SectionBadge } from "@/components/shared/section-badge";
import { Button } from "@/components/ui/button";
import { companyImages, pillars } from "@/data/company";
import { routes } from "@/data/navigation";

const EASE = [0.22, 1, 0.36, 1] as const;

export function CompanyHero() {
  return (
    <section id="home" className="pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44">
      <div className="container-x">
        <SectionBadge from="left">Pracvarsity Technology Limited</SectionBadge>

        <SplitHeading
          as="h1"
          animateOnMount
          delay={0.2}
          className="mt-6 sm:mt-10 lg:text-[clamp(3rem,1rem+4.6vw,5.5rem)]"
          lines={[{ text: "Where Ideas Become Skills\u00A0—" }, { text: "And Skills Become Innovation.", accent: true }]}
        />

        <motion.div
          className="mt-8 flex flex-col gap-7 sm:mt-10 lg:flex-row lg:items-center lg:justify-between"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
        >
          <p className="max-w-xl text-muted sm:text-lg">
            A technology and innovation company built on three connected pillars: a hub to work, an
            academy to learn and a consultancy to apply it all.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="#pillars">
                Explore Pracvarsity
                <ArrowUpRightIcon className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={routes.contact}>Partner With Us</Link>
            </Button>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-12 lg:gap-6">
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
                  src={companyImages.hero}
                  alt="The Pracvarsity Innovation Hub"
                  priority
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-[480px]"
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 sm:bottom-6 sm:left-6">
                {pillars.map((p) => (
                  <span
                    key={p.key}
                    className="rounded-full bg-white/90 px-4 py-2 font-heading text-sm font-medium backdrop-blur sm:text-base"
                  >
                    {p.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: EASE }}
          >
            <div className="flex h-full flex-col rounded-3xl bg-surface p-5 sm:p-7">
              <h3>
                Three Pillars. <span className="text-primary">One Ecosystem.</span>
              </h3>
              <div className="mt-5 flex flex-1 flex-col justify-between gap-3">
                {pillars.map(({ key, name, tagline, href, icon: Icon }, i) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 1.1 + i * 0.12, ease: EASE }}
                  >
                    <Link
                      href={href}
                      className="group flex items-center gap-4 rounded-2xl bg-background p-4 transition-colors duration-300 hover:bg-primary hover:text-white"
                    >
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors duration-300 group-hover:bg-white group-hover:text-primary">
                        <Icon className="size-5" />
                      </span>
                      <span className="flex-1">
                        <span className="block font-heading text-lg font-medium">{name}</span>
                        <span className="block text-sm text-muted transition-colors group-hover:text-white/80">
                          {tagline}
                        </span>
                      </span>
                      <ArrowUpRightIcon className="size-5 shrink-0 transition-transform duration-300 group-hover:rotate-45" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
