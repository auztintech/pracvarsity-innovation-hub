"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { LogoMarkIcon } from "@/components/icons/pack";
import { images } from "@/data/home";
import { cn } from "@/lib/utils";

/** Uses /public/images/logo.png when present, otherwise a text wordmark. */
export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // The image can fail before hydration, so onError never fires; check once mounted.
  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth === 0) {
      const id = requestAnimationFrame(() => setFailed(true));
      return () => cancelAnimationFrame(id);
    }
  }, []);

  return (
    <Link href="#home" aria-label="Pracvarsity home" className={cn("inline-flex items-center", className)}>
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={light ? images.logoLight : images.logo}
          alt="Pracvarsity"
          className="h-9 w-auto sm:h-11"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="inline-flex items-center gap-2.5">
          <LogoMarkIcon className="size-9 text-primary sm:size-10" />
          <span
            className={cn(
              "font-heading text-2xl font-semibold tracking-tight sm:text-[28px]",
              light ? "text-white" : "text-foreground",
            )}
          >
            Prac<span className="text-primary">varsity</span>
          </span>
        </span>
      )}
    </Link>
  );
}
