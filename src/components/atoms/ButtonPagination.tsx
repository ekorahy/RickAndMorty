import clsx from "clsx";
import { IoMdArrowBack } from "react-icons/io";
import { MdArrowForward } from "react-icons/md";

export default function ButtonPagination({
  variant,
  value,
  color,
  active,
  disabled,
  onClick,
}: ButtonPaginationProps) {
  let buttonStyles;

  switch (variant) {
    case "prev":
      switch (color) {
        case "cyan":
          buttonStyles = clsx(
            "bg-slate-900 text-white",
            !disabled && "hover:bg-cyan-400 hover:text-black",
          );
          break;
        case "fuchsia":
          buttonStyles = clsx(
            "bg-slate-900 text-white",
            !disabled && "hover:bg-fuchsia-400 hover:text-black",
          );
          break;
        case "amber":
          buttonStyles = clsx(
            "bg-slate-900 text-white",
            !disabled && "hover:bg-amber-400 hover:text-black",
          );
          break;
      }
      break;
    case "next":
      switch (color) {
        case "cyan":
          buttonStyles = clsx(
            "bg-slate-900 text-white",
            !disabled && "hover:bg-cyan-400 hover:text-black",
          );
          break;
        case "fuchsia":
          buttonStyles = clsx(
            "bg-slate-900 text-white",
            !disabled && "hover:bg-fuchsia-400 hover:text-black",
          );
          break;
        case "amber":
          buttonStyles = clsx(
            "bg-slate-900 text-white",
            !disabled && "hover:bg-amber-400 hover:text-black",
          );
          break;
      }
      break;
    case "value":
      switch (color) {
        case "cyan":
          buttonStyles = clsx(
            {
              "bg-cyan-400 text-black": active,
              "bg-slate-900 text-white": !active,
            },
            !disabled && "hover:bg-cyan-400 hover:text-black",
          );
          break;
        case "fuchsia":
          buttonStyles = clsx(
            {
              "bg-fuchsia-400 text-black": active,
              "bg-slate-900 text-white": !active,
            },
            !disabled && "hover:bg-fuchsia-400 hover:text-black",
          );
          break;
        case "amber":
          buttonStyles = clsx(
            {
              "bg-amber-400 text-black": active,
              "bg-slate-900 text-white": !active,
            },
            !disabled && "hover:bg-amber-400 hover:text-black",
          );
          break;
      }
      break;
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "rounded-xl px-4 py-2",
        { "cursor-not-allowed opacity-50": disabled },
        buttonStyles,
      )}
    >
      {variant === "value" && value ? (
        <span className="text-sm">{value}</span>
      ) : variant === "prev" ? (
        <IoMdArrowBack className="text-lg" />
      ) : (
        <MdArrowForward className="text-lg" />
      )}
    </button>
  );
}
