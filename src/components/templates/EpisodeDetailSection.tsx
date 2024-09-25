import { GET_EPISODE } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import ResidentsList from "../organisms/ResidentsList";

export default function EpisodeDetailSection({
  id,
}: EpisodeDetailSectionProps) {
  const { loading, error, data } = useQuery(GET_EPISODE, {
    variables: { id: id },
  });

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>;

  const { name, air_date, episode, characters } = data.episode;
  return (
    <section>
      <h2>{name}</h2>
      <p>{air_date}</p>
      <p>{episode}</p>
      <p>Characters</p>
      {characters.length > 0 ? (
        <ResidentsList residents={characters} />
      ) : (
        <p>No characters</p>
      )}
    </section>
  );
}
