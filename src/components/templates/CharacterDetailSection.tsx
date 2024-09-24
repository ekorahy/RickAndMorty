import { GET_CHARACTER } from "@/graphql/queries";
import formattedDate from "@/utils/formattedDate";
import { useQuery } from "@apollo/client";
import Image from "next/image";

export default function CharacterDetailSection({
  id,
}: CharacterDetailSectionProps) {
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data || !data.character) return <p>No character data found</p>;

  const {
    name,
    image,
    species,
    status,
    type,
    gender,
    origin,
    location,
    created,
  } = data.character;
  return (
    <section>
      <h2>Character Detail</h2>
      <Image src={image} width={100} height={100} alt={`${name} image`} />
      <h3>{name}</h3>
      <p>{formattedDate(created)}</p>
      <h4>Description:</h4>
      <ul>
        <li>Species: {species}</li>
        <li>Gender: {gender}</li>
        <li>Status: {status}</li>
        <li>Type: {type}</li>
        <li>Origin: {origin.name}</li>
        <li>Location: {location.name}</li>
      </ul>
    </section>
  );
}
