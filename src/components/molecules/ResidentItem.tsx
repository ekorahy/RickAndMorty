"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ResidentItem({ id, name, image }: ResidentItemProps) {
  const router = useRouter();

  const handleItemClick = () => {
    router.push(`/characters/${id}`);
  };
  return (
    <li
      className="group p-4 shadow hover:cursor-pointer"
      onClick={handleItemClick}
    >
      <Image
        className="mb-2 w-full rounded-xl"
        src={image}
        width={100}
        height={100}
        alt={`${name} image`}
      />
      <h4 className="max-w-60 font-bold group-hover:text-amber-400">{name}</h4>
    </li>
  );
}
