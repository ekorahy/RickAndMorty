"use client";

import { GET_LOCATIONS } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import LocationList from "../organisms/LocationList";
import TitlePage from "../atoms/TitlePage";
import { useRouter, useSearchParams } from "next/navigation";
import ButtonPagination from "../atoms/ButtonPagination";
import { useState, useEffect } from "react";

export default function LocationsSection() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [screenWidth, setScreenWidth] = useState(0);

  const page = parseInt(searchParams.get("page") || "1", 10);

  const { loading, error, data } = useQuery(GET_LOCATIONS, {
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { results } = data.locations;
  const { next, prev, pages } = data.locations.info;

  const handlePageChange = (newPage: number) => {
    router.push(`?page=${newPage}`);
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

  const paginationRange = createPaginationRange();

  return (
    <section className="container mx-auto my-32 px-4 lg:px-8">
      <TitlePage title="Locations" variant="fuchsia" />
      <div>
        {results.length > 0 ? (
          <LocationList results={results} />
        ) : (
          <p>No locations found</p>
        )}
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2 lg:gap-4">
        <ButtonPagination
          variant="prev"
          color="fuchsia"
          disabled={!prev}
          onClick={() => handlePageChange(page - 1)}
        />

        {paginationRange.map((pageNumber, index) =>
          typeof pageNumber === "number" ? (
            <ButtonPagination
              key={index}
              color="fuchsia"
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
          color="fuchsia"
          disabled={!next}
          onClick={() => handlePageChange(page + 1)}
        />
      </div>
    </section>
  );
}
