"use client";

import { GET_EPISODES } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import EpisodesList from "../organisms/EpisodesList";
import TitlePage from "../atoms/TitlePage";
import ButtonPagination from "../atoms/ButtonPagination";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import EpisodeItemSkeleton from "../molecules/EpisodeItemSkeleton";
import React from "react";
import SearchInputEpisodes from "../molecules/SearchInputEpisodes";

export default function EpisodesSection() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [screenWidth, setScreenWidth] = useState(0);

  const [keyword, setKeyword] = useState(searchParams.get("keyword") || "");
  const [debouncedKeyword, setDebouncedKeyword] = useState(keyword);

  const page = parseInt(searchParams.get("page") || "1", 10);

  const { loading, error, data } = useQuery(GET_EPISODES, {
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

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [keyword]);

  useEffect(() => {
    router.push(`?page=${page}&keyword=${debouncedKeyword}`);
  }, [debouncedKeyword, page, router]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleClearSearch = () => {
    setKeyword("");
    router.push(`?page=${page}`);
  };

  const handlePageChange = (newPage: number) => {
    router.push(`?page=${newPage}&keyword=${debouncedKeyword}`);
  };

  const createPaginationRange = () => {
    const pages = data?.episodes?.info?.pages || 1;
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

  const { results } = data?.episodes || {};
  const { next, prev } = data?.episodes?.info || {};

  const filteredResults =
    results?.filter((episode: { name: string }) =>
      episode.name.toLowerCase().includes(debouncedKeyword.toLowerCase()),
    ) || [];

  return (
    <section className="container mx-auto mb-16 mt-32 px-4 lg:px-8">
      <TitlePage title="Episodes" variant="amber" />

      <SearchInputEpisodes
        keyword={keyword}
        placeholder="episodes"
        onSearchChange={handleSearchChange}
        onClearSearch={handleClearSearch}
        data={filteredResults}
      />

      {loading ? (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          {Array.from({ length: 20 }, (_, index) => (
            <EpisodeItemSkeleton key={index} />
          ))}
        </ul>
      ) : error ? (
        <p className="text-center text-red-400">Error: {error.message}</p>
      ) : (
        <>
          <div>
            {filteredResults.length > 0 ? (
              <EpisodesList results={filteredResults} />
            ) : (
              <p className="text-center">No episodes found</p>
            )}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 lg:gap-4">
            <ButtonPagination
              variant="prev"
              color="amber"
              disabled={!prev}
              onClick={() => handlePageChange(page - 1)}
            />

            {createPaginationRange().map((pageNumber, index) =>
              typeof pageNumber === "number" ? (
                <ButtonPagination
                  key={index}
                  color="amber"
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
              color="amber"
              disabled={!next}
              onClick={() => handlePageChange(page + 1)}
            />
          </div>
        </>
      )}
    </section>
  );
}
