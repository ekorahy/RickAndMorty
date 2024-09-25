"use client";

import LocationDetailSection from "@/components/templates/LocationDetailSection";
import { client } from "@/graphql/apolloClient";
import { ApolloProvider } from "@apollo/client";

export default function LocationDetail({ params }: { params: { id: string } }) {
  return (
    <ApolloProvider client={client}>
      <LocationDetailSection id={params.id} />
    </ApolloProvider>
  );
}
