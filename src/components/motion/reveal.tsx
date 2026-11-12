"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { animate, motion, useInView, type Variants } from "motion/react";

import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

const EASE = [0.22, 1, 0.36, 1] as const;

const offset = (direction: Direction, distance: number) => {
  switch (direction) {
    case "left":
      return { x: -distance, y: 0 };
    case "right":
      return { x: distance, y: 0 };
    case "down":
      return { x: 0, y: -distance };
    case "none":
      return { x: 0, y: 0 };
    default:
      return { x: 0, y: distance };
  }
};

/* ------------------------------------------------------------------
   Reveal — slides a block in from a side when it enters the viewport
   ------------------------------------------------------------------ */
type RevealProps = {
  children: ReactNode;
  className?: string;
  from?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  amount?: number;
  as?: "div" | "section" | "li" | "span";
};

export function Reveal({
  children,
  className,
  from = "up",
  delay = 0,
  duration = 0.8,
  distance = 60,
  amount = 0.25,
  as = "div",
}: RevealProps) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, ...offset(from, distance) }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </Comp>
  );
}

/* ------------------------------------------------------------------
   Stagger — children animate one after another
   ------------------------------------------------------------------ */
const container = (stagger: number, delay: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

export function Stagger({
  children,
  className,
  stagger = 0.12,
  delay = 0,
  amount = 0.15,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={container(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  from = "up",
  distance = 50,
}: {
  children: ReactNode;
  className?: string;
  from?: Direction;
  distance?: number;
}) {
  const item: Variants = {
    hidden: { opacity: 0, ...offset(from, distance) },
    show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.75, ease: EASE } },
  };
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   SplitHeading — words rise from behind a mask, line by line
   lines: [["Black text"], ["Blue text", true]]
   ------------------------------------------------------------------ */
export type HeadingLine = { text: string; accent?: boolean; inline?: boolean };

export function SplitHeading({
  lines,
  as = "h2",
  className,
  lineClassName,
  delay = 0,
  animateOnMount = false,
}: {
  lines: HeadingLine[];
  as?: "h1" | "h2" | "h3";
  className?: string;
  lineClassName?: string;
  delay?: number;
  animateOnMount?: boolean;
}) {
  const Tag = motion[as];

  const trigger = animateOnMount
    ? { animate: "show" as const }
    : { whileInView: "show" as const, viewport: { once: true, amount: 0.4 } };

  return (
    <Tag
      className={className}
      initial="hidden"
      {...trigger}
      variants={container(0.06, delay)}
      aria-label={lines.map((l) => l.text).join(" ")}
    >
      {lines.map((line, li) => (
        <span
          key={li}
          aria-hidden
          className={cn(line.inline ? "inline" : "block", line.accent && "text-primary", lineClassName)}
        >
          {line.text.split(" ").map((word, wi) => {
            return (
              <span
                key={`${li}-${wi}`}
                className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-top"
              >
                <motion.span
                  className="inline-block"
                  variants={{
                    hidden: { y: "110%", rotate: 4 },
                    show: { y: "0%", rotate: 0, transition: { duration: 0.8, ease: EASE } },
                  }}
                >
                  {word}
                  {" "}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}

/* ------------------------------------------------------------------
   Counter — counts up when it scrolls into view
   ------------------------------------------------------------------ */
export function Counter({
  to,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------
   ZoomImage — image wrapper that un-zooms as it enters view
   ------------------------------------------------------------------ */
export function ZoomIn({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      initial={{ clipPath: "inset(12% 12% 12% 12% round 24px)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 24px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1.1, ease: EASE }}
    >
      <motion.div
        className="size-full"
        initial={{ scale: 1.25 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.4, ease: EASE }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
