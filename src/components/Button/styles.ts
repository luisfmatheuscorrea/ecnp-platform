// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import { ButtonContainerProps } from './types';
import { Button as ButtonMUI } from '@mui/material';

export const ButtonSC = styled(ButtonMUI)<ButtonContainerProps>`
  width: ${({ width }) => width ?? '100%'};
  height: 3.5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 0 1.8rem !important;

  background-color: ${({ model }) => (model === 'outlined' ? 'transparent' : colors.white)} !important;
  color: ${({ model }) => (model === 'outlined' ? colors.white : colors.black)} !important;
  border: ${({ model }) => (model === 'outlined' ? `0.063rem solid ${colors.white}` : 'none')} !important;
  margin: ${({ margin }) => margin ?? '0'} !important;
  box-shadow: none !important;

  font-weight: 600;
  font-size: 1.1rem;

  border-radius: 1rem !important;

  .icon {
    font-size: 1rem !important;
    color: ${colors.black} !important;
  }
`;
