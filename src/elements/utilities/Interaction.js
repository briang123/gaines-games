import { css } from 'styled-components';

export const hover = ({
  bgColor = null,
  color = null,
  styles = [],
} = {}) => css`
  &:hover{
    cursor: pointer;
    ${bgColor && `background-color: ${bgColor};`};
    ${color && `color: ${color};`};
    ${styles.forEach((style)=> style)};
  };
`;

export const boxTransition = css`
  transition: 0.3s ease box-shadow; 
`;

export const textTransition = css`
  transition: 0.3s ease text-shadow; 
`;