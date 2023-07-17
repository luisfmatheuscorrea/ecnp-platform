import { ButtonSC } from './styles';
import { ButtonProps } from './types';

export default function Button({ label, icon, disabled, margin, width, model }: ButtonProps) {
  return (
    <ButtonSC variant={model} width={width} margin={margin} model={model} disabled={disabled} startIcon={icon}>
      {label}
    </ButtonSC>
  );
}
