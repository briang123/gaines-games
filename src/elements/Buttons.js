import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { boxShadow, boxTransition, motionButton, hover } from './utilities';

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
  background: ${bgColor || 'none'};
  ${boxTransition}
  ${boxShadow[1]};
  ${hover({styles: [boxShadow[2]]})};
  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const Button = styled.button`
  ${applyStyleModifiers(BUTTON_MODIFIERS)};
  ${buttonCss}
`;

export const MotionButton = styled(motionButton)`
  ${buttonCss};
`;