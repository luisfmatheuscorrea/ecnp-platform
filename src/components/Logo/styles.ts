// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';
import { LogoContainerProps } from './types';

export const Container = styled.div<LogoContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: 100%;

  font-family: 'Raleway', sans-serif;
  font-weight: 800;
  font-size: ${({ fontSize }) => fontSize ?? '1.75rem'};
  letter-spacing: -0.07rem;

  margin: ${({ margin }) => margin ?? '0'};
`;
