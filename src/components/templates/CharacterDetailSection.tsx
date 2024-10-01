"use client";

import { GET_CHARACTER } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import TitlePage from "../atoms/TitlePage";
import clsx from "clsx";
import camelSentence from "@/utils/camelize";
import formattedDate from "@/utils/formattedDate";
import CharacterDetailSkeleton from "../molecules/CharacterDetailSkeleton";

export default function CharacterDetailSection({ id }: { id: string }) {
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id: id },
  });

  return (
    <section className="container mx-auto mt-32 mb-16 px-4 lg:px-8">
      <TitlePage
        title={
          loading ? "Loading..." : data?.character?.name || "Character Detail"
        }
        variant="cyan"
      />

      {loading && <CharacterDetailSkeleton />}
      {error && (
        <p className="text-center text-red-400">Error: {error.message}</p>
      )}
      {data && data.character ? (
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-center">
          <Image
            className={clsx("h-80 w-full rounded-xl object-cover md:w-80", {
              grayscale: data.character.status === "Dead",
            })}
            src={data.character.image}
            width={100}
            height={100}
            alt={`${data.character.name} image`}
          />

          <table className="table-auto border-collapse border border-slate-950 bg-slate-900">
            <tbody>
              <tr>
                <td className="border-4 border-slate-950 px-4 py-2 font-semibold">
                  Name
                </td>
                <td className="border-4 border-slate-950 px-4 py-2">
                  {data.character.name}
                </td>
              </tr>
              <tr>
                <td className="border-4 border-slate-950 px-4 py-2 font-semibold">
                  Created
                </td>
                <td className="border-4 border-slate-950 px-4 py-2">
                  {formattedDate(data.character.created)}
                </td>
              </tr>
              <tr>
                <td className="border-4 border-slate-950 px-4 py-2 font-semibold">
                  Species
                </td>
                <td className="border-4 border-slate-950 px-4 py-2">
                  {data.character.species}
                </td>
              </tr>
              <tr>
                <td className="border-4 border-slate-950 px-4 py-2 font-semibold">
                  Gender
                </td>
                <td className="border-4 border-slate-950 px-4 py-2">
                  {data.character.gender}
                </td>
              </tr>
              <tr>
                <td className="border-4 border-slate-950 px-4 py-2 font-semibold">
                  Status
                </td>
                <td className="border-4 border-slate-950 px-4 py-2">
                  {camelSentence(data.character.status)}
                </td>
              </tr>
              <tr>
                <td className="border-4 border-slate-950 px-4 py-2 font-semibold">
                  Type
                </td>
                <td className="border-4 border-slate-950 px-4 py-2">
                  {data.character.type || "N/A"}
                </td>
              </tr>
              <tr>
                <td className="border-4 border-slate-950 px-4 py-2 font-semibold">
                  Origin
                </td>
                <td className="border-4 border-slate-950 px-4 py-2">
                  {camelSentence(data.character.origin.name)}
                </td>
              </tr>
              <tr>
                <td className="border-4 border-slate-950 px-4 py-2 font-semibold">
                  Location
                </td>
                <td className="border-4 border-slate-950 px-4 py-2">
                  {camelSentence(data.character.location.name)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        !loading && <p className="text-center">No character data found</p>
      )}
    </section>
  );
}
