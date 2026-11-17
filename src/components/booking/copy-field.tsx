"use client";

import { useState } from "react";

import { CheckIcon, CopyIcon } from "@/components/icons/pack";
import { cn } from "@/lib/utils";

export function CopyField({
  label,
  value,
  copy = true,
  large = false,
}: {
  label: string;
  value: string;
  copy?: boolean;
  large?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked */
    }
  };

  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl px-4 py-3">
      <div className="min-w-0">
        <p className="text-sm text-muted">{label}</p>
        <p
          className={cn(
            "truncate font-heading font-medium",
            large ? "text-2xl tracking-wider sm:text-3xl" : "text-lg",
          )}
        >
          {value}
        </p>
      </div>
      {copy && (
        <button
          type="button"
          onClick={onCopy}
          className={cn(
            "flex h-10 shrink-0 cursor-pointer items-center gap-2 rounded-full px-4 text-sm font-medium transition-colors",
            copied ? "bg-green-600 text-white" : "bg-primary/10 text-primary hover:bg-primary hover:text-white",
          )}
        >
          {copied ? <CheckIcon className="size-4" /> : <CopyIcon className="size-4" />}
          {copied ? "Copied" : "Copy"}
        </button>
      )}
    </div>
  );
}
