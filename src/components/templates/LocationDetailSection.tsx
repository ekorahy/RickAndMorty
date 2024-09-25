import { GET_LOCATION } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
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
    <section>
      <h2>Location Detail</h2>
      <p>{name}</p>
      <p>{type}</p>
      <p>{dimension}</p>
      <p>Residents</p>
      {residents.length > 0 ? (
        <ResidentsList residents={residents} />
      ) : (
        <p>No residents</p>
      )}
    </section>
  );
}
