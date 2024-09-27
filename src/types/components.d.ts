type ImageAnimationDirection = 'left' | 'right';
type ButtonVariant = 'characters' | 'locations' | 'episodes';
type TitlePageVariant = 'cyan' | 'fuchsia' | 'amber';
type StatusVariant = 'Alive' | 'Dead' | 'unknown';

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