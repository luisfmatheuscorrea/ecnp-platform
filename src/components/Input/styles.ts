// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';
import { InputProps } from './types';
import colors from '../../assets/styles/colors';

export const InputContainer = styled.div<InputProps>`
  width: 100%;
  height: 4.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  margin: ${({ margin }) => margin ?? '0'};

  font-weight: 600;
  font-size: 1.2rem;

  position: relative;

  input:not([value='']) ~ label,
  input:focus ~ label {
    font-size: 0.9rem;
    bottom: 3rem;
  }

  input[value=''] ~ label {
    font-size: 1.2rem;
    bottom: 0.9rem;
  }

  & label {
    position: absolute;
    bottom: 0.9rem;

    transition: ease-in-out 400ms;
  }

  & input {
    width: 100%;
    height: 3.2rem;

    background-color: transparent;

    border: none;
    border-bottom: 0.063rem solid ${colors.grey};

    font-weight: 500;
    font-size: 1.2rem;
  }
`;
