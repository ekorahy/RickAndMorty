import ApolloProviderSection from "@/components/organisms/ApolloProviderSection";
import CharacterDetailSection from "@/components/templates/CharacterDetailSection";
import { client } from "@/graphql/apolloClient";
import { GET_CHARACTER } from "@/graphql/queries";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { data } = await client.query({
    query: GET_CHARACTER,
    variables: { id: params.id },
  });

  if (!data || !data.character) {
    return {
      title: "Character not found",
    };
  }

  return {
    title: `${data.character.name} - Character`,
  };
}

export default function CharacterDetail({
  params,
}: {
  params: { id: string };
}) {
  return (
    <ApolloProviderSection withSuspense={false}>
      <CharacterDetailSection id={params.id} />
    </ApolloProviderSection>
  );
}
