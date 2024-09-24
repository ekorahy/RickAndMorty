"use client";

import CharacterDetailSection from "@/components/templates/CharacterDetailSection";
import { client } from "@/graphql/apolloClient";
import { ApolloProvider } from "@apollo/client";

export default function CharacterDetail({
  params,
}: {
  params: { id: string };
}) {
  return (
    <ApolloProvider client={client}>
      <CharacterDetailSection id={params.id} />
    </ApolloProvider>
  );
}
