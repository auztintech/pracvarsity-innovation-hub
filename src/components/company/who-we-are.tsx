import { EyeIcon, TargetIcon } from "@/components/icons/pack";
import { Reveal, SplitHeading, Stagger, StaggerItem, ZoomIn } from "@/components/motion/reveal";
import { Photo } from "@/components/shared/photo";
import { SectionBadge } from "@/components/shared/section-badge";
import { companyImages, mission, story, vision } from "@/data/company";

export function WhoWeAre() {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col-reverse gap-6 lg:flex-row lg:items-start lg:justify-between">
          <SplitHeading
            className="h2-lead max-w-5xl"
            lines={[
              { text: "We Are Not Just A Workspace Or A Training Centre." },
              { text: "We Are Building An Ecosystem For Ideas, Skills And Innovation.", accent: true },
            ]}
          />
          <SectionBadge from="right" className="shrink-0">
            Who We Are
          </SectionBadge>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-12 lg:gap-8">
          <Reveal from="left" className="lg:col-span-5">
            <ZoomIn className="h-full rounded-3xl">
              <Photo
                src={companyImages.about}
                alt="Inside Pracvarsity"
                className="aspect-[4/3] h-full rounded-3xl lg:aspect-auto lg:min-h-[440px]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </ZoomIn>
          </Reveal>

          <div className="flex flex-col gap-6 lg:col-span-7">
            <Reveal from="right">
              <p className="font-heading text-xl leading-snug sm:text-2xl">{story}</p>
            </Reveal>

            <Stagger className="grid flex-1 gap-5 md:grid-cols-2" stagger={0.15}>
              <StaggerItem from="left" className="h-full">
                <div className="h-full rounded-3xl bg-primary p-7 text-white sm:p-9">
                  <span className="flex size-14 items-center justify-center rounded-full bg-white text-primary">
                    <EyeIcon className="size-6" />
                  </span>
                  <h3 className="mt-6">Our Vision</h3>
                  <p className="mt-3 text-white/85 sm:text-lg">{vision}</p>
                </div>
              </StaggerItem>
              <StaggerItem from="right" className="h-full">
                <div className="h-full rounded-3xl bg-surface p-7 sm:p-9">
                  <span className="flex size-14 items-center justify-center rounded-full bg-primary text-white">
                    <TargetIcon className="size-6" />
                  </span>
                  <h3 className="mt-6">Our Mission</h3>
                  <p className="mt-3 text-muted sm:text-lg">{mission}</p>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
