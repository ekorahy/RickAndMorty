import CharactersImageList from "../molecules/CharactersImageList";

export default function Hero() {
  return (
    <section className="relative h-[100vh] overflow-hidden text-center">
      <div className="flex flex-col justify-center h-full items-center relative">
        <h2 className="relative mb-2 z-10 bg-gradient-rainbow animate-gradient-x bg-[length:200%_200%] bg-clip-text text-4xl font-bold text-transparent">
          Explore the Universe of Rick and Morty
        </h2>
        <p className="relative z-10 ">
          Dive into the adventures of your favorite characters, uncover hidden
          locations, and relive iconic episodes.
        </p>
      </div>
      <CharactersImageList direction="left" bottom="bottom-[4vh]" />
      <CharactersImageList direction="right" bottom="-bottom-[25vh]" />
      <CharactersImageList direction="left" bottom="-bottom-[54vh]" />
    </section>
  );
}
