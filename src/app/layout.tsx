import type { Metadata } from "next";
import "../styles/globals.css";
import { inter } from "@/fonts/fonts";
import Header from "@/components/organisms/Header";
import Main from "@/components/organisms/Main";

export const metadata: Metadata = {
  title: {
    template: "%s | Rick and Morty",
    default: "Rick and Morty",
  },
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
