"use client";

import CharacterSection from "@/components/templates/CharacterSection";
import { client } from "@/graphql/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { Suspense } from "react";

export default function Characters() {
  return (
    <ApolloProvider client={client}>
      <Suspense>
        <CharacterSection />
      </Suspense>
    </ApolloProvider>
  );
}
