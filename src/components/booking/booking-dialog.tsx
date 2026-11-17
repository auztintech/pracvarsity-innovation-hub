"use client";

import { createContext, useCallback, useContext, useState } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

import { BookingFlow } from "./booking-flow";

type Ctx = { openBooking: (plan?: string) => void };

const BookingDialogContext = createContext<Ctx | null>(null);

export function useBookingDialog() {
  const ctx = useContext(BookingDialogContext);
  if (!ctx) throw new Error("useBookingDialog must be used inside <BookingDialogProvider>");
  return ctx;
}

const copy = {
  form: { title: "Book Your Space", text: "No account needed. Fill this in and you'll get payment details right away." },
  pay: { title: "Complete Your Payment", text: "Transfer the amount below, then tap “I Have Paid”." },
  claimed: { title: "Payment Sent For Review", text: "We'll confirm it shortly." },
};

export function BookingDialogProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [plan, setPlan] = useState<string | undefined>();
  const [step, setStep] = useState<keyof typeof copy>("form");

  const openBooking = useCallback((slug?: string) => {
    setPlan(slug);
    setOpen(true);
  }, []);

  return (
    <BookingDialogContext.Provider value={{ openBooking }}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogTitle>{copy[step].title}</DialogTitle>
          <DialogDescription>{copy[step].text}</DialogDescription>
          <div className="mt-6">
            {open && <BookingFlow defaultPlan={plan} onStepChange={setStep} variant="plain" />}
          </div>
        </DialogContent>
      </Dialog>
    </BookingDialogContext.Provider>
  );
}

/** Drop-in button that opens the booking dialog with a plan preselected. */
export function BookPlanButton({
  plan,
  children,
  className,
  variant = "default",
}: {
  plan?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "white" | "outline";
}) {
  const { openBooking } = useBookingDialog();
  return (
    <Button size="lg" variant={variant} className={className} onClick={() => openBooking(plan)}>
      {children}
    </Button>
  );
}
