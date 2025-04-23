import { useState } from 'react';

export const useCounter = (initialCounter: number) => {
  const [counter, setCounter] = useState(initialCounter);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  const reset = () => {
    setCounter(initialCounter);
  };

  return { counter, increment, decrement, reset, setCounter };
};
