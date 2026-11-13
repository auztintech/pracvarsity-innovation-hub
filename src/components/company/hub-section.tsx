"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

import { ArrowUpRightIcon, CloseIcon, PlayIcon } from "@/components/icons/pack";
import { Reveal, SplitHeading, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Photo } from "@/components/shared/photo";
import { SectionBadge } from "@/components/shared/section-badge";
import { Button } from "@/components/ui/button";
import { companyImages, hubHighlights, hubVideo } from "@/data/company";
import { routes } from "@/data/navigation";

export function HubSection() {
  const [playing, setPlaying] = useState(false);
  const [main, second, third] = companyImages.hub;

  useEffect(() => {
    if (!playing) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPlaying(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [playing]);

  return (
    <section id="hub" className="py-20 sm:py-28 lg:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
        <div className="lg:col-span-6">
          <SectionBadge from="left">Innovation Hub</SectionBadge>
          <SplitHeading
            className="mt-6 sm:mt-8 lg:text-[clamp(2.5rem,1rem+3.2vw,4.25rem)]"
            lines={[{ text: "A Space To Work," }, { text: "Connect And Create.", accent: true }]}
          />
          <Reveal from="left" className="mt-6">
            <p className="max-w-xl text-muted sm:text-lg">
              Our Innovation Hub, opposite the University of Benin main gate, gives students,
              professionals and builders a productive place to work, meet and grow.
            </p>
          </Reveal>

          <Stagger className="mt-8 grid gap-4 sm:grid-cols-2" stagger={0.1}>
            {hubHighlights.map(({ icon: Icon, title, text }) => (
              <StaggerItem key={title} from="left" className="h-full">
                <div className="group flex h-full gap-4 rounded-2xl bg-surface p-5 transition-colors duration-300 hover:bg-primary hover:text-white">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors duration-300 group-hover:bg-white group-hover:text-primary">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-heading text-lg leading-tight font-medium">{title}</p>
                    <p className="mt-1 text-sm text-muted transition-colors group-hover:text-white/80">{text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal from="left" className="mt-8">
            <Button asChild size="lg">
              <Link href={routes.hub}>
                Explore the Innovation Hub <ArrowUpRightIcon />
              </Link>
            </Button>
          </Reveal>
        </div>

        <Reveal from="right" className="lg:col-span-6">
          <div className="grid grid-cols-5 grid-rows-2 gap-4">
            <div className="group relative col-span-3 row-span-2 overflow-hidden rounded-3xl">
              <Photo
                src={main}
                alt="Coworking space at the hub"
                sizes="(min-width: 1024px) 30vw, 60vw"
                className="h-full min-h-[340px] sm:min-h-[480px]"
                imgClassName="transition-transform duration-700 group-hover:scale-105"
              />
              {hubVideo && (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label="Play hub video"
                  className="absolute inset-0 m-auto flex size-20 cursor-pointer items-center justify-center rounded-full bg-white/95 text-primary shadow-xl transition-transform duration-300 hover:scale-110"
                >
                  <span className="absolute inset-0 animate-ping rounded-full bg-white/50" />
                  <PlayIcon className="relative size-7" />
                </button>
              )}
            </div>
            {[second, third].map((src, i) => (
              <div key={src + i} className="group col-span-2 overflow-hidden rounded-3xl">
                <Photo
                  src={src}
                  alt={i === 0 ? "Private workspace" : "Conference room"}
                  sizes="(min-width: 1024px) 20vw, 40vw"
                  className="h-full min-h-[160px] sm:min-h-[232px]"
                  imgClassName="transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {playing && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPlaying(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <video src={hubVideo} controls autoPlay playsInline className="w-full rounded-2xl bg-black" />
              <Button
                variant="white"
                size="icon"
                aria-label="Close video"
                onClick={() => setPlaying(false)}
                className="absolute -top-14 right-0"
              >
                <CloseIcon />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
