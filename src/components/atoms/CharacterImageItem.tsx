import Image from "next/image";

export default function CharacterImageItem({
  image,
  index,
}: CharacterImageItemProps) {
  return (
    <Image
      className="grayscale hover:grayscale-0"
      src={image}
      width={200}
      height={200}
      alt={`character image ${index}`}
    />
  );
}
