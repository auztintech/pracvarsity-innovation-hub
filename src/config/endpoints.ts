export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export const endpoints = {
  booking: {
    request: "/bookings/request/",
  },
  newsletter: {
    subscribe: "/newsletter/subscribe/",
  },
} as const;
