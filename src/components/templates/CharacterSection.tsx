"use client";

import { GET_CHARACTERS } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import CharactersList from "../organisms/CharactersList";
import TitlePage from "../atoms/TitlePage";
import { useRouter, useSearchParams } from "next/navigation";
import ButtonPagination from "../atoms/ButtonPagination";
import SearchInput from "../molecules/SearchInput";
import { useState, useEffect } from "react";

export default function CharacterSection() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [screenWidth, setScreenWidth] = useState(0);

  const page = parseInt(searchParams.get("page") || "1", 10);
  const keyword = searchParams.get("keyword") || "";

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page },
  });

  useEffect(() => {
    const updateWidth = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (!searchParams.get("page")) {
      router.push(`?page=1`);
    }
  }, [searchParams, router]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newKeyword = e.target.value;
    router.push(`?page=1&keyword=${newKeyword}`);
  };

  const handleClearSearch = () => {
    router.push(`?page=${page}`);
  };

  const handlePageChange = (newPage: number) => {
    router.push(`?page=${newPage}&keyword=${keyword}`);
  };

  const createPaginationRange = () => {
    const visiblePages = screenWidth >= 1024 ? 7 : 5;
    const range = [];

    range.push(1);

    if (page > visiblePages - 2) {
      range.push("...");
    }

    const start = Math.max(2, page - 2);
    const end = Math.min(pages - 1, page + 2);

    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    if (page < pages - (visiblePages - 3)) {
      range.push("...");
    }

    if (pages > 1) {
      range.push(pages);
    }

    return range;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { results } = data.characters;
  const { next, prev, pages } = data.characters.info;

  const filteredResults = results.filter((character: { name: string }) =>
    character.name.toLowerCase().includes(keyword.toLowerCase()),
  );

  const paginationRange = createPaginationRange();

  return (
    <section className="container mx-auto my-32 px-4 lg:px-8">
      <TitlePage title="characters" variant="cyan" />

      <SearchInput
        keyword={keyword}
        placeholder="characters"
        onSearchChange={handleSearchChange}
        onClearSearch={handleClearSearch}
      />

      <div>
        {filteredResults.length > 0 ? (
          <CharactersList results={filteredResults} />
        ) : (
          <p>No characters found</p>
        )}
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2 lg:gap-4">
        <ButtonPagination
          variant="prev"
          color="cyan"
          disabled={!prev}
          onClick={() => handlePageChange(page - 1)}
        />

        {paginationRange.map((pageNumber, index) =>
          typeof pageNumber === "number" ? (
            <ButtonPagination
              key={index}
              color="cyan"
              variant="value"
              value={pageNumber}
              active={page === pageNumber}
              onClick={() => handlePageChange(pageNumber)}
            />
          ) : (
            <span key={index} className="mx-2 text-gray-500">
              ...
            </span>
          ),
        )}

        <ButtonPagination
          variant="next"
          color="cyan"
          disabled={!next}
          onClick={() => handlePageChange(page + 1)}
        />
      </div>
    </section>
  );
}
