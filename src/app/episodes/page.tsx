"use client";

import EpisodesSection from "@/components/templates/EpisodesSection";
import { client } from "@/graphql/apolloClient";
import { ApolloProvider } from "@apollo/client";

export default function Episodes() {
  return (
    <ApolloProvider client={client}>
      <EpisodesSection />
    </ApolloProvider>
  );
}