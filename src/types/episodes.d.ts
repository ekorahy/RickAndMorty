interface EpisodeItemProps {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

interface EpisodesListProps {
  results: EpisodeItemProps[];
}

interface EpisodeDetailSectionProps {
  id: string;
}

interface SearchInputEpisodesProps {
  keyword: string;
  placeholder: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClearSearch: () => void;
  data: EpisodeItemProps[];
}