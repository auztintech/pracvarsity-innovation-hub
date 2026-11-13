"use client";

import { useState } from "react";
import Image from "next/image";

import { Reveal, SplitHeading, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionBadge } from "@/components/shared/section-badge";
import { partners } from "@/data/home";

function PartnerLogo({ name, logo }: { name: string; logo: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="group flex h-28 items-center justify-center rounded-2xl bg-background p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg sm:h-36">
      {failed ? (
        <span className="text-center font-heading text-lg font-medium text-foreground/50 transition-colors group-hover:text-primary">
          {name}
        </span>
      ) : (
        <Image
          src={logo}
          alt={name}
          title={name}
          width={200}
          height={80}
          onError={() => setFailed(true)}
          className="h-12 w-auto max-w-full object-contain opacity-60 grayscale transition duration-500 group-hover:opacity-100 group-hover:grayscale-0 sm:h-16"
        />
      )}
    </div>
  );
}

export function Partners() {
  return (
    <section id="partners" className="bg-surface py-20 sm:py-28 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <SplitHeading lines={[{ text: "Better" }, { text: "Together.", accent: true }]} />
            <Reveal from="left" className="mt-5 max-w-lg">
              <p className="text-muted sm:text-lg">
                Institutions, organisations and companies that have worked with Pracvarsity.
              </p>
            </Reveal>
          </div>
          <SectionBadge from="right" className="shrink-0">
            Partners &amp; Collaborators
          </SectionBadge>
        </div>

        <Stagger className="mt-12 grid grid-cols-2 gap-4 sm:mt-16 md:grid-cols-3 lg:grid-cols-4 lg:gap-5" stagger={0.06}>
          {partners.map((p, i) => (
            <StaggerItem key={p.name} from={i % 2 === 0 ? "left" : "right"} distance={40}>
              <PartnerLogo name={p.name} logo={p.logo} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
