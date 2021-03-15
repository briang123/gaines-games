import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { motion } from 'framer-motion';
// import { teal, elevation } from './utilities';
import { boxShadow } from './utilities/Elevation';

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: 1rem;
    padding: 3px 10px;
  `,

  // cancel: ({ theme }) => `
  //   background: ${theme.colors.secondary}; 
  // `
};

export const buttonCss = ({ bgColor }) => css`
  padding: 5px 20px;
  border-radius: 4px;
  color: white;
  font-size: 2rem;
  border: none;
  transition: 0.3s ease box-shadow; 
  background: ${bgColor || 'none'};
  ${boxShadow[1]};
  &:hover {
    ${boxShadow[2]};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const Button = styled.button`
  ${applyStyleModifiers(BUTTON_MODIFIERS)};
  ${buttonCss}
`;

export const CancelButton = styled(Button)`
  background: tomato;
`;

export const MotionButton = styled(motion.button)`
  ${buttonCss};
`;