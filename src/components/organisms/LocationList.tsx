import LocationItem from "../molecules/LocationItem";

export default function LocationList({ results }: LocationListProps) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
      {results.map(({ id, name, type, dimension }) => (
        <LocationItem
          key={id}
          id={id}
          name={name}
          type={type}
          dimension={dimension}
        />
      ))}
    </ul>
  );
}
