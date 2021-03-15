import styled, { css } from 'styled-components/macro';
import { DEFAULT_GRID_COLS } from './../common/constants';

export const Grid = styled.div`
  ${({ cols }) => css`
    display: block;
    @media only screen and (min-width: 500px) {
      display: grid;
      --gridCols: ${cols || DEFAULT_GRID_COLS};
      grid-template-columns: var(--gridCols);
      grid-template-columns: repeat(var(--gridCols), 1fr);
    }
  `};
`;