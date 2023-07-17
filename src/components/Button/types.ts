export interface ButtonProps {
  model: 'contained' | 'outlined' | 'text';
  disabled?: boolean;
  label: string;
  margin?: string;
  icon?: JSX.Element;
  width?: string;
}

export interface ButtonContainerProps {
  model: 'contained' | 'outlined' | 'text';
  disabled?: boolean;
  margin?: string;
  width?: string;
}
