import EpisodeItem from "../molecules/EpisodeItem";

export default function EpisodesList({ results }: EpisodesListProps) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto w-max">
      {results.map(({ id, name, air_date, episode }) => (
        <EpisodeItem
          key={id}
          id={id}
          name={name}
          air_date={air_date}
          episode={episode}
        />
      ))}
    </ul>
  );
}
