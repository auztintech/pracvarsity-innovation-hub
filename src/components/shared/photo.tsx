"use client";

import { useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Image with a branded gradient fallback, so layouts still look right
 * before the real photos are dropped into /public/images.
 */
export function Photo({
  src,
  alt,
  className,
  imgClassName,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[radial-gradient(120%_120%_at_0%_0%,#dfe7fb_0%,#b9c9f0_45%,#7f9be0_100%)]",
        className,
      )}
    >
      {!failed && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setFailed(true)}
          className={cn("object-cover", imgClassName)}
        />
      )}
    </div>
  );
}
