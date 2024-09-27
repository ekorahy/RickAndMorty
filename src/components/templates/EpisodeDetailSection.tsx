import { GET_EPISODE } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import ResidentsList from "../organisms/ResidentsList";
import TitlePage from "../atoms/TitlePage";

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
    <section className="container mx-auto my-32 overflow-hidden px-4 lg:px-8">
      <TitlePage title={name} variant="amber" />

      <table className="mt-6 min-w-full table-auto border-collapse border border-slate-300">
        <tbody>
          <tr>
            <th className="border px-4 py-2 text-left">Name</th>
            <td className="border px-4 py-2">{name}</td>
          </tr>
          <tr>
            <th className="border px-4 py-2 text-left">Air Date</th>
            <td className="border px-4 py-2">{air_date}</td>
          </tr>
          <tr>
            <th className="border px-4 py-2 text-left">Episode</th>
            <td className="border px-4 py-2">{episode}</td>
          </tr>
          <tr>
            <th className="border px-4 py-2 text-left align-top">Characters</th>
            <td className="border px-4 py-2">
              {characters.length > 0 ? (
                <ResidentsList residents={characters} />
              ) : (
                "No characters"
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
