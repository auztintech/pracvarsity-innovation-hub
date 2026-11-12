import Link from "next/link";

import { ArrowUpRightIcon, CheckCircleIcon, EyeIcon, PlusIcon, TargetIcon } from "@/components/icons/pack";
import { Counter, Reveal, SplitHeading, Stagger, StaggerItem, ZoomIn } from "@/components/motion/reveal";
import { Photo } from "@/components/shared/photo";
import { SectionBadge } from "@/components/shared/section-badge";
import { Button } from "@/components/ui/button";
import { images, visionMission } from "@/data/home";

const avatars = ["/images/avatar-1.jpg", "/images/avatar-2.jpg", "/images/avatar-3.jpg"];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col-reverse gap-6 lg:flex-row lg:items-start lg:justify-between">
          <SplitHeading
            className="h2-lead max-w-5xl"
            lines={[
              { text: "Work. Learn. Build." },
              { text: "We Create Spaces For Meaningful Work," , accent: true },
              { text: "Practical Skills And Real Solutions.", accent: true },
            ]}
          />
          <SectionBadge from="right" className="shrink-0">
            Who We Are
          </SectionBadge>
        </div>

        <div className="mt-12 grid gap-10 sm:mt-16 lg:grid-cols-12 lg:items-end">
          <Reveal from="left" className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-5">
              <div className="flex -space-x-4">
                {avatars.map((src) => (
                  <Photo
                    key={src}
                    src={src}
                    alt=""
                    sizes="80px"
                    className="size-14 rounded-full border-4 border-background sm:size-20"
                  />
                ))}
                <span className="flex size-14 items-center justify-center rounded-full border-4 border-background bg-primary text-white sm:size-20">
                  <PlusIcon className="size-6 sm:size-8" />
                </span>
              </div>
              <div>
                <p className="font-heading text-lg sm:text-2xl">
                  Trusted By <Counter to={380} suffix="+" className="text-primary" /> Members
                </p>
                <p className="mt-1 flex items-center gap-2 text-muted">
                  <CheckCircleIcon className="size-5 text-primary" /> 24/7 power and internet
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-2xl text-muted sm:text-lg">
              Pracvarsity is a hands-on innovation hub built for meaningful work, practical skills and
              real solutions. Whether you are a student, a remote worker or a founder, our members don&apos;t
              just occupy a seat. They move forward.
            </p>

            <Button asChild size="lg" className="mt-8">
              <Link href="#why">
                Learn More <ArrowUpRightIcon />
              </Link>
            </Button>
          </Reveal>

          <Reveal from="right" className="lg:col-span-5">
            <ZoomIn className="rounded-3xl">
              <Photo
                src={images.about}
                alt="Members collaborating at Pracvarsity"
                className="aspect-[4/3] rounded-3xl"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </ZoomIn>
          </Reveal>
        </div>

        {/* Vision & mission */}
        <Stagger className="mt-14 grid gap-5 sm:mt-20 md:grid-cols-2">
          <StaggerItem from="left" className="h-full">
            <div className="h-full rounded-3xl bg-primary p-7 text-white sm:p-10">
              <span className="flex size-14 items-center justify-center rounded-full bg-white text-primary">
                <EyeIcon className="size-6" />
              </span>
              <h3 className="mt-6">Our Vision</h3>
              <p className="mt-3 text-white/85 sm:text-lg">{visionMission.vision}</p>
            </div>
          </StaggerItem>
          <StaggerItem from="right" className="h-full">
            <div className="h-full rounded-3xl bg-surface p-7 sm:p-10">
              <span className="flex size-14 items-center justify-center rounded-full bg-primary text-white">
                <TargetIcon className="size-6" />
              </span>
              <h3 className="mt-6">Our Mission</h3>
              <ul className="mt-4 grid gap-3">
                {visionMission.mission.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted sm:text-lg">
                    <CheckCircleIcon className="mt-1 size-5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
