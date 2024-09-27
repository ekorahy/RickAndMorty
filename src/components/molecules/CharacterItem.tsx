import Image from "next/image";
import Link from "next/link";
import Status from "./Status";
import clsx from "clsx";

export default function CharacterItem({
  id,
  name,
  status,
  species,
  image,
}: CharacterItemProps) {
  const validStatus: StatusVariant =
    status === "Alive" || status === "Dead" || status === "unknown"
      ? status
      : "unknown";

  return (
    <li className="w-full">
      <div className="relative mb-2">
        <Image
          src={image}
          className={clsx("h-72 w-full rounded-xl object-cover", {
            grayscale: validStatus === "Dead",
          })}
          width={100}
          height={100}
          alt={`${name} image`}
        />
        <p className="absolute bottom-2 right-2 rounded-full bg-slate-950/60 px-4 py-1 backdrop-blur">
          {species}
        </p>
      </div>
      <h4 className="w-max text-lg font-bold hover:text-cyan-400">
        <Link href={`/characters/${id}`}>{name}</Link>
      </h4>
      <Status variant={validStatus} />
    </li>
  );
}
