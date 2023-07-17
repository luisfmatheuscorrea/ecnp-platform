// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';
import { HeaderContainerProps } from './types';
import { Avatar as AvatarMUI } from '@mui/material';
import colors from '../../assets/styles/colors';

export const Container = styled.div<HeaderContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  padding: 3rem;
`;

export const Avatar = styled(AvatarMUI)`
  width: 3.5rem !important;
  height: 3.5rem !important;

  color: ${colors.black} !important;
  background-color: ${colors.white} !important;

  border-radius: 1rem !important;
`;
