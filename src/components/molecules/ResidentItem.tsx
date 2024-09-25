import Image from "next/image";
import Link from "next/link";

export default function ResidentItem({ id, name, image }: ResidentItemProps) {
  return (
    <li className="p-4 shadow">
      <Image
        className="w-full"
        src={image}
        width={100}
        height={100}
        alt={`${name} image`}
      />
      <h4 className="max-w-60">
        <Link href={`/characters/${id}`}>{name}</Link>
      </h4>
    </li>
  );
}
