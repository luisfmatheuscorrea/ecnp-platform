import { InputAdornment } from '@mui/material';
import { InputProps } from './types';
import { InputSearch } from './styles';
import { FiSearch } from 'react-icons/fi';

export default function SearchInput({ label }: InputProps) {
  return (
    <InputSearch
      placeholder={label}
      startAdornment={
        <InputAdornment position="start">
          <FiSearch className="icon" />
        </InputAdornment>
      }
    />
  );
}
