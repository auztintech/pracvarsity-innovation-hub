import { BookingFlow } from "@/components/booking/booking-flow";
import { Reveal, SplitHeading } from "@/components/motion/reveal";
import { SectionBadge } from "@/components/shared/section-badge";

export function Booking() {
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
              No account needed. Pick a plan, fill in your details and you&apos;ll get payment details
              straight away.
            </p>
          </Reveal>
        </div>

        <Reveal from="up" distance={80} className="mx-auto mt-12 max-w-3xl sm:mt-16">
          <div className="rounded-3xl bg-surface p-5 sm:p-8 lg:p-10">
            <BookingFlow defaultPlan="weekly" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
