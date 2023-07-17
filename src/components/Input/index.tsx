import { InputContainer } from './styles';
import { InputProps } from './types';

export default function Input({ label, margin, readonly, ...rest }: InputProps) {
  return (
    <InputContainer readonly={readonly} margin={margin}>
      <input placeholder="" id="input" readOnly={Boolean(readonly)} {...rest} />
      <label htmlFor="input">{label}</label>
    </InputContainer>
  );
}
