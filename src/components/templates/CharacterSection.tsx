"use client";

import { GET_CHARACTERS } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import CharactersList from "../organisms/CharactersList";

export default function CharacterSection() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section>
      {data && data.characters && data.characters.results && data.characters.results.length > 0 ? (
        <CharactersList results={data.characters.results} />
      ) : (
        <p>No characters found</p>
      )}
    </section>
  );
}