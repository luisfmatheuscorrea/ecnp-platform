// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';
import { InputProps } from './types';
// import colors from '../../assets/styles/colors';
import { FilledInput } from '@mui/material';
import colors from '../../assets/styles/colors';

export const InputSearch = styled(FilledInput)<InputProps>`
  width: 100%;
  height: 3.5rem;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  border: none;
  text-decoration: none;
  outline: none;

  background-color: ${colors.white} !important;
  padding: 0 1.2rem !important;

  margin: ${({ margin }) => margin ?? '0'};
  border-radius: 1rem !important;

  font-weight: 600;
  font-size: 1.2rem;

  .icon {
    font-size: 1.2rem;
    color: ${colors.black};
  }

  &::after {
    display: none;
  }

  &::before {
    display: none;
  }
`;
