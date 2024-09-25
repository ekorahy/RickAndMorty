import Link from "next/link";

export default function EpisodeItem({
  id,
  name,
  air_date,
  episode,
}: EpisodeItemProps) {
  return (
    <li className="p-4 shadow">
      <h4 className="max-w-60">
        <Link href={`/episodes/${id}`}>{name}</Link>
      </h4>
      <p>{air_date}</p>
      <p>{episode}</p>
    </li>
  );
}
