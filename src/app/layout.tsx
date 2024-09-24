import type { Metadata } from "next";
import "../styles/globals.css";
import { inter } from "@/fonts/fonts";

export const metadata: Metadata = {
  title: "Rick and Morty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
