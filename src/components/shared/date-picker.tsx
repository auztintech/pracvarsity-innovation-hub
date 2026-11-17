"use client";

import { useState } from "react";
import { format, startOfToday } from "date-fns";

import { CalendarIcon } from "@/components/icons/pack";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export function DatePicker({
  id,
  value,
  onChange,
  onBlur,
  placeholder = "Pick a date",
  invalid,
}: {
  id?: string;
  value?: Date | null;
  onChange: (date: Date | undefined) => void;
  onBlur?: () => void;
  placeholder?: string;
  invalid?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Popover
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) onBlur?.();
      }}
    >
      <PopoverTrigger asChild>
        <button
          id={id}
          type="button"
          data-invalid={invalid || undefined}
          className={cn(
            "flex h-10 w-full cursor-pointer items-center justify-between gap-2 rounded-full border border-transparent bg-card px-5 text-left text-[15px] outline-none transition-[border-color,box-shadow] focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/15 data-[invalid]:border-red-500",
            !value && "text-muted/70",
          )}
        >
          {value ? format(value, "EEE, d MMM yyyy") : placeholder}
          <CalendarIcon className="size-4.5 text-muted" />
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" className="z-[70] w-auto">
        <Calendar
          mode="single"
          selected={value ?? undefined}
          onSelect={(date) => {
            onChange(date);
            setOpen(false);
          }}
          disabled={(day) => day < startOfToday()}
          autoFocus
        />
      </PopoverContent>
    </Popover>
  );
}
