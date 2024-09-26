import { characters } from "@/constants/characters";
import CharacterImageItem from "../atoms/CharacterImageItem";
import clsx from "clsx";

export default function CharactersImageList({ direction, bottom }: CharacterImageListProps) {
  const animationClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';

  return (
    <div className={clsx('absolute', bottom, 'right-0 -rotate-45')}>
      <div className={clsx('flex', animationClass, 'gap-2 items-center')}>
        {characters.map(({ id, image }, idx) => (
          <CharacterImageItem key={id} image={image} index={idx} />
        ))}
        {characters.map(({ id, image }, idx) => (
          <CharacterImageItem key={`duplicate-${id}`} image={image} index={idx} />
        ))}
      </div>
    </div>
  );
}
