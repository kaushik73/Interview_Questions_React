import { useState } from "react";
import withHRAfter from "../HOC/withHRAfter";
const Counter = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount((count) => count + 1);
  };
  const decreaseCount = () => {
    setCount((count) => count - 1);
  };
  return (
    <>
      <div>Count : {count}</div>
      <button onClick={increaseCount}>Increment</button>
      <button onClick={decreaseCount}>decrement</button>
    </>
  );
};

export const WithHRCounter = withHRAfter(Counter);
