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

interface CharacterDetailSectionProps {
  id: string;
}

interface SearchInputCharactersProps {
  keyword: string;
  placeholder: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClearSearch: () => void;
  data: CharacterItemProps[];
}