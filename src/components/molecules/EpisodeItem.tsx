"use client";

import { useRouter } from "next/navigation";
import { BsCalendar2Date } from "react-icons/bs";
import { FaFilm } from "react-icons/fa";

export default function EpisodeItem({
  id,
  name,
  air_date,
  episode,
}: EpisodeItemProps) {
  const router = useRouter();

  const handleItemClick = () => {
    router.push(`/episodes/${id}`);
  };

  return (
    <li
      className="group relative overflow-hidden rounded-xl bg-slate-900 p-4 hover:cursor-pointer"
      onClick={handleItemClick}
    >
      <h4 className="relative mb-1 max-w-60 text-lg font-bold group-hover:text-amber-400">
        {name}
      </h4>
      <p className="relative flex items-center gap-2 text-sm">
        <BsCalendar2Date /> {air_date}
      </p>
      <p className="absolute -bottom-3 right-0 z-0 flex items-center gap-2 text-4xl opacity-40 group-hover:scale-150">
        <FaFilm className="group-hover:text-amber-400" />
        <span className="text-outline bg-clip-text text-transparent group-hover:text-amber-400">
          {episode}
        </span>
      </p>
    </li>
  );
}
