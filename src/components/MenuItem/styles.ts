// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MenuItemContainerProps } from './types';
import colors from '../../assets/styles/colors';

export const Container = styled(motion.div)<MenuItemContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  position: relative;

  width: 100%;
  height: 4rem;

  color: ${({ active }) => (active ? colors.primary : colors.greyBlack)};
  font-weight: 600;
  font-size: 1rem;

  transition: ease-in-out 400ms;
  cursor: pointer;

  .icon {
    font-size: 1.8rem;
    margin-right: 1rem;

    transition: ease-in-out 400ms;
  }

  &::after {
    content: '';
    width: 0.3rem;
    height: 100%;
    border-radius: 100px;
    position: absolute;
    right: 0;
    top: 0;
    background-color: ${({ active }) => (active ? colors.primary : 'transparent')};
  }

  &:hover {
    color: ${({ active }) => (active ? colors.primaryTransp : colors.grey)};

    .icon {
      margin-right: 1.2rem;
    }
  }

  & + & {
    margin-top: 1rem;
  }
`;
