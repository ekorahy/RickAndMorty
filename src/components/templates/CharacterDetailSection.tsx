import { GET_CHARACTER } from "@/graphql/queries";
import formattedDate from "@/utils/formattedDate";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import TitlePage from "../atoms/TitlePage";
import clsx from "clsx";
import camelSentence from "@/utils/camelize";

export default function CharacterDetailSection({
  id,
}: CharacterDetailSectionProps) {
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data || !data.character) return <p>No character data found</p>;

  const {
    name,
    image,
    species,
    status,
    type,
    gender,
    origin,
    location,
    created,
  } = data.character;

  return (
    <section className="container mx-auto my-32 px-4 lg:px-8">
      <TitlePage title={name} variant="cyan" />
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-center">
        <Image
          className={clsx("h-80 w-full rounded-xl object-cover md:w-80", {
            grayscale: status === "Dead",
          })}
          src={image}
          width={100}
          height={100}
          alt={`${name} image`}
        />

        <table className="table-auto border-collapse border border-slate-300">
          <tbody>
            <tr>
              <td className="border px-4 py-2 font-semibold">Name</td>
              <td className="border px-4 py-2">{name}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Created</td>
              <td className="border px-4 py-2">{formattedDate(created)}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Species</td>
              <td className="border px-4 py-2">{species}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Gender</td>
              <td className="border px-4 py-2">{gender}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Status</td>
              <td className="border px-4 py-2">{camelSentence(status)}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Type</td>
              <td className="border px-4 py-2">{type || "N/A"}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Origin</td>
              <td className="border px-4 py-2">{camelSentence(origin.name)}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Location</td>
              <td className="border px-4 py-2">{camelSentence(location.name)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
