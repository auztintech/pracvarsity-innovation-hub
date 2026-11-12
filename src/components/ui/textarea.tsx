import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-36 w-full rounded-3xl border border-transparent bg-card px-5 py-4 text-[15px] text-foreground outline-none transition-[border-color,box-shadow] placeholder:text-muted/70 focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/15 aria-invalid:border-red-500 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
