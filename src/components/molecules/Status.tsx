import camelSentence from "@/utils/camelize";
import clsx from "clsx";

export default function Status({ variant }: StatusProps) {
  let statusStyle;

  switch (variant) {
    case "Alive":
      statusStyle = "bg-green-400";
      break;
    case "Dead":
      statusStyle = "bg-red-400";
      break;
    case "unknown":
      statusStyle = "bg-slate-400";
      break;
  }

  return (
    <div className="flex items-center gap-2">
      <span className={clsx("h-3 w-3 rounded-full", statusStyle)} />
      <p>{camelSentence(variant)}</p>
    </div>
  );
}
