import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Pracvarsity | Co-working & Practical Learning Hub in Benin City",
  description:
    "Where ideas become skills and skills become innovation. 24/7 co-working space and MicroDegree training opposite the University of Benin main gate.",
};

export const viewport: Viewport = {
  themeColor: "#2350b9",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
