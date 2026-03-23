import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CivixOS MVP",
  description: "Governance-first civic engagement MVP",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
