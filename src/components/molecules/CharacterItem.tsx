"use client";

import Image from "next/image";
import Status from "./Status";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export default function CharacterItem({
  id,
  name,
  status,
  species,
  image,
}: CharacterItemProps) {
  const router = useRouter();

  const validStatus: StatusVariant =
    status === "Alive" || status === "Dead" || status === "unknown"
      ? status
      : "unknown";

  const handleItemClick = () => {
    router.push(`/characters/${id}`);
  };

  return (
    <li className="group w-full hover:cursor-pointer" onClick={handleItemClick}>
      <div className="relative mb-2 overflow-hidden rounded-xl">
        <Image
          src={image}
          className={clsx(
            "h-72 w-full object-cover duration-300 ease-in-out group-hover:scale-150",
            {
              grayscale: validStatus === "Dead",
            },
          )}
          width={100}
          height={100}
          alt={`${name} image`}
        />
        <p className="absolute bottom-2 right-2 rounded-full bg-slate-950/60 px-4 py-1 backdrop-blur">
          {species}
        </p>
      </div>
      <h4 className="text-lg font-bold group-hover:text-cyan-400">{name}</h4>
      <Status variant={validStatus} />
    </li>
  );
}
