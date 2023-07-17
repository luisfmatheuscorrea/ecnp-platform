import { Image } from './styles';
import { IconProps } from './types';

export default function Icon({ icon, margin, size }: IconProps) {
  return <Image src={icon} margin={margin} size={size} />;
}
