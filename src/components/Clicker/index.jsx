import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export const Clicker = ({
  increment = 1,
  savedValue = window.localStorage.getItem('clicker_value') || 0,
}) => {
  const [value, setValue] = useState(Number(savedValue));
  const clickMe = (e) => {
    e.preventDefault();
    setValue((prevState) => prevState + increment);
  };

  useEffect(() => {
    window.localStorage.setItem('clicker_value', value);
  }, [value]);

  return (
    <Wrapper>
      <h1>{value}</h1>
      <button onClick={clickMe}>Click Me</button>
    </Wrapper>
  );
};


const Wrapper = styled.div`
  h1 {
    color: #008cff;
  }
  button {
    width: 300px;
    height: 100px;
    color: white;
    background-color: #008cff;
    font-size: 2rem;
    border: none;
    border-radius: 10px;
    outline: none;
    &:hover{
      cursor: pointer;
      background-color: #0099ff;
    }
  }
`;

export default Clicker;