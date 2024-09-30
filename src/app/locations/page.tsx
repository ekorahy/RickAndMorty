import ApolloProviderSection from "@/components/organisms/ApolloProviderSection";
import LocationsSection from "@/components/templates/LocationSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locations",
};

export default function Locations() {
  return (
    <ApolloProviderSection withSuspense>
      <LocationsSection />
    </ApolloProviderSection>
  );
}
