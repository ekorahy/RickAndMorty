export default function CharacterItemSkeleton() {
  return (
    <li className="group w-full animate-pulse">
      <div className="relative mb-4 overflow-hidden rounded-xl bg-slate-700">
        <div className="h-72 w-full bg-slate-700" />
        <p className="absolute bottom-2 right-2 h-8 w-1/3 rounded-full bg-slate-500 px-4 py-1 backdrop-blur"></p>
      </div>
      <h4 className="h-8 w-4/5 bg-slate-700 text-lg font-bold"></h4>
      <div className="mt-4 flex gap-2">
        <div className="h-4 w-4 rounded-full bg-slate-700" />
        <div className="h-4 w-1/2 bg-slate-700" />
      </div>
    </li>
  );
}
