"use client";

import LocationsSection from "@/components/templates/LocationSection";
import { client } from "@/graphql/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { Suspense } from "react";

export default function Locations() {
  return (
    <ApolloProvider client={client}>
      <Suspense>
        <LocationsSection />
      </Suspense>
    </ApolloProvider>
  );
}
