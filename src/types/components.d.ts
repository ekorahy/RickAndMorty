type ImageAnimationDirection = 'left' | 'right';
type ButtonVariant = 'characters' | 'locations' | 'episodes';
type TitlePageVariant = 'cyan' | 'fuchsia' | 'amber';
type StatusVariant = 'Alive' | 'Dead' | 'unknown';
type ButtonPaginationColor = 'cyan' | 'fuchsia' | 'amber';
type ButtonPaginationVariant = 'prev' | 'next' | 'value';

interface NavItemProps {
  name: string;
  route: string;
}

interface CharacterImageItemProps {
  image: string;
  index: number;
}

interface CharacterImageListProps {
  direction: ImageAnimationDirection;
  bottom: string;
}

interface ButtonProps {
  route: string;
  variant: ButtonVariant;
}

interface TitlePageProps {
  title: string;
  variant: TitlePageVariant;
}

interface StatusProps {
  variant: StatusVariant;
}

interface ButtonPaginationProps {
  variant: ButtonPaginationVariant;
  value?: number;
  color: ButtonPaginationColor;
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

interface SearchInputProps {
  keyword: string;
  placeholder: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClearSearch: () => void;
}

interface ApolloProviderSectionProps {
  withSuspense: boolean;
  children: ReactNode;
}