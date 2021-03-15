import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { textShadow } from './../../elements/utilities/Elevation';
import { MotionButton } from '../../elements/Buttons';
import { above } from '../../elements/utilities/Breakpoints';

// TODO: Fix for responsiveness (variable sizing)
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const ResetButton = styled.button`
  ${({ bgColor, color }) => css`
    color: ${color};
    background-color: ${bgColor};
    position: absolute;
    height: 30px;
    width: 100px;
    top: 0;
    left: 0;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    outline: none;
    &:hover {
      cursor: pointer;
    }
  `};
`;

export const ClickAmount = styled.div`
  ${({ color }) => css`
    color: ${color};
    border-left: solid 8px ${color};
    border-bottom: solid 3px ${color};
    padding: 10px 20px;
    min-width: 250px;
    font-weight: bold;
    position: absolute;
    top: 0;
    right: 0;
    ${textShadow(color)}
  `};
`;

export const ScoreContainer = styled.h1``;

export const Score = styled(motion.div)`
  ${({ bgColor, color, boxShadow }) => css`
    background-color: ${bgColor};
    color: ${color};
    border: solid 10px ${color};
    border-radius: 50%;
    height: 300px;
    width: 300px;
    font-size: 1em;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${boxShadow};
    ${above.small`
    height: 600px;
    width: 600px;
  `};
  `};
`;

export const Text = styled(motion.div)`
  ${({ color }) => css`
    margin-top: -125px;
    z-index: 100;
    font-size: min(5vw, 1em);
    color: ${color};
    display: flex;
    justify-content: center;
    align-items: center;
    ${textShadow(color)};
    ${above.small`
    margin-top: -350px;
  `};
  `};
`;

export const TokenButton = styled(MotionButton)`
  ${({ colors: { color, bgColor, hoverBgColor }, boxShadow }) => css`
    margin-top: 50px;
    width: 300px;
    height: 85px;
    font-size: 1.5rem;
    color: ${color};
    background-color: ${bgColor};
    font-weight: bold;
    border: none;
    border-radius: 10px;
    outline: none;
    z-index: 100;
    ${boxShadow};
    &:hover {
      cursor: pointer;
      background-color: ${hoverBgColor};
    }
    ${above.small`
      margin-top: 150px;
      width: 450px;
      height: 135px;
      font-size: 2.5rem;
    `};
  `};
`;
