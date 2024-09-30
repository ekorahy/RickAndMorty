type ResidentItemVariant = 'fuchsia' | 'amber';

interface LocationItemProps {
  id: string;
  name: string;
  type: string;
  dimension: string;
}

interface LocationListProps {
  results: LocationItemProps[];
}

interface LocationDetailSectionProps {
  id: string;
}

interface ResidentItemProps {
  id: string;
  name: string;
  image: string;
  variant: ResidentItemVariant;
}

interface ResidentsListProps {
  residents: ResidentItemProps[],
  variant: ResidentItemVariant;
}

interface SearchInputLocationsProps {
  keyword: string;
  placeholder: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClearSearch: () => void;
  data: LocationItemProps[];
}