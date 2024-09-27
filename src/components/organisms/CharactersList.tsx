import CharacterItem from "../molecules/CharacterItem";

export default function CharactersList({ results }: CharactersListProps) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
      {results.map(({ id, name, status, species, image }) => (
        <CharacterItem
          key={id}
          id={id}
          name={name}
          status={status}
          species={species}
          image={image}
        />
      ))}
    </ul>
  );
}
