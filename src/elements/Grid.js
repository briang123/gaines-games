import styled, { css } from 'styled-components/macro';
import { DEFAULT_GRID_COLS } from './../common/constants';
import { above } from './utilities';

export const Grid = styled.div`
  ${({ cols }) => css`
    display: block;
    ${above.small`
      display: grid;
      --gridCols: ${cols || DEFAULT_GRID_COLS};
      grid-template-columns: var(--gridCols);
      grid-template-columns: repeat(var(--gridCols), 1fr);
    `}
  `};
`;