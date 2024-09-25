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