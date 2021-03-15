import { css } from 'styled-components';

export const radialBgGradient = ({ color1, color2 }) => css`
  background: ${color1};
  background: -webkit-radial-gradient(top left, ${color1}, ${color2});
  background: -moz-radial-gradient(top left, ${color1}, ${color2});
  background: radial-gradient(to bottom right, ${color1}, ${color2});
`;