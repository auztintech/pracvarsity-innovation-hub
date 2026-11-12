import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-10 w-full min-w-0 rounded-full border border-transparent bg-card px-5 text-[15px] text-foreground outline-none transition-[border-color,box-shadow] placeholder:text-muted/70 focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/15 aria-invalid:border-red-500 aria-invalid:ring-red-500/15 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
