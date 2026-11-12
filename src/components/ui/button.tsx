import * as React from "react";
import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn inline-flex shrink-0 cursor-pointer items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-heading font-medium transition-all duration-300 outline-none focus-visible:ring-4 focus-visible:ring-primary/25 disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4.5",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25",
        outline:
          "border border-foreground/15 bg-transparent text-foreground hover:border-primary hover:text-primary",
        secondary: "bg-surface text-foreground hover:bg-foreground hover:text-background",
        white: "bg-white text-primary hover:bg-foreground hover:text-white",
        ghost: "text-foreground hover:bg-surface",
      },
      size: {
        default: "h-10 px-6 text-sm sm:text-[15px]",
        lg: "h-12 px-7 text-base sm:h-14 sm:px-9 sm:text-lg",
        icon: "size-10",
        "icon-lg": "size-12 sm:size-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
