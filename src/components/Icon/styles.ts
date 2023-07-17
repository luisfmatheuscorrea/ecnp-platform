// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';
import { ImageProps } from './types';

export const Image = styled.img<ImageProps>`
  width: ${({ size }) => size ?? '2rem'};
  height: ${({ size }) => size ?? '2rem'};
  object-fit: contain;

  margin: ${({ margin }) => margin ?? '0'};
`;
