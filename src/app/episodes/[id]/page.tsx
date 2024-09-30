import ApolloProviderSection from "@/components/organisms/ApolloProviderSection";
import EpisodeDetailSection from "@/components/templates/EpisodeDetailSection";
import { client } from "@/graphql/apolloClient";
import { GET_EPISODE } from "@/graphql/queries";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { data } = await client.query({
    query: GET_EPISODE,
    variables: { id: params.id },
  });

  if (!data || !data.episode) {
    return {
      title: "Episode not found",
    };
  }

  return {
    title: `${data.episode.name} - Episode`,
  };
}

export default function EpisodeDetail({ params }: { params: { id: string } }) {
  return (
    <ApolloProviderSection withSuspense={false}>
      <EpisodeDetailSection id={params.id} />
    </ApolloProviderSection>
  );
}
