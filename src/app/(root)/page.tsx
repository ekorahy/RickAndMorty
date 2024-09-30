import Hero from "@/components/organisms/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <section>
      <Hero />
    </section>
  );
}
