"use client";

import NavList from "../molecules/NavList";
import Logo from "../atoms/Logo";
import { CgMenuRight } from "react-icons/cg";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function NavSmallDevice() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlerMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 lg:hidden">
      <Logo />
      <button
        onClick={handlerMenuOpen}
        className="rounded-full bg-slate-900 p-3"
      >
        <CgMenuRight className="text-2xl" />
      </button>

      <div
        className={`fixed right-0 top-0 h-screen w-max transform bg-slate-900 p-8 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col justify-between">
          <NavList />
          <button
            onClick={handlerMenuOpen}
            className="mx-auto rounded-full border border-red-400 p-2 text-xl text-red-400"
          >
            <IoMdClose />
          </button>
        </div>
      </div>
    </nav>
  );
}
