import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { MotionButton, Heading1 } from '../../elements';

import {
  above,
  absolute,
  below,
  fixed,
  dim,
  flex,
  hover,
  textShadow,
} from '../../elements/utilities';

export const Layout = styled.div`
${({ bgColor }) => css`
  ${flex()};
  ${dim({w: '100vw', h: '100vh'})};
  background-color: ${bgColor};
  * {
    box-sizing: border-box;
  }
`}; 
`;

export const Wrapper = styled.div`
  ${flex({ dir: 'column' })}
`;

export const ResetButton = styled.button`
  ${({ bgColor, color }) => css`
    ${dim({ w: '100px', h: '30px' })};
    color: ${color};
    background-color: ${bgColor};
    font-size: 1rem;
    font-weight: bold;
    border: none;
    outline: none;
    ${absolute()};
    ${hover({ bgColor: color, color: bgColor })};
  `};
`;

export const ColorButton = styled(ResetButton)`
  ${dim({ w: '125px' })};
  ${absolute({ x: '100px' })};
`;

export const ColorPickerContainer = styled.div`
  ${absolute({ x: '70px', y: '40px' })};
`;

export const ClickAmount = styled.div`
  ${({ color }) => css`
    ${dim({ minW: '400px', minH: '75px' })};
    color: ${color};
    border-left: solid 8px ${color};
    border-bottom: solid 3px ${color};
    padding: 10px 20px;
    font-weight: bold;
    ${absolute({ xProp: 'right' })}
    ${textShadow(color)}
  `};
`;

export const IncrementValue = styled.div`
  ${({ color }) => css`
    ${dim({ minW: '400px', minH: '75px' })};
    color: ${color};
    border-left: solid 8px ${color};
    border-bottom: solid 3px ${color};
    padding: 10px 20px;
    font-weight: bold;
    ${absolute({ y: '75px', xProp: 'right' })}
    ${textShadow(color)}
  `};
`;

export const ScoreContainer = styled(Heading1)``;

export const Score = styled(motion.div)`
  ${({ bgColor, color, boxShadow }) => css`
    ${flex()};
    ${dim({ w: '300px', h: '300px' })};
    background-color: ${bgColor};
    color: ${color};
    border: solid 10px ${color};
    border-radius: 50%;
    font-size: 1em;
    padding: 0px;
    ${boxShadow};
    ${above.small`
      ${dim({ w: '400px', h: '400px' })};
    `};
    ${above.xl`
      ${dim({ w: '600px', h: '600px' })};
    `};
  `};
`;

export const Text = styled(motion.div)`
  ${({ color }) => css`
    ${flex()};
    margin-top: -160px;
    z-index: 100;
    color: ${color};
    ${textShadow(color)};
    font-size: .8em;
    ${above.small`
      margin-top: -210px;
    `};
    ${above.med`
      margin-top: -225px;
    `};
     ${above.large`
      margin-top: -230px;
    `};
     ${above.xl`
      font-size: min(5vw, 1em);
      margin-top: -350px;
    `};
  `};
`;

export const TokenButton = styled(MotionButton)`
  ${({ colors: { color, bgColor, hoverBgColor }, boxShadow }) => css`
    margin-top: 50px;
    ${dim({ w: '100vw', h: '85px' })}
    ${below.small`
      ${fixed({y: '10px', yProp: 'bottom'})};
    `}
    font-size: 1.5rem;
    color: ${color};
    background-color: ${bgColor};
    font-weight: bold;
    border: none;
    border-radius: 10px;
    outline: none;
    z-index: 100;
    ${boxShadow};
    ${hover({ bgColor: hoverBgColor })};
    ${above.small`
      ${dim({ w: '350px', h: '85px' })};
      margin-top: 50px;
      font-size: 2.5rem;
    `};
     ${above.xl`
      ${dim({ w: '450px', h: '125px' })};
      margin-top: 150px;
    `};
  `};
`;
