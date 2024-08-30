import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClickSum = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleClickMin = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <>
      <h1>Counter</h1>
      <div>{count}</div>
      <button onClick={handleClickSum}>+</button>
      <button onClick={handleClickMin}>-</button>
    </>
  );
};
