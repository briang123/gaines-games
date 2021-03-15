import { css } from 'styled-components';

export const fixed = ({
  x = 0,
  y = 0,
  yProp = 'top',
  xProp = 'left'
} = {}) => css`
  position: fixed;
  ${yProp}: ${y};
  ${xProp}: ${x};
`;

export const absolute = ({
  x = 0,
  y = 0,
  yProp = 'top',
  xProp = 'left'
} = {}) => css`
  position: absolute;
  ${yProp}: ${y};
  ${xProp}: ${x};
`;

export const dim = ({
  w = 0,
  h = 0,
  minW = 0,
  minH = 0,
  maxW = 0,
  maxH = 0,
} = {}) => css`
  ${w !== 0 && `width: ${w}`};
  ${h !== 0 && `height: ${h}`};
  ${minW !== 0 && `min-width: ${minW}`};
  ${minH !== 0 && `min-height: ${minH}`};
  ${maxW !== 0 && `max-width: ${maxW}`};
  ${maxH !== 0 && `max-height: ${maxH}`};
`;

export const flex = ({ 
  dir = 'row',
  vAlign = 'center',
  hAlign = 'center',
} = {}) => css`
  display: flex;
  ${dir !== 'row' && `flex-direction: ${dir}`};
  align-items: ${dir === 'row' ? vAlign : hAlign };
  justify-content: ${dir === 'row' ? hAlign: vAlign};
`;

export const hover = ({
  bgColor = null,
  color = null,
} = {}) => css`
  &:hover{
    cursor: pointer;
    ${bgColor && `background-color: ${bgColor};`};
    ${color && `color: ${color};`};
  }
`;