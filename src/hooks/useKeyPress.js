import { useEffect, useState } from 'react';

export const useKeyPress = (targetKey) => {
  const [keyPressed, setKeyPressed] = useState(false);

  const downHandler = ({ key }) => {
    console.log('down',key);
    if (key === targetKey) {
      setKeyPressed(true);
    }
  };

  const upHandler = ({ key }) => {
    console.log('up',key);
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);

  return keyPressed;
};

export default useKeyPress;
