"use client";

import EpisodesSection from "@/components/templates/EpisodesSection";
import { client } from "@/graphql/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { Suspense } from "react";

export default function Episodes() {
  return (
    <ApolloProvider client={client}>
      <Suspense>
        <EpisodesSection />
      </Suspense>
    </ApolloProvider>
  );
}
