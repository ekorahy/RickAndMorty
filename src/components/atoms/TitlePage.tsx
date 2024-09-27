import clsx from "clsx";

export default function TitlePage({ title, variant }: TitlePageProps) {
  let titleStyle;

  switch (variant) {
    case "cyan":
      titleStyle = "text-cyan-400";
      break;
    case "fuchsia":
      titleStyle = "text-fuchsia-400";
      break;
    case "amber":
      titleStyle = "text-amber-400";
      break;
  }

  return (
    <div className="relative mb-4 lg:mb-8">
      <h2 className={clsx("pt-2 text-2xl font-bold", titleStyle)}>
        {title.toUpperCase()}
      </h2>
      <span className="text-outline absolute left-4 top-0 -z-10 bg-clip-text text-4xl text-transparent opacity-40">
        {title.toUpperCase()}
      </span>
    </div>
  );
}
