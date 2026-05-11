import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Architex | Built Environment OS",
  description: "The AI-powered operating system for the built environment.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
