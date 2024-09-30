"use client"

import { client } from "@/graphql/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { Suspense } from "react";

export default function ApolloProviderSection({
  withSuspense,
  children,
}: ApolloProviderSectionProps) {
  return (
    <ApolloProvider client={client}>
      {withSuspense ? <Suspense>{children}</Suspense> : children}
    </ApolloProvider>
  );
}
