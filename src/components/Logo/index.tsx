import Images from '../../assets/images';
import Icon from '../Icon';
import { Container } from './styles';
import { LogoProps } from './types';

export default function Logo({ noLabel, short, margin, fontSize, size }: LogoProps) {
  return (
    <Container fontSize={fontSize} margin={margin} className="header">
      <Icon icon={Images.LogoBlack} size={size ?? '3rem'} margin="0 0.5rem 0 0" />
      {noLabel ? '' : short ? 'ECNP' : 'Eu Creio na Pregação'}
    </Container>
  );
}
