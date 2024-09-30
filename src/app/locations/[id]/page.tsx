import ApolloProviderSection from "@/components/organisms/ApolloProviderSection";
import LocationDetailSection from "@/components/templates/LocationDetailSection";
import { client } from "@/graphql/apolloClient";
import { GET_LOCATION } from "@/graphql/queries";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { data } = await client.query({
    query: GET_LOCATION,
    variables: { id: params.id },
  });

  if (!data || !data.location) {
    return {
      title: "Location not found",
    };
  }

  return {
    title: `${data.location.name} - Location`,
  };
}

export default function LocationDetail({ params }: { params: { id: string } }) {
  return (
    <ApolloProviderSection withSuspense={false}>
      <LocationDetailSection id={params.id} />
    </ApolloProviderSection>
  );
}
