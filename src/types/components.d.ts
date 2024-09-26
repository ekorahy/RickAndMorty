type ImageAnimationDirection = 'left' | 'right';
type ButtonVariant = 'characters' | 'locations' | 'episodes';

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