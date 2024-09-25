import { GET_EPISODES } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import EpisodesList from "../organisms/EpisodesList";

export default function EpisodesSection() {
  const { loading, error, data } = useQuery(GET_EPISODES);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>;

  const { results } = data.episodes;

  return (
    <section>
      {results.length > 0 ? (
        <EpisodesList results={results} />
      ) : (
        <p>Episodes not found</p>
      )}
    </section>
  );
}
