"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  name: string;
  route: string;
}

export default function NavItem({ name, route }: NavItemProps) {
  const pathName = usePathname();
  const isActive = pathName === route;

  return (
    <Link
      className={clsx(
        "group relative w-max py-2 transition-all duration-300",
        isActive
          ? "bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-400 bg-clip-text font-bold text-transparent"
          : "hover:bg-gradient-to-r hover:from-cyan-400 hover:via-fuchsia-400 hover:to-amber-400 hover:bg-clip-text hover:text-transparent",
      )}
      href={route}
    >
      {name}
      <span
        className={clsx(
          "absolute bottom-0 left-0 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-400 transition-all duration-300",
          isActive ? "w-full" : "w-0 group-hover:w-full",
        )}
      />
    </Link>
  );
}
