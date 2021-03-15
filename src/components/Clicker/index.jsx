import React, { useEffect, useState, useRef, useCallback } from 'react';
import useKeyPress from './../../hooks/useKeyPress';
import {
  ClickAmount,
  IncrementValue,
  Layout,
  ResetButton,
  Score,
  ScoreContainer,
  Text,
  TokenButton,
  Wrapper,
} from './Styles';

export const Clicker = ({
  initialScore = clickerScore.getValue(clickerScore.scoreSaveKey),
  initialClicks = clickerScore.getValue(clickerScore.clickSaveKey),
}) => {
  const tokenBtnRef = useRef();
  const [score, setScore] = useState(Number(initialScore));
  const [clicks, setClicks] = useState(Number(initialClicks));
  const [isAnimating, setIsAnimating] = useState(false);

  const enterPress = useKeyPress(keyboard.enterText);
  const spacePress = useKeyPress(keyboard.spaceBarText);

  const {
    animationVariants: av,
    buttonText,
    clearPreviousGames,
    clickSaveKey,
    delayInMS,
    getFormattedClicks,
    getFormattedScore,
    getNewClicks,
    getNewScore,
    resetValue,
    saveValue,
    scoreSaveKey,
  } = clickerScore;

  const {
    primaryColor,
    secondaryColor,
    black: color,
    boxShadow,
  } = clickerStyle;

  const resetValues = () => {
    resetValue([clickSaveKey, scoreSaveKey]);
    setClicks(0);
    setScore(0);
    tokenBtnRef.current.focus();
  };

  const updateValues = useCallback(() => {
    const clickCount = getNewClicks(clicks);
    const newScore = getNewScore(score);

    setClicks(clickCount);
    setScore(newScore);

    saveValue(clickSaveKey, clickCount);
    saveValue(scoreSaveKey, newScore);
  }, [
    getNewClicks,
    clicks,
    getNewScore,
    score,
    saveValue,
    clickSaveKey,
    scoreSaveKey,
  ]);

  const updateAndAnimateValues = useCallback(() => {
      setIsAnimating(true);
      updateValues();
  }, [setIsAnimating, updateValues])

  const onClick = (e) => {
    e.preventDefault();
    updateAndAnimateValues();
  };

  useEffect(() => {
    if (enterPress || spacePress) {
      setTimeout(() => {
        updateAndAnimateValues();
      }, delayInMS);
    }
  }, [enterPress, spacePress, updateAndAnimateValues, delayInMS]);

  useEffect(() => {
    clearPreviousGames();
  }, [clearPreviousGames]);

  const formattedScore = getFormattedScore(score);
  const formattedClicks = getFormattedClicks(clicks);
  const incValue = clickerScore.getIncrementValue(score);
  const formattedIncrements = getFormattedScore(incValue);

  return (
    <Layout>
    <Wrapper>
      <ResetButton onClick={resetValues} color={primaryColor} bgColor={color}>
        Reset
      </ResetButton>
      <ClickAmount color={primaryColor}>{formattedClicks}</ClickAmount>
      <IncrementValue color={primaryColor}>{formattedIncrements}</IncrementValue>
      <ScoreContainer>
        <Score
          key={`ScoreContainer_${formattedScore}`}
          initial="initial"
          animate={isAnimating ? 'animate' : 'initial'}
          exit="initial"
          variants={av.score}
          color={primaryColor}
          bgColor={color}
          boxShadow={boxShadow}
        />
        <Text
          key={`ScoreValue_${formattedScore}`}
          initial="initial"
          animate={isAnimating ? 'textAnimate' : 'initial'}
          exit="initial"
          variants={av.score}
          color={primaryColor}
        >
          {formattedScore}
        </Text>
      </ScoreContainer>
      <TokenButton
        ref={tokenBtnRef}
        key={`TokenButton_${formattedScore}`}
        whileHover="hover"
        whileTap="initial"
        animate="initial"
        exit="initial"
        variants={av.button}
        onClick={onClick}
        colors={{ color, hoverBgColor: secondaryColor, bgColor: primaryColor }}
        boxShadow={boxShadow}
      >
        {buttonText}
      </TokenButton>
    </Wrapper>
    </Layout>
  );
};

export default Clicker;


const keyboard = {
  enterText: 'Enter',
  spaceBarText: ' ',
};

const clickerScore = {
  unit: 'GNZ',
  symbol: '🤑',
  places: 3,
  delayInMS: 400,
  placesToFormatWithCommas: 4,
  scoreSaveKey: 'clicker_score',
  clickSaveKey: 'clicker_clicks',
  buttonText: 'GNZ T🤑KNS',
  getFormattedValue: (value) => new Intl.NumberFormat().format(value),
  getIncrementValue: (value) => Math.floor(value / 100) || 1,
  getFormattedScore: (value) => {
    const expNum = Number(value).toExponential(3);
    const parts = expNum.toString().split('e+');
    const [num, digits] = parts;
    if (digits < 4)
      return `${clickerScore.symbol}${clickerScore.getFormattedValue(value)} ${
        clickerScore.unit
      }`;
    return `${clickerScore.symbol}${num} ${clickerScore.unit}-${digits}`;
  },
  getNewClicks: (value) => value + 1,
  getNewScore: (score) => {
    const incValue = clickerScore.getIncrementValue(score)
    return score + incValue;
  },
  getFormattedClicks: (value) =>
    `👉 ${clickerScore.getFormattedValue(value)}`,
  resetValue: (keys = []) => {
    keys.map((key) => window.localStorage.removeItem(key));
    clickerScore.incrementValue = 1;
  },
  saveValue: (key, value) => window.localStorage.setItem(key, value),
  getValue: (key) => window.localStorage.getItem(key) || 0,
  clearPreviousGames: () => {
    [].map((key) => window.localStorage.removeItem(key));
  },
  animationVariants: {
    score: {
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
        scale: [1, 1.5, 1.5, 1, 1],
      },
    },
    button: {
      initial: { scale: 0.9 },
      hover: { scale: 1.1 },
    },
  },
};

const clickerStyle = {
  primaryColor: '#ffd900',
  secondaryColor: '#ffe139',
  black: '#040524',
  boxShadow: `box-shadow: 1px 1px 2px #040524, 0 0 250px blue, 0 0 5px darkblue;`,
};