export default function LocationItemSkeleton() {
  return (
    <li className="group relative animate-pulse overflow-hidden rounded-xl bg-slate-700 p-4">
      <div className="mb-1 h-6 w-3/4 rounded bg-slate-600"></div>
      <div className="mt-2 h-4 w-1/2 rounded bg-slate-600"></div>
      <div className="mt-2 h-4 w-1/3 rounded bg-slate-600"></div>
      <span className="absolute -bottom-4 -right-2 -z-0 h-12 w-12 rounded-full bg-slate-600 opacity-30"></span>
    </li>
  );
}
