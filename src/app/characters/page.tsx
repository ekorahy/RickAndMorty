"use client";

import CharacterSection from "@/components/templates/CharacterSection";
import { client } from "@/graphql/apolloClient";
import { ApolloProvider } from "@apollo/client";

export default function Characters() {
  return (
    <ApolloProvider client={client}>
      <CharacterSection />
    </ApolloProvider>
  );
}
