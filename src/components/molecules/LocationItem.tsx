import Link from "next/link";

export default function LocationItem({
  id,
  name,
  type,
  dimension,
}: LocationItemProps) {
  return (
    <li className="p-4 shadow">
      <h3>
        <Link href={`/locations/${id}`}>{name}</Link>
      </h3>
      <p>{type}</p>
      <p>{dimension}</p>
    </li>
  );
}
