import ResidentItem from "../molecules/ResidentItem";

export default function ResidentsList({
  residents,
  variant,
}: ResidentsListProps) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {residents.map(({ id, name, image }) => (
        <ResidentItem
          key={id}
          id={id}
          name={name}
          image={image}
          variant={variant}
        />
      ))}
    </ul>
  );
}
