import { css } from 'styled-components';

export const boxShadows = [
  'box-shadow: inset 0 7px 9px -7px rgba(0,0,0, 0.7)',
  'box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24)',
  'box-shadow: 0 3px 6px rgba(0,0,0, 0.16), 0 3px 6px rgba(0,0,0, 0.23)'
];

export const textShadow = ({color}) => css`
  text-shadow: 1px 1px 2px ${color}, 0 0 25px ${color};
`;