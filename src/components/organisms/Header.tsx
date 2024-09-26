"use client";

import { useEffect, useState } from "react";
import NavLargeDevice from "./NavLargeDevice";
import NavSmallDevice from "./NavSmallDevice";
import clsx from "clsx";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 z-50 w-full transition-all duration-300 ease-in-out",
        {
          "bg-slate-950/60 backdrop-blur": scrolled,
          "bg-transparent": !scrolled,
        },
      )}
    >
      <NavSmallDevice />
      <NavLargeDevice />
    </header>
  );
}
