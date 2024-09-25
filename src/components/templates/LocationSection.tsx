import { GET_LOCATIONS } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import LocationList from "../organisms/LocationList";

export default function LocationsSection() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <section>
      {data.locations.results.length > 0 ? (
        <LocationList results={data.locations.results} />
      ) : (
        <p>No Locations Found</p>
      )}
    </section>
  );
}
