import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import useKeyPress from './../../hooks/useKeyPress';
import styled from 'styled-components';
import { textShadow } from './../../elements/utilities/Elevation';

const keyboard = {
  enterText: 'Enter',
  spaceBarText: ' ',
}

const clickerScore = {
  unit: 'GNZ',
  places: 3,
  placesToFormatWithCommas: 4,
  getFormattedValue: (value) => new Intl.NumberFormat().format(value),
  getIncrementValue: (value) => Math.floor(value / 100) || 1,
  scoreSaveKey: 'clicker_score',
  clickSaveKey: 'clicker_clicks',
  buttonText: 'GNZ T🤑KNS',
}

const clickerStyle = {
  primaryColor: '#ffd900',
  secondaryColor: '#ffe139',
  black: '#000',
  boxShadow: `box-shadow: 1px 1px 2px black, 0 0 250px blue, 0 0 5px darkblue;`,  
}


// WHAT WE WANT TO ADD TO THE SCORE AFTER CLICKING
const getIncrementValue = (score) => Math.floor(score / 100) || 1;

// FORMATTING THE COMMAS IN THE VALUE
const getFormattedValue = (number) => new Intl.NumberFormat().format(number);

// RANDOM NUMBER GENERATOR WITHIN RANGE
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// FORMAT THE SCORE/TOKEN AMOUNT
const getFormattedScore = (number, unit) => {
  const expNum = Number(number).toExponential(3);
  const parts = expNum.toString().split('e+');
  const [ num, digits ] = parts;
  if (digits < 4) return getFormattedValue(number);
  return `${num} ${unit}-${digits}`;
}

// ANIMATION SEQUENCES
const clickerVariants = {
  initial: {
    scale: 1,
    opacity: 1,
  },
  animate: {
    scale: [1, 1.1, 1.1, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    opacity: [1, 0.5, 0.5, 0.5, 1],
    borderRadius: ['50%', '50%', '20%', '20%', '50%'],
  },
  textAnimate: {
    scale: [1, 2, 2, 1, 1],
  }
};

const resetClickerValues = () => {
  window.localStorage.removeItem(clickerScore.scoreSaveKey);
  window.localStorage.removeItem(clickerScore.clickSaveKey);
}

const saveClickerValues = (score, clicks) => {
  window.localStorage.setItem(clickerScore.scoreSaveKey, score);
  window.localStorage.setItem(clickerScore.clickSaveKey, clicks);
}

const clearPreviousGames = () => {
  [].map(key => window.localStorage.removeItem(key))
}

const getClickerValue = (key) => window.localStorage.getItem(key) || 0;

export const Clicker = ({
  initialScore = getClickerValue(clickerScore.scoreSaveKey),
  initialClicks = getClickerValue(clickerScore.clickSaveKey),
}) => {
  const clickRef = useRef();
  const [score, setScore] = useState(Number(initialScore));
  const [clicks, setClicks] = useState(Number(initialClicks));
  const [isAnimating, setIsAnimating] = useState(false);

  const enterPress = useKeyPress(keyboard.enterText);
  const spacePress = useKeyPress(keyboard.spaceBarText);

  const resetValues = () => {
    resetClickerValues();
    setClicks(0);
    setScore(0);
    clickRef.current.focus();
  };

  const updateScore = () => {
    setIsAnimating(true);

    let clickCount = clicks + 1;
    const newScore = score + getIncrementValue(score);

    setClicks(clickCount);
    setScore(newScore);

    saveClickerValues(newScore, clickCount);
  };

  const onClick = (e) => {
    e.preventDefault();
    updateScore();
  }

  useEffect(() => {
    if (enterPress || spacePress) {
      updateScore();
    }
  }, [enterPress, spacePress]);

  useEffect(() => {
    clearPreviousGames();
  }, []);

  const formattedScore = `$${getFormattedScore(score, clickerScore.unit)}`;
  const formattedClicks = `Clicks: ${getFormattedValue(clicks)}`;


  return (
    <Wrapper>
      <ResetButton onClick={resetValues}>Reset</ResetButton>
      <Clicks>{formattedClicks}</Clicks>
      <h1>
        <Score
          key={formattedScore}
          initial="initial"
          animate={isAnimating ? 'animate' : 'initial'}
          exit="initial"
          variants={clickerVariants}
        ></Score>
        <Text
          key={random(11, 20)}
          initial="initial"
          animate={isAnimating ? 'textAnimate' : 'initial'}
          exit="initial"
          variants={clickerVariants}
        >
          {formattedScore}
        </Text>
      </h1>
      <MotionButton
        ref={clickRef}
        key={random(1, 10)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ scale: 0.9 }}
        onClick={onClick}
      >
        {clickerScore.buttonText}
      </MotionButton>
    </Wrapper>
  );
};


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const Text = styled(motion.div)`
  margin-top: -300px;
  z-index: 100;
  font-size: 1em;
  color: ${clickerStyle.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  ${textShadow(clickerStyle.primaryColor)};
`;

const Score = styled(motion.div)`
  background-color: ${clickerStyle.black};
  color: ${clickerStyle.primaryColor};
  border: solid 10px ${clickerStyle.primaryColor};
  border-radius: 50%;
  height: 500px;
  width: 500px;
  font-size: 1em;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${clickerStyle.boxShadow};
`;

const MotionButton = styled(motion.button)`
  margin-top: 150px;
  width: 450px;
  height: 135px;
  color: ${clickerStyle.black};
  background-color: ${clickerStyle.primaryColor};
  font-size: 2.5rem;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  outline: none;
  z-index: 100;
  ${clickerStyle.boxShadow};
  &:hover {
    cursor: pointer;
    border: 10px solid ${clickerStyle.primaryColor};
    background-color: ${clickerStyle.secondaryColor};
  }
`;

const ResetButton = styled.button`
  color: ${clickerStyle.primaryColor};
  background-color: ${clickerStyle.black};
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
`;

const Clicks = styled.div`
  color: ${clickerStyle.primaryColor};
  border-left: solid 8px ${clickerStyle.primaryColor};
  border-bottom: solid 3px ${clickerStyle.primaryColor};
  padding: 10px;
  min-width: 200px;
  font-weight: bold;
  position: absolute;
  top: 0;
  right: 0;
  ${textShadow(clickerStyle.primaryColor)}
`;

export default Clicker;
