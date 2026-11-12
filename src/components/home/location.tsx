import { ArrowUpRightIcon, ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons/pack";
import { Reveal, SplitHeading, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionBadge } from "@/components/shared/section-badge";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/home";

export function Location() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(contact.mapQuery)}`;

  const items = [
    { icon: MapPinIcon, title: "Address", lines: [contact.address] },
    { icon: PhoneIcon, title: "Phone", lines: contact.phones, href: (v: string) => `tel:${v.replace(/\s/g, "")}` },
    { icon: MailIcon, title: "Email", lines: contact.emails, href: (v: string) => `mailto:${v}` },
    { icon: ClockIcon, title: "Opening Hours", lines: ["Open 24/7, all week"] },
  ];

  return (
    <section id="contact" className="bg-surface py-20 sm:py-28 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-start sm:justify-between">
          <SplitHeading lines={[{ text: "Come Visit" }, { text: "Our Hub", accent: true }]} />
          <SectionBadge from="right" className="shrink-0">
            Our Location
          </SectionBadge>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-12 lg:gap-8">
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1" stagger={0.1}>
            {items.map(({ icon: Icon, title, lines, href }) => (
              <StaggerItem key={title} from="left">
                <div className="flex h-full gap-4 rounded-2xl bg-background p-5 sm:p-6">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-heading text-lg font-medium">{title}</p>
                    {lines.map((line) =>
                      href ? (
                        <a key={line} href={href(line)} className="block text-muted transition-colors hover:text-primary">
                          {line}
                        </a>
                      ) : (
                        <p key={line} className="text-muted">
                          {line}
                        </p>
                      ),
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal from="right" className="lg:col-span-7">
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-3xl bg-background sm:min-h-[460px]">
              <iframe
                title="Pracvarsity location map"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 size-full border-0 grayscale-[0.3]"
              />
              <div className="absolute right-4 bottom-4 left-4 flex flex-col gap-3 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur sm:right-auto sm:max-w-sm sm:p-5">
                <p className="text-sm text-muted">
                  More hubs launching soon at other universities and innovation clusters across Nigeria.
                </p>
                <Button asChild>
                  <a href={directions} target="_blank" rel="noreferrer">
                    Get Directions <ArrowUpRightIcon />
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
