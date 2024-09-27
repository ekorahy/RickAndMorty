import { GET_LOCATIONS } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import LocationList from "../organisms/LocationList";
import TitlePage from "../atoms/TitlePage";

export default function LocationsSection() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <section className="container mx-auto my-32 px-4 lg:px-8">
      <TitlePage title="Locations" variant="fuchsia" />
      {data.locations.results.length > 0 ? (
        <LocationList results={data.locations.results} />
      ) : (
        <p>No Locations Found</p>
      )}
    </section>
  );
}
