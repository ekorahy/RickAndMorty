"use client";

import { useRouter } from "next/navigation";

export default function LocationItem({
  id,
  name,
  type,
  dimension,
}: LocationItemProps) {
  const router = useRouter();

  const handleItemClick = () => {
    router.push(`/locations/${id}`);
  };

  return (
    <li
      className="group relative overflow-hidden rounded-xl bg-slate-900 p-4 hover:cursor-pointer"
      onClick={handleItemClick}
    >
      <h3 className="mb-1 text-lg font-bold group-hover:text-fuchsia-400">
        {name}
      </h3>
      <p className="text-sm">Type: {type}</p>
      <p className="text-sm">Dimension: {dimension}</p>
      <span className="text-outline absolute -bottom-4 -right-2 -z-0 bg-clip-text text-7xl text-transparent opacity-30 group-hover:scale-150 group-hover:text-fuchsia-400">
        {id}
      </span>
    </li>
  );
}
