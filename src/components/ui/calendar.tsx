"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";

import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons/pack";
import { cn } from "@/lib/utils";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-1 text-sm", className)}
      classNames={{
        months: "relative flex flex-col",
        month: "space-y-3",
        month_caption: "flex h-9 items-center justify-center font-heading font-semibold",
        caption_label: "text-[15px]",
        nav: "absolute inset-x-0 top-0 flex items-center justify-between",
        button_previous:
          "inline-flex size-9 cursor-pointer items-center justify-center rounded-full hover:bg-surface disabled:opacity-30",
        button_next:
          "inline-flex size-9 cursor-pointer items-center justify-center rounded-full hover:bg-surface disabled:opacity-30",
        month_grid: "w-full border-collapse",
        weekdays: "flex",
        weekday: "w-10 text-center text-xs font-medium text-muted",
        week: "mt-1 flex w-full",
        day: "size-10 p-0 text-center",
        day_button:
          "inline-flex size-10 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-primary/10 hover:text-primary",
        selected: "[&>button]:bg-primary [&>button]:text-white [&>button]:hover:bg-primary",
        today: "[&>button]:font-bold [&>button]:text-primary",
        outside: "text-muted/40",
        disabled: "pointer-events-none text-muted/30",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, className: chevronClass }) =>
          orientation === "left" ? (
            <ChevronLeftIcon className={cn("size-4", chevronClass)} />
          ) : (
            <ChevronRightIcon className={cn("size-4", chevronClass)} />
          ),
      }}
      {...props}
    />
  );
}

export { Calendar };
