import React from 'react'
import styled, { css } from 'styled-components';
import { boxShadow } from '../../elements/utilities/Elevation';
import { absolute, dim } from '../../elements/utilities/Position';
export const Waffle = () => {
  return (
    <Wrapper>
      <Square />
      {/* <Square />
      <Square />
      <Square />
      <Square /> */}
    </Wrapper>
  )
}

export default Waffle;


const waffleColor = 'hsl(33,60%,51%)';
export const Wrapper = styled.div`
  position: relative;
  background-color: ${waffleColor};
  ${dim({w: '300px', h: '300px'})};
  border-radius: 50%;
  ${boxShadow[2]};
`;


const squareColor = 'hsla(33,60%,51%,.4)';

export const Square = styled.div`
  ${absolute({ x: '60', y: '60'})};
  ${dim({w: '40px', h: '40px' })};
  background-color: ${squareColor};
  transform: rotate(45deg);
`;
