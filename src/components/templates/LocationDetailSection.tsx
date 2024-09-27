import { GET_LOCATION } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import TitlePage from "../atoms/TitlePage";
import ResidentsList from "../organisms/ResidentsList";

export default function LocationDetailSection({
  id,
}: LocationDetailSectionProps) {
  const { loading, error, data } = useQuery(GET_LOCATION, {
    variables: { id: id },
  });

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>;

  const { name, type, dimension, residents } = data.location;

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
            <th className="border px-4 py-2 text-left">Type</th>
            <td className="border px-4 py-2">{type}</td>
          </tr>
          <tr>
            <th className="border px-4 py-2 text-left">Dimension</th>
            <td className="border px-4 py-2">{dimension}</td>
          </tr>
          <tr>
            <th className="border px-4 py-2 text-left align-top">Residents</th>
            <td className="border px-4 py-2">
              {residents.length > 0 ? (
                <ResidentsList residents={residents} />
              ) : (
                "No residents"
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
