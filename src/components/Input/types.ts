import { HTMLProps } from 'react';

export interface InputProps extends HTMLProps<HTMLInputElement> {
  readonly?: boolean;
  label?: string;
  margin?: string;
}
