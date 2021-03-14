import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

export const Clicker = ({ increment = 1, savedValue = window.localStorage.getItem("clicker_value") || 0}) => {

const [value, setValue] = useState(savedValue);
  const clickMe = (e) => {
    e.preventDefault();
    setValue((prevState) => prevState + increment);
  }

  useEffect(() => {
    window.localStorage.setItem("clicker_value", value)
  }, [value])
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={clickMe}>Click Me</button>
    </div>
  )
}

const StyledClicker = styled(Clicker)`
  h1 {
    color: orangered;
  }
  button {
    width: 500px;
    height: 100px;
    color: white;
    background-color: orangered;
    font-size: 2rem;
    border:none;
    border-radius: 10px;

  }
`;

export default StyledClicker;