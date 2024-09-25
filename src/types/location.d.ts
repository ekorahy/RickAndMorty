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
}

interface ResidentsListProps {
  residents: ResidentItemProps[]
}