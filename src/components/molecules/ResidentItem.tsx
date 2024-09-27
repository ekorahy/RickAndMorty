"use client";

import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ResidentItem({
  id,
  name,
  image,
  variant,
}: ResidentItemProps) {
  const router = useRouter();
  let residentItemStyle;

  switch (variant) {
    case "fuchsia":
      residentItemStyle = "group-hover:text-fuchsia-400";
      break;
    case "amber":
      residentItemStyle = "group-hover:text-amber-400";
      break;
  }

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
      <h4 className={clsx("max-w-60 font-bold", residentItemStyle)}>{name}</h4>
    </li>
  );
}
