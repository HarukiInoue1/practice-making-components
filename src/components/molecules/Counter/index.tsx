import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const clickSum = () => setCount((prev) => prev + 1);
  const clickMin = () => setCount((prev) => prev - 1);

  return (
    <>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={clickSum}>+</button>
      <button onClick={clickMin}>-</button>
    </>
  );
};
