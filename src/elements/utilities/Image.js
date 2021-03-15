import { css } from 'styled-components';

export const bgImage = ({ image }) => css`
    background-image: url('${image}');
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
  `;