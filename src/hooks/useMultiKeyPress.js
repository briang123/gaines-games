import { useState, useEffect } from "react";

export const useMultiKeyPress = () => {
  const [keysPressed, setKeyPressed] = useState(new Set([]));

  function downHandler({ key }) {
    setKeyPressed(keysPressed.add(key));
  }

  const upHandler = ({ key }) => {
    keysPressed.delete(key);
    setKeyPressed(keysPressed);
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);

  return keysPressed;
}

export default useMultiKeyPress;