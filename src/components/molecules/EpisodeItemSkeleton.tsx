export default function EpisodeItemSkeleton() {
  return (
    <li className="group relative animate-pulse overflow-hidden rounded-xl bg-slate-700 p-4">
      <div className="mb-2 h-6 w-3/4 rounded bg-slate-600"></div>
      <div className="mt-4 flex items-center gap-2">
        <div className="h-4 w-4 rounded-full bg-slate-600"></div>
        <div className="h-4 w-1/2 rounded bg-slate-600"></div>
      </div>
      <div className="absolute -bottom-3 right-0 z-0 flex items-center gap-2 opacity-40">
        <div className="h-10 w-10 rounded-full bg-slate-600"></div>
        <div className="h-8 w-20 rounded bg-slate-600"></div>
      </div>
    </li>
  );
}
