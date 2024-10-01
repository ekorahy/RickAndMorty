"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Footer() {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/" && (
        <footer className="bg-slate-900/40">
          <p className="container mx-auto px-4 py-8 text-center text-sm sm:text-left lg:p-8">
            © 2024 |{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-400 bg-clip-text font-bold text-transparent">
              Rick And Morty
            </span>
            , Made with ☕ & ❤️ by{" "}
            <Link
              className="underline hover:text-amber-400"
              href="https://ekorahy.vercel.app/"
            >
              Ekorahy
            </Link>
          </p>
        </footer>
      )}
    </>
  );
}
