"use client";

import LocationsSection from "@/components/templates/LocationSection";
import { client } from "@/graphql/apolloClient";
import { ApolloProvider } from "@apollo/client";

export default function Locations() {
  return (
    <ApolloProvider client={client}>
      <LocationsSection />
    </ApolloProvider>
  );
}
