export interface ButtonProps {
  model?: 'secondary' | 'outlined' | null;
  disabled?: boolean;
  label: string;
  margin?: string;
  icon?: JSX.Element;
}
