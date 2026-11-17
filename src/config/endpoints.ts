export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api";

export const endpoints = {
  plans: "/plans/",
  bookings: {
    create: "/bookings/",
    detail: (publicId: string) => `/bookings/${publicId}/`,
    paid: (publicId: string) => `/bookings/${publicId}/paid/`,
  },
  newsletter: {
    subscribe: "/newsletter/subscribe/",
  },
} as const;
