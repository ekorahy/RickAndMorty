"use client";

import { GET_EPISODE } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import ResidentsList from "../organisms/ResidentsList";
import TitlePage from "../atoms/TitlePage";
import EpisodeDetailSkeleton from "../molecules/EpisodeDetailSkeleton";

export default function EpisodeDetailSection({ id }: { id: string }) {
  const { loading, error, data } = useQuery(GET_EPISODE, {
    variables: { id: id },
  });

  return (
    <section className="container mx-auto my-32 overflow-hidden px-4 lg:px-8">
      <TitlePage
        title={loading ? "Loading..." : data?.episode?.name || "Episode Detail"}
        variant="amber"
      />

      {loading ? (
        <EpisodeDetailSkeleton />
      ) : error ? (
        <p className="text-center text-red-400">Error: {error.message}</p>
      ) : (
        <table className="mt-6 min-w-full table-auto border-collapse border border-slate-300">
          <tbody>
            <tr>
              <th className="border px-4 py-2 text-left">Name</th>
              <td className="border px-4 py-2">{data.episode.name}</td>
            </tr>
            <tr>
              <th className="border px-4 py-2 text-left">Air Date</th>
              <td className="border px-4 py-2">{data.episode.air_date}</td>
            </tr>
            <tr>
              <th className="border px-4 py-2 text-left">Episode</th>
              <td className="border px-4 py-2">{data.episode.episode}</td>
            </tr>
            <tr>
              <th className="border px-4 py-2 text-left align-top">
                Characters
              </th>
              <td className="border px-4 py-2">
                {data.episode.characters.length > 0 ? (
                  <ResidentsList
                    residents={data.episode.characters}
                    variant="amber"
                  />
                ) : (
                  "No characters"
                )}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </section>
  );
}
