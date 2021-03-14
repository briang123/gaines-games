import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useKeyPress from './../../hooks/useKeyPress';
import styled from 'styled-components';

const getIncrementValue = (score) => Math.floor(score / 100) || 1;
const getFormattedValue = (number) => new Intl.NumberFormat().format(number);
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

//https://en.wikipedia.org/wiki/Names_of_large_numbers
// const NUMBER_NAMES = [
//   "Thousand",
//   "Million",
//   "Billion",
//   "Trillion",
//   "Quadrillion",
//   "Quintillion",
//   "Sextillion",
//   "Septillion",
//   "Octillion",
//   "Nonillion",
//   "Decillion",
//   "Undecillion",
//   "Duodecillion",
//   "Tredecillion",
//   "Quattuordecillion",
//   "Quindecillion",
//   "Sexdecillion",
//   "Septendecillion",
//   "Octodecillion",
//   "Novemdecillion",
//   "Vigintillion",
// ];

export const Clicker = ({
  initialScore = window.localStorage.getItem('clicker_score') || 0,
  initialClicks = window.localStorage.getItem('clicker_clicks') || 0,
}) => {
  const [score, setScore] = useState(Number(initialScore)); 
  const [clicks, setClicks] = useState(Number(initialClicks))
  const [isAnimating, setIsAnimating] = useState(false);
 
  const enterPress = useKeyPress('Enter');
  const spacePress = useKeyPress(' ');

  const handleReset = () => {
    window.localStorage.removeItem('clicker_score');
    window.localStorage.removeItem('clicker_clicks');
    setClicks(0);
    setScore(0);
  };

  const onClick = () => {
    setIsAnimating(true);
    setClicks((prevState) => prevState + 1);
    setScore((prevState) => prevState + getIncrementValue(prevState));
  };

  useEffect(() => {
    if (enterPress || spacePress) {
      setIsAnimating(true);
      setClicks((prevState) => prevState + 1);
      setScore((prevState) => prevState + getIncrementValue(prevState));
    }
  }, [enterPress, spacePress]);

  useEffect(() => {
    window.localStorage.setItem('clicker_score', score);
    window.localStorage.setItem('clicker_clicks', clicks);
  }, [score, clicks]);

  useEffect(() => {
    window.localStorage.removeItem('clicker_value');
  }, [])

  const formattedScore = `$${getFormattedValue(score)}`;
  const formattedClicks = getFormattedValue(clicks);

  const variants = {
    initial: {
      scale: 1,
      opacity: 1,
    },
    animate: {
      scale: [1, 1.1, 1.1, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      opacity: [1, 0.5, 0.5, 0.5, 1],
      borderRadius: ['50%', '50%', '20%', '20%', '50%'],
      borderShadow: ['50%', '50%', '20%', '20%', '50%'],
    },
  };

  return (
    <Wrapper>
        <ResetButton onClick={handleReset}>Reset</ResetButton>
        <Clicks>Clicks: {formattedClicks}</Clicks>
        <h1>
  {/* <div>{score.toString().length}</div>
  <div>{Math.pow(10,6)}</div> */}
          <Score
            key={formattedScore}
            initial="initial"
            animate={isAnimating ? 'animate' : 'initial'}
            exit="initial"
            variants={variants}
          ></Score>
          <Text>{formattedScore}</Text>
        </h1>
        <MotionButton
          key={random(1,10)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ scale: .9 }}
          onClick={onClick}
        >
          GNZ T🤑KNS
        </MotionButton>
    </Wrapper>
  );
};

const textShadow = 'text-shadow: 1px 1px 2px gold, 0 0 25px gold;';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const Text = styled.div`
  margin-top: -300px;
  z-index: 2;
  font-size: 1em;
  color: gold;
  display: flex;
  justify-content: center;
  align-items: center;
  ${textShadow}
`;

const Score = styled(motion.div)`
  background-color: #000;
  color: gold;
  border: solid 10px gold;
  border-radius: 50%;
  height: 500px;
  width: 500px;
  font-size: 1em;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 2px black, 0 0 250px blue, 0 0 5px darkblue;
`;

const MotionButton = styled(motion.button)`
  margin-top: 150px;
  width: 450px;
  height: 135px;
  color: black;
  background-color: gold;
  font-size: 2.5rem;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  outline: none;
  z-index: 100;
  box-shadow: 1px 1px 2px black, 0 0 250px blue, 0 0 5px darkblue;
  &:hover {
    cursor: pointer;
    border: 10px solid gold;
    background-color: #ffe139;
  }
`;

const ResetButton = styled.button`
  color: gold;
  background-color: black;
  position: absolute;
  height: 30px;
  width: 100px;
  top:0;
  left: 0;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }

`;

const Clicks = styled.div`
  color: gold;
  border-left: solid 8px gold;
  border-bottom: solid 3px gold;
  padding: 10px;
  font-weight: bold;
  position: absolute;
  top:0;
  right: 0;
  ${textShadow}
`;


export default Clicker;
