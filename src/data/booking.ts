/* Mirrors the plans in the API (Django admin → Plans).
   The API is the source of truth for the amount the customer pays. */
export type BookingPlan = {
  slug: string;
  name: string;
  price: number;
  period: "day" | "week" | "month";
};

export const bookingPlans: BookingPlan[] = [
  { slug: "daily", name: "Daily", price: 1500, period: "day" },
  { slug: "weekly", name: "Weekly", price: 8000, period: "week" },
  { slug: "monthly", name: "Monthly", price: 30000, period: "month" },
];

export type BookingResponse = {
  public_id: string;
  reference: string;
  plan: { slug: string; name: string; price: string; period: string };
  full_name: string;
  email: string;
  phone: string;
  start_date: string;
  seats: number;
  unit_price: string;
  amount: string;
  status: "awaiting_payment" | "payment_claimed" | "confirmed" | "cancelled";
  status_label: string;
  bank: { bank_name: string; account_name: string; account_number: string } | null;
};

export const naira = (value: number | string) =>
  `₦${Number(value).toLocaleString("en-NG", { maximumFractionDigits: 0 })}`;
