import ApolloProviderSection from "@/components/organisms/ApolloProviderSection";
import CharacterSection from "@/components/templates/CharacterSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Characters",
};

export default function Characters() {
  return (
    <ApolloProviderSection withSuspense={false}>
      <CharacterSection />
    </ApolloProviderSection>
  );
}
