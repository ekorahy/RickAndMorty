import ApolloProviderSection from "@/components/organisms/ApolloProviderSection";
import EpisodesSection from "@/components/templates/EpisodesSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Episodes",
};

export default function Episodes() {
  return (
    <ApolloProviderSection withSuspense>
      <EpisodesSection />
    </ApolloProviderSection>
  );
}
