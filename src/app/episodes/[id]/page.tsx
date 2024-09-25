"use client";

import EpisodeDetailSection from "@/components/templates/EpisodeDetailSection";
import { client } from "@/graphql/apolloClient";
import { ApolloProvider } from "@apollo/client";

export default function EpisodeDetail({ params }: { params: { id: string } }) {
  return (
    <ApolloProvider client={client}>
      <EpisodeDetailSection id={params.id} />
    </ApolloProvider>
  );
}
