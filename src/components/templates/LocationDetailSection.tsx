"use client";

import { GET_LOCATION } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import TitlePage from "../atoms/TitlePage";
import ResidentsList from "../organisms/ResidentsList";
import LocationDetailSkeleton from "../molecules/LocationDetailSkeleton";

export default function LocationDetailSection({ id }: { id: string }) {
  const { loading, error, data } = useQuery(GET_LOCATION, {
    variables: { id: id },
  });

  return (
    <section className="container mx-auto my-32 overflow-hidden px-4 lg:px-8">
      <TitlePage
        title={
          loading ? "Loading..." : data?.location?.name || "Location Detail"
        }
        variant="fuchsia"
      />

      {loading && <LocationDetailSkeleton />}
      {error && (
        <p className="text-center text-red-400">Error: {error.message}</p>
      )}
      {data && data.location ? (
        <table className="mt-6 min-w-full table-auto border-collapse border border-slate-950 bg-slate-900">
          <tbody>
            <tr>
              <th className="border-4 border-slate-950 px-4 py-2 text-left">
                Name
              </th>
              <td className="border-4 border-slate-950 px-4 py-2">
                {data.location.name}
              </td>
            </tr>
            <tr>
              <th className="border-4 border-slate-950 px-4 py-2 text-left">
                Type
              </th>
              <td className="border-4 border-slate-950 px-4 py-2">
                {data.location.type}
              </td>
            </tr>
            <tr>
              <th className="border-4 border-slate-950 px-4 py-2 text-left">
                Dimension
              </th>
              <td className="border-4 border-slate-950 px-4 py-2">
                {data.location.dimension}
              </td>
            </tr>
            <tr>
              <th className="border-4 border-slate-950 px-4 py-2 text-left align-top">
                Residents
              </th>
              <td className="border-4 border-slate-950 px-4 py-2">
                {data.location.residents.length > 0 ? (
                  <ResidentsList
                    residents={data.location.residents}
                    variant="fuchsia"
                  />
                ) : (
                  "No residents"
                )}
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        !loading && <p className="text-center">No location data found</p>
      )}
    </section>
  );
}
