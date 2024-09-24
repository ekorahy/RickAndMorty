interface CharacterItemProps {
  id: string;
  name: string;
  status: string;
  species: string;
  image: string;
}

interface CharactersListProps {
  results: CharacterItemProps[];
} 