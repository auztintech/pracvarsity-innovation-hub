"use client";

import { AnimatePresence, motion } from "motion/react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { CheckIcon, SendIcon } from "@/components/icons/pack";
import { Reveal, SplitHeading } from "@/components/motion/reveal";
import { DatePicker } from "@/components/shared/date-picker";
import { SectionBadge } from "@/components/shared/section-badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { API_BASE_URL, endpoints } from "@/config/endpoints";

const spaceTypes = [
  "Daily Pass (₦1,500)",
  "Weekly Plan (₦8,000)",
  "Monthly Plan (₦30,000)",
  "Dedicated Desk (Monthly)",
  "Meeting Area",
  "Training Program",
];

type Values = {
  fullName: string;
  email: string;
  phone: string;
  spaceType: string;
  date: Date | null;
  people: string;
  company: string;
  message: string;
};

const schema = Yup.object({
  fullName: Yup.string().trim().required("Enter your full name"),
  email: Yup.string().email("Enter a valid email").required("Enter your email"),
  phone: Yup.string()
    .matches(/^[+\d\s()-]{7,20}$/, "Enter a valid phone number")
    .required("Enter your phone number"),
  spaceType: Yup.string().required("Select a space type"),
  date: Yup.date().nullable().required("Select a booking date"),
  people: Yup.number()
    .typeError("Enter a number")
    .min(1, "At least 1 person")
    .max(100, "Contact us for groups above 100")
    .required("How many people?"),
  company: Yup.string(),
  message: Yup.string().max(1000),
});

function Field({
  label,
  htmlFor,
  required,
  error,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string | false;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2.5">
      <Label htmlFor={htmlFor}>
        {label}
        {required && <span className="text-red-500">*</span>}
      </Label>
      {children}
      {error ? (
        <p className="pl-5 text-sm text-red-500">{error}</p>
      ) : hint ? (
        <p className="pl-1 text-sm text-muted">{hint}</p>
      ) : null}
    </div>
  );
}

export function Booking() {
  const formik = useFormik<Values>({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      spaceType: "",
      date: null,
      people: "",
      company: "",
      message: "",
    },
    validationSchema: schema,
    onSubmit: async (values, { resetForm, setStatus }) => {
      // TODO: swap for the project's axios instance once the booking API is live.
      if (API_BASE_URL) {
        await fetch(`${API_BASE_URL}${endpoints.booking.request}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...values, date: values.date?.toISOString().slice(0, 10) }),
        });
      } else {
        await new Promise((r) => setTimeout(r, 900));
      }
      resetForm();
      setStatus("sent");
    },
  });

  const err = (name: keyof Values) => formik.touched[name] && (formik.errors[name] as string | undefined);

  return (
    <section id="book" className="py-20 sm:py-28 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col items-center text-center">
          <SectionBadge>Book Space</SectionBadge>
          <SplitHeading
            className="mt-6 sm:mt-8"
            lines={[{ text: "Reserve The Right" }, { text: "Space For You", accent: true }]}
          />
          <Reveal className="mt-5 max-w-md">
            <p className="text-muted sm:text-lg">
              Tell us what you need and our team will get back to you within 24 hours.
            </p>
          </Reveal>
        </div>

        <Reveal from="up" distance={80} className="mx-auto mt-12 max-w-5xl sm:mt-16">
          <div className="relative overflow-hidden rounded-3xl bg-surface p-5 sm:p-8 lg:p-10">
            <AnimatePresence mode="wait">
              {formik.status === "sent" ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center py-12 text-center sm:py-20"
                >
                  <motion.span
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.1 }}
                    className="flex size-20 items-center justify-center rounded-full bg-primary text-white"
                  >
                    <CheckIcon className="size-10" />
                  </motion.span>
                  <h3 className="mt-6">Booking Request Sent!</h3>
                  <p className="mt-3 max-w-md text-muted">
                    Thanks for reaching out. We&apos;ll confirm your space within 24 hours.
                  </p>
                  <Button className="mt-8" variant="outline" onClick={() => formik.setStatus(undefined)}>
                    Book Another Space
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  noValidate
                  onSubmit={formik.handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid gap-6 md:grid-cols-2 md:gap-x-8 md:gap-y-7"
                >
                  <Field label="Full Name" htmlFor="fullName" required error={err("fullName")}>
                    <Input
                      id="fullName"
                      placeholder="Your full name"
                      aria-invalid={!!err("fullName") || undefined}
                      {...formik.getFieldProps("fullName")}
                    />
                  </Field>

                  <Field label="Email Address" htmlFor="email" required error={err("email")}>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      aria-invalid={!!err("email") || undefined}
                      {...formik.getFieldProps("email")}
                    />
                  </Field>

                  <Field label="Phone Number" htmlFor="phone" required error={err("phone")}>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+234 800 000 0000"
                      aria-invalid={!!err("phone") || undefined}
                      {...formik.getFieldProps("phone")}
                    />
                  </Field>

                  <Field label="Space Type" htmlFor="spaceType" required error={err("spaceType")}>
                    <Select
                      value={formik.values.spaceType}
                      onValueChange={(v) => formik.setFieldValue("spaceType", v)}
                      onOpenChange={(o) => !o && formik.setFieldTouched("spaceType", true)}
                    >
                      <SelectTrigger id="spaceType" aria-invalid={!!err("spaceType") || undefined}>
                        <SelectValue placeholder="Select your space type" />
                      </SelectTrigger>
                      <SelectContent>
                        {spaceTypes.map((t) => (
                          <SelectItem key={t} value={t}>
                            {t}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>

                  <Field label="Date" htmlFor="date" required error={err("date")}>
                    <DatePicker
                      id="date"
                      value={formik.values.date}
                      placeholder="Select your booking date"
                      invalid={!!err("date")}
                      onChange={(d) => formik.setFieldValue("date", d ?? null)}
                      onBlur={() => formik.setFieldTouched("date", true)}
                    />
                  </Field>

                  <Field label="Number Of People" htmlFor="people" required error={err("people")}>
                    <Input
                      id="people"
                      type="number"
                      min={1}
                      inputMode="numeric"
                      placeholder="How many people?"
                      aria-invalid={!!err("people") || undefined}
                      {...formik.getFieldProps("people")}
                    />
                  </Field>

                  <div className="md:col-span-2">
                    <Field
                      label="Company / School"
                      htmlFor="company"
                      hint="*Optional for individual bookings."
                    >
                      <Input id="company" placeholder="Company, team or school" {...formik.getFieldProps("company")} />
                    </Field>
                  </div>

                  <div className="md:col-span-2">
                    <Field label="Additional Message" htmlFor="message" error={err("message")}>
                      <Textarea
                        id="message"
                        placeholder="Tell us your preferences, special requests, or anything we should know."
                        {...formik.getFieldProps("message")}
                      />
                    </Field>
                  </div>

                  <Button type="submit" size="lg" className="w-full md:col-span-2" disabled={formik.isSubmitting}>
                    {formik.isSubmitting ? (
                      <>
                        <span className="size-4.5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Request Booking
                        <SendIcon className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
