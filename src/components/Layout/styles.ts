// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  width: 100vw;
  height: 100vh;
`;

export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  position: absolute;
  top: 0;
  right: 0;

  width: 80vw;
  height: 100vh;

  background-color: ${colors.bg};

  border-radius: 3rem 0 0 3rem;
  box-shadow: inset 1.4px 0px 1.9px rgba(0, 0, 0, 0.008), inset 3.3px 0px 4.2px rgba(0, 0, 0, 0.012),
    inset 6.3px 0px 7.5px rgba(0, 0, 0, 0.015), inset 11.2px 0px 13.9px rgba(0, 0, 0, 0.018),
    inset 20.9px 0px 30.1px rgba(0, 0, 0, 0.022), inset 50px 0px 80px rgba(0, 0, 0, 0.03);

  position: absolute;
  right: 0;
  top: 0;

  z-index: 999;
`;
