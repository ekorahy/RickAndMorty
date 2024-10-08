import { CiSearch } from "react-icons/ci";

export default function SearchInputEpisodes({
  keyword,
  placeholder,
  onSearchChange,
  onClearSearch,
  data,
}: SearchInputEpisodesProps) {
  const suggestions = data.filter((episode) =>
    episode.name.toLowerCase().includes(keyword.toLowerCase()),
  );

  return (
    <div className="mx-auto mb-8 flex w-full flex-col items-center justify-center gap-2 lg:w-4/5">
      <div className="flex w-full items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-slate-50">
        <label htmlFor="searchInput">
          <CiSearch />
        </label>
        <input
          id="searchInput"
          type="text"
          value={keyword}
          onChange={onSearchChange}
          className="w-full bg-inherit outline-none"
          placeholder={`Search ${placeholder} by name`}
          list="suggestions"
        />
        <datalist id="suggestions">
          {suggestions.map((episode) => (
            <option key={episode.id} value={episode.name} />
          ))}
        </datalist>
      </div>

      {keyword && (
        <button onClick={onClearSearch} className="ml-auto text-red-600">
          Clear
        </button>
      )}
    </div>
  );
}
