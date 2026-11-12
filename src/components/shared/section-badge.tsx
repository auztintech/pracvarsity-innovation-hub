import { CubeIcon } from "@/components/icons/pack";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function SectionBadge({
  children,
  className,
  from = "up",
}: {
  children: React.ReactNode;
  className?: string;
  from?: "up" | "left" | "right";
}) {
  return (
    <Reveal from={from} distance={30} className={cn("inline-flex", className)}>
      <span className="inline-flex items-center gap-2.5 rounded-full bg-surface px-4 py-2 font-heading text-xs font-medium tracking-[0.18em] uppercase sm:px-5 sm:py-2.5 sm:text-sm">
        <CubeIcon className="size-4 sm:size-5" />
        {children}
      </span>
    </Reveal>
  );
}
