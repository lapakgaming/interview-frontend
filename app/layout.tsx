import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LapakGaming – Top-Up",
  description: "Technical interview – Product Detail Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
