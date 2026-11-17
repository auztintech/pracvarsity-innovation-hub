"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { format, parseISO } from "date-fns";
import { useFormik } from "formik";
import * as Yup from "yup";

import { CheckIcon, ClockIcon, SendIcon } from "@/components/icons/pack";
import { DatePicker } from "@/components/shared/date-picker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { endpoints } from "@/config/endpoints";
import { bookingPlans, naira, type BookingPlan, type BookingResponse } from "@/data/booking";
import { api, parseApiError } from "@/lib/axios";
import { cn } from "@/lib/utils";

import { CopyField } from "./copy-field";

const STORAGE_KEY = "pv-booking";

type Step = "form" | "pay" | "claimed";

type Values = {
  plan: string;
  fullName: string;
  email: string;
  phone: string;
  startDate: Date | null;
  seats: string;
  note: string;
};

const schema = Yup.object({
  plan: Yup.string().required("Choose a plan"),
  fullName: Yup.string().trim().min(2, "Enter your full name").required("Enter your full name"),
  email: Yup.string().email("Enter a valid email").required("Enter your email"),
  phone: Yup.string()
    .matches(/^[+\d\s()-]{7,20}$/, "Enter a valid phone number")
    .required("Enter your phone number"),
  startDate: Yup.date().nullable().required("Pick a start date"),
  seats: Yup.number().typeError("Enter a number").min(1, "At least 1").max(57, "Max 57").required("Required"),
  note: Yup.string().max(1000),
});

const fieldMap: Record<string, keyof Values> = {
  plan: "plan",
  full_name: "fullName",
  email: "email",
  phone: "phone",
  start_date: "startDate",
  seats: "seats",
  note: "note",
};

const periodLabel = { day: "day", week: "week", month: "month" } as const;

const store = {
  get: () => {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  },
  set: (id: string) => {
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {
      /* private mode */
    }
  },
  clear: () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* private mode */
    }
  },
};

function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  error?: string | false;
  optional?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Label htmlFor={htmlFor} className="text-[15px] sm:text-base">
        {label}
        {optional && <span className="font-sans text-sm font-normal text-muted">(optional)</span>}
      </Label>
      {children}
      {error && <p className="pl-4 text-sm text-red-500">{error}</p>}
    </div>
  );
}

const fade = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
};

export function BookingFlow({
  defaultPlan,
  variant = "card",
  onStepChange,
}: {
  defaultPlan?: string;
  /** "card" sits on a grey surface (inputs are white); "plain" sits on the page background */
  variant?: "card" | "plain";
  onStepChange?: (step: Step) => void;
}) {
  const [step, setStepState] = useState<Step>("form");
  const [booking, setBooking] = useState<BookingResponse | null>(null);
  const [claiming, setClaiming] = useState(false);
  const [error, setError] = useState("");
  const [plans, setPlans] = useState<BookingPlan[]>(bookingPlans);

  const setStep = (next: Step) => {
    setStepState(next);
    onStepChange?.(next);
  };

  // Live prices from the API (falls back to the defaults above)
  useEffect(() => {
    api
      .get<{ slug: string; name: string; price: string; period: BookingPlan["period"] }[]>(endpoints.plans)
      .then(({ data }) => {
        if (data.length) setPlans(data.map((p) => ({ ...p, price: Number(p.price) })));
      })
      .catch(() => {});
  }, []);

  // Pick up an unfinished booking (e.g. customer closed the page before paying)
  useEffect(() => {
    const saved = store.get();
    if (!saved) return;
    api
      .get<BookingResponse>(endpoints.bookings.detail(saved))
      .then(({ data }) => {
        if (data.status === "awaiting_payment" || data.status === "payment_claimed") {
          setBooking(data);
          setStepState(data.status === "awaiting_payment" ? "pay" : "claimed");
          onStepChange?.(data.status === "awaiting_payment" ? "pay" : "claimed");
        } else store.clear();
      })
      .catch(() => store.clear());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formik = useFormik<Values>({
    initialValues: {
      plan: defaultPlan ?? "",
      fullName: "",
      email: "",
      phone: "",
      startDate: null,
      seats: "1",
      note: "",
    },
    enableReinitialize: true,
    validationSchema: schema,
    onSubmit: async (values, { setErrors }) => {
      setError("");
      try {
        const { data } = await api.post<BookingResponse>(endpoints.bookings.create, {
          plan: values.plan,
          full_name: values.fullName,
          email: values.email,
          phone: values.phone,
          start_date: values.startDate ? format(values.startDate, "yyyy-MM-dd") : null,
          seats: Number(values.seats),
          note: values.note,
        });
        store.set(data.public_id);
        setBooking(data);
        setStep("pay");
      } catch (err) {
        const { fields, message } = parseApiError(err);
        const mapped: Partial<Record<keyof Values, string>> = {};
        for (const [key, msg] of Object.entries(fields)) if (fieldMap[key]) mapped[fieldMap[key]] = msg;
        setErrors(mapped);
        setError(message);
      }
    },
  });

  const selected = plans.find((p) => p.slug === formik.values.plan);
  const total = useMemo(
    () => (selected ? selected.price * Math.max(1, Number(formik.values.seats) || 1) : 0),
    [selected, formik.values.seats],
  );

  const claimPaid = async () => {
    if (!booking) return;
    setClaiming(true);
    setError("");
    try {
      const { data } = await api.post<BookingResponse>(endpoints.bookings.paid(booking.public_id));
      setBooking(data);
      setStep("claimed");
    } catch (err) {
      setError(parseApiError(err).message || "Couldn't send. Please try again.");
    } finally {
      setClaiming(false);
    }
  };

  const startOver = () => {
    store.clear();
    setBooking(null);
    formik.resetForm();
    setError("");
    setStep("form");
  };

  const err = (name: keyof Values) => formik.touched[name] && (formik.errors[name] as string | undefined);
  const inputBg = variant === "plain" ? "bg-surface" : "bg-card";

  return (
    <AnimatePresence mode="wait" initial={false}>
      {step === "form" && (
        <motion.form key="form" {...fade} noValidate onSubmit={formik.handleSubmit} className="grid gap-5">
          {/* Plan chips */}
          <div className="grid gap-2">
            <Label className="text-[15px] sm:text-base">Choose a plan</Label>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {plans.map((plan) => {
                const active = formik.values.plan === plan.slug;
                return (
                  <button
                    key={plan.slug}
                    type="button"
                    onClick={() => formik.setFieldValue("plan", plan.slug)}
                    className={cn(
                      "cursor-pointer rounded-2xl border-2 p-3 text-left transition-all duration-300 sm:p-4",
                      active
                        ? "border-primary bg-primary text-white shadow-lg shadow-primary/25"
                        : cn("border-transparent hover:border-primary/40", inputBg),
                    )}
                  >
                    <span className="block font-heading text-sm font-medium sm:text-base">{plan.name}</span>
                    <span className="mt-1 block font-heading text-base font-semibold sm:text-xl">
                      {naira(plan.price)}
                    </span>
                    <span className={cn("block text-xs sm:text-sm", active ? "text-white/75" : "text-muted")}>
                      per {periodLabel[plan.period]}
                    </span>
                  </button>
                );
              })}
            </div>
            {err("plan") && <p className="pl-4 text-sm text-red-500">{err("plan")}</p>}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" htmlFor="bk-name" error={err("fullName")}>
              <Input id="bk-name" placeholder="Your full name" autoComplete="name" className={inputBg} aria-invalid={!!err("fullName") || undefined} {...formik.getFieldProps("fullName")} />
            </Field>
            <Field label="Phone number" htmlFor="bk-phone" error={err("phone")}>
              <Input id="bk-phone" type="tel" placeholder="+234 800 000 0000" autoComplete="tel" className={inputBg} aria-invalid={!!err("phone") || undefined} {...formik.getFieldProps("phone")} />
            </Field>
            <Field label="Email" htmlFor="bk-email" error={err("email")} className="sm:col-span-2">
              <Input id="bk-email" type="email" placeholder="you@example.com" autoComplete="email" className={inputBg} aria-invalid={!!err("email") || undefined} {...formik.getFieldProps("email")} />
            </Field>
            <Field label="Start date" htmlFor="bk-date" error={err("startDate")}>
              <div className={cn("rounded-full", variant === "plain" && "[&>button]:bg-surface")}>
                <DatePicker
                  id="bk-date"
                  value={formik.values.startDate}
                  placeholder="Select a date"
                  invalid={!!err("startDate")}
                  onChange={(d) => formik.setFieldValue("startDate", d ?? null)}
                  onBlur={() => formik.setFieldTouched("startDate", true)}
                />
              </div>
            </Field>
            <Field label="Number of people" htmlFor="bk-seats" error={err("seats")}>
              <Select
                value={formik.values.seats}
                onValueChange={(v) => formik.setFieldValue("seats", v)}
              >
                <SelectTrigger id="bk-seats" className={inputBg}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="z-[70]">
                  {Array.from({ length: 10 }, (_, i) => String(i + 1)).map((n) => (
                    <SelectItem key={n} value={n}>
                      {n} {n === "1" ? "person" : "people"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field label="Anything we should know?" htmlFor="bk-note" optional className="sm:col-span-2">
              <Textarea id="bk-note" placeholder="e.g. I need a quiet corner" className={cn("min-h-24", inputBg)} {...formik.getFieldProps("note")} />
            </Field>
          </div>

          {error && <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>}

          <div className="flex flex-col gap-3 rounded-2xl bg-primary/8 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-muted">Total to pay</p>
              <p className="font-heading text-2xl font-semibold text-primary">{total ? naira(total) : "—"}</p>
            </div>
            <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={formik.isSubmitting}>
              {formik.isSubmitting ? (
                <>
                  <span className="size-4.5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Booking…
                </>
              ) : (
                <>
                  Book Now <SendIcon />
                </>
              )}
            </Button>
          </div>
        </motion.form>
      )}

      {step === "pay" && booking && (
        <motion.div key="pay" {...fade} className="grid gap-5">
          <div className="rounded-3xl bg-primary p-5 text-white sm:p-7">
            <p className="text-white/75">Amount to pay</p>
            <p className="mt-1 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              {naira(booking.amount)}
            </p>
            <p className="mt-3 text-sm text-white/80">
              {booking.plan.name} plan · {booking.seats} {booking.seats === 1 ? "person" : "people"} · from{" "}
              {format(parseISO(booking.start_date), "d MMM yyyy")}
            </p>
          </div>

          {booking.bank ? (
            <div className="grid gap-3">
              <p className="font-heading text-lg font-medium">Transfer to this account</p>
              <div className={cn("grid gap-1 rounded-3xl p-2", variant === "plain" ? "bg-surface" : "bg-card")}>
                <CopyField label="Account number" value={booking.bank.account_number} large />
                <CopyField label="Bank" value={booking.bank.bank_name} copy={false} />
                <CopyField label="Account name" value={booking.bank.account_name} copy={false} />
                <CopyField label="Narration / reference" value={booking.reference} />
              </div>
              <p className="flex gap-2 text-sm text-muted">
                <ClockIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  Use your reference <strong className="text-foreground">{booking.reference}</strong> as the
                  narration so we can match your payment quickly. We&apos;ve also emailed these details to{" "}
                  {booking.email}.
                </span>
              </p>
            </div>
          ) : (
            <p className="rounded-2xl bg-surface p-4 text-muted">
              Our team will send payment details to {booking.email} shortly. Your reference is{" "}
              <strong className="text-foreground">{booking.reference}</strong>.
            </p>
          )}

          {error && <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>}

          <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <Button size="lg" onClick={claimPaid} disabled={claiming}>
              {claiming ? (
                <>
                  <span className="size-4.5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Sending…
                </>
              ) : (
                <>
                  <CheckIcon /> I Have Paid
                </>
              )}
            </Button>
            <Button size="lg" variant="outline" onClick={startOver}>
              Start Over
            </Button>
          </div>
        </motion.div>
      )}

      {step === "claimed" && booking && (
        <motion.div key="claimed" {...fade} className="flex flex-col items-center py-6 text-center sm:py-10">
          <motion.span
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.1 }}
            className="flex size-20 items-center justify-center rounded-full bg-primary text-white"
          >
            <CheckIcon className="size-10" />
          </motion.span>
          <h3 className="mt-6">Thank you, {booking.full_name.split(" ")[0]}!</h3>
          <p className="mt-3 max-w-md text-muted">
            We&apos;ve let our team know about your payment for booking{" "}
            <strong className="text-foreground">{booking.reference}</strong>. Once it&apos;s confirmed,
            you&apos;ll get an email at {booking.email}.
          </p>
          <Button className="mt-8" variant="outline" onClick={startOver}>
            Make Another Booking
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
