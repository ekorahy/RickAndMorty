"use client";

import { GET_CHARACTERS } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import CharactersList from "../organisms/CharactersList";
import TitlePage from "../atoms/TitlePage";

export default function CharacterSection() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="container mx-auto my-32 px-4 lg:px-8">
      <TitlePage title="characters" variant="cyan" />
      {data.characters.results.length > 0 ? (
        <CharactersList results={data.characters.results} />
      ) : (
        <p>No characters found</p>
      )}
    </section>
  );
}
