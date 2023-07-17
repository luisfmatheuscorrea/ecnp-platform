// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  background-color: ${colors.white};
  padding: 2rem 1.5rem;
  padding-right: calc(5vw);

  font-weight: 600;
  font-size: 1.1rem;
`;

export const MenuItemsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
