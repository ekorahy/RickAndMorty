import Button from "../molecules/Button";
import CharactersImageList from "../molecules/CharactersImageList";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden text-center">
      <div className="relative flex h-full flex-col items-center justify-center px-4">
        <h2 className="relative z-10 mb-2 animate-gradient-x bg-gradient-rainbow bg-[length:200%_200%] bg-clip-text text-4xl font-bold text-transparent">
          Explore the Universe of Rick and Morty
        </h2>
        <p className="relative z-10 mb-6">
          Dive into the adventures of your favorite characters, uncover hidden
          locations, and relive iconic episodes.
        </p>
        <div className="relative z-10 flex flex-wrap justify-center items-center gap-4">
          <Button route="/characters" variant="characters" />
          <Button route="/locations" variant="locations" />
          <Button route="/episodes" variant="episodes" />
        </div>
      </div>
      <CharactersImageList direction="left" bottom="bottom-[4vh]" />
      <CharactersImageList direction="right" bottom="-bottom-[25vh]" />
      <CharactersImageList direction="left" bottom="-bottom-[54vh]" />
    </section>
  );
}
