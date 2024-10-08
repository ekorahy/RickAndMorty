import type { Metadata } from "next";
import "../styles/globals.css";
import { inter } from "@/fonts/fonts";
import Header from "@/components/organisms/Header";
import Main from "@/components/organisms/Main";
import Footer from "@/components/molecules/Footer";

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
      <body className={`${inter.className} scrollbar antialiased`}>
        <Header />
        <Main>{children}</Main>

        <Footer />
      </body>
    </html>
  );
}
