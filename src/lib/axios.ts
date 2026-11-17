import axios, { isAxiosError } from "axios";

import { API_BASE_URL } from "@/config/endpoints";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 20000,
});

/** Turns a DRF error response into { field: "message" } plus a general message. */
export function parseApiError(error: unknown): { fields: Record<string, string>; message: string } {
  const fallback = "Something went wrong. Please check your connection and try again.";
  if (!isAxiosError(error) || !error.response) return { fields: {}, message: fallback };

  const data = error.response.data as Record<string, unknown> | undefined;
  const fields: Record<string, string> = {};
  let message = "";

  if (data && typeof data === "object") {
    for (const [key, value] of Object.entries(data)) {
      const text = Array.isArray(value) ? String(value[0]) : String(value);
      if (key === "detail" || key === "non_field_errors") message = text;
      else fields[key] = text;
    }
  }

  if (error.response.status === 429) message = "Too many attempts. Please wait a little and try again.";
  return { fields, message: message || (Object.keys(fields).length ? "" : fallback) };
}
