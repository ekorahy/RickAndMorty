type ImageAnimationDirection = 'left' | 'right';

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