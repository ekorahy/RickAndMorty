export default function CharacterDetailSkeleton() {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-center">
      <div className="h-80 w-full md:w-80">
        <div className="h-full w-full animate-pulse rounded-xl bg-slate-700"></div>
      </div>

      <table className="table-auto border-collapse border border-slate-950 bg-slate-700">
        <tbody>
          {[...Array(8)].map((_, index) => (
            <tr key={index}>
              <td className="border-4 border-slate-950 px-4 py-2 font-semibold">
                <div className="mb-2 h-4 w-24 animate-pulse bg-slate-800"></div>
              </td>
              <td className="border-4 border-slate-950 px-4 py-2">
                <div className="h-4 w-32 animate-pulse bg-slate-800"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
