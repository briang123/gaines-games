import { useEffect, useState, useCallback, useRef } from 'react'

export const useGameClick = ({ initialValue, storageKey }) => {
  const ref = useRef();
  const [value, setValue] = useState(initialValue);

  const resetValues = (value) => {
    window.localStorage.removeItem(storageKey);
    setValue(value);
    ref.current && ref.current.focus();
  };

  const updateValues = () => {
    setValue(value)
    window.localStorage.setItem(storageKey, value);
  };



  const formattedScore = clickerScore.getFormattedScore(score);
  const formattedClicks = clickerScore.getFormattedClicks(clicks);

}

export default useScoring;
