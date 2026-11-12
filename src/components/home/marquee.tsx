import Image from "next/image";

import { CubeIcon } from "@/components/icons/pack";
import { Counter, Reveal } from "@/components/motion/reveal";
import { audiences, partners } from "@/data/home";

type Item = { type: "logo"; name: string; logo: string } | { type: "text"; name: string };

export function TrustedMarquee() {
  // Logos pass first, then the audiences. Doubled so the loop is seamless.
  const sequence: Item[] = [
    ...partners.map((p) => ({ type: "logo" as const, ...p })),
    ...audiences.map((name) => ({ type: "text" as const, name })),
  ];
  const row = [...sequence, ...sequence];

  return (
    <section className="overflow-hidden bg-surface py-14 sm:py-20">
      <Reveal className="container-x text-center">
        <p className="mx-auto max-w-3xl font-heading text-xl leading-snug sm:text-2xl lg:text-[28px]">
          Trusted By <Counter to={380} suffix="+" className="text-primary" /> Members, Powered{" "}
          <span className="text-primary">24/7</span> With <span className="text-primary">200+ Mbps</span>{" "}
          Internet
        </p>
      </Reveal>

      <div className="mask-fade-x mt-10 flex sm:mt-14">
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10 hover:[animation-play-state:paused] sm:gap-16 sm:pr-16">
          {row.map((item, i) =>
            item.type === "logo" ? (
              <Image
                key={`${item.name}-${i}`}
                src={item.logo}
                alt={item.name}
                title={item.name}
                width={180}
                height={60}
                className="h-10 w-auto shrink-0 object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-14"
              />
            ) : (
              <span
                key={`${item.name}-${i}`}
                className="flex shrink-0 items-center gap-3 font-heading text-xl font-medium whitespace-nowrap text-foreground/45 sm:text-3xl"
              >
                <CubeIcon className="size-6 text-primary/60 sm:size-8" />
                {item.name}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}