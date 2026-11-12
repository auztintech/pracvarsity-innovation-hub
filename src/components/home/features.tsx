import { Reveal, SplitHeading, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Photo } from "@/components/shared/photo";
import { SectionBadge } from "@/components/shared/section-badge";
import { features } from "@/data/home";

export function Features() {
  return (
    <section className="py-20 sm:py-28 lg:py-32">
      <div className="container-x">
        <SectionBadge from="left">Space Features</SectionBadge>
        <div className="mt-6 flex flex-col gap-6 sm:mt-8 lg:flex-row lg:items-end lg:justify-between">
          <SplitHeading lines={[{ text: "All Essentials" }, { text: "In One Space", accent: true }]} />
          <Reveal from="right" className="max-w-md lg:pb-3">
            <p className="text-muted sm:text-lg">
              Thoughtfully designed amenities that keep you productive, comfortable and connected,
              day or night.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6" stagger={0.08}>
          {features.map(({ icon: Icon, title, text, image }, i) => (
            <StaggerItem key={title} from={i % 2 === 0 ? "left" : "right"} className="h-full">
              <div className="group flex h-full flex-col rounded-3xl bg-surface p-3 transition-all duration-500 hover:-translate-y-1.5 hover:bg-primary hover:text-white hover:shadow-xl hover:shadow-primary/25">
                {image && (
                  <div className="overflow-hidden rounded-2xl">
                    <Photo
                      src={image}
                      alt={title}
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="aspect-[4/3]"
                      imgClassName="transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                )}
                <div className="flex-1 px-3 pb-4 sm:px-4">
                  <span
                    className={`relative flex size-14 items-center justify-center rounded-full bg-primary text-white ring-4 ring-surface transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-white group-hover:text-primary group-hover:ring-primary sm:size-16 ${
                      image ? "-mt-7 sm:-mt-8" : "mt-3"
                    }`}
                  >
                    <Icon className="size-6 sm:size-7" />
                  </span>
                  <h3 className="mt-5 text-xl sm:text-2xl">{title}</h3>
                  <p className="mt-2 text-muted transition-colors duration-500 group-hover:text-white/85">
                    {text}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}