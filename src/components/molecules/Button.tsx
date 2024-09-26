import clsx from "clsx";
import Link from "next/link";
import { GiMechaHead } from "react-icons/gi";
import { MdMyLocation } from "react-icons/md";
import { PiFilmReel } from "react-icons/pi";

export default function Button({ route, variant }: ButtonProps) {
  let buttonStyle;
  let iconStyle;

  switch (variant) {
    case "characters":
      buttonStyle = "to-cyan-400"
      iconStyle = "text-cyan-400";
      break;
    case "locations":
      buttonStyle = "to-fuchsia-400";
      iconStyle = "text-fuchsia-400";
      break;
    case "episodes":
      buttonStyle = "to-amber-400";
      iconStyle = "text-amber-400";
      break;
  }

  return (
    <Link
      className={clsx(
        "relative group rounded-full from-slate-950 bg-gradient-to-r flex items-center gap-2 px-8 py-2 overflow-hidden",
        buttonStyle
      )}
      href={route}
    >
      <span
        className={clsx(
          "text-5xl absolute -left-2 transform transition-transform duration-300 ease-in-out group-hover:scale-150",
          iconStyle
        )}
      >
        {variant === "characters" && <GiMechaHead />}
        {variant === "locations" && <MdMyLocation />}
        {variant === "episodes" && <PiFilmReel />}
      </span>
      <span className="relative font-bold text-base text-slate-50">{variant.toUpperCase()}</span>
    </Link>
  );
}
