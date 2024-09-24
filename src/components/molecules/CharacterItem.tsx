import Image from "next/image";
import Link from "next/link";

export default function CharacterItem({
  id,
  name,
  status,
  species,
  image,
}: CharacterItemProps) {
  return (
    <li className="shadow-xl w-full p-4">
      <Image src={image} className="w-full" width={100} height={100} alt={`${name} image`} />
      <Link href={`/characters/detail/${id}`}>{name}</Link>
      <p>{status}</p>
      <p>{species}</p>
    </li>
  );
}
