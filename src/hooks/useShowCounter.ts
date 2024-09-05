import { useState } from "react";

// returnしているので、返り値の型定義をしてあげる
export const useShowCounter = ():[boolean, ()=> void] => {
  const [showCounter, setShowCounter] = useState(false);

  const handleShowCounter = () => setShowCounter((prev) => !prev);

  return [showCounter, handleShowCounter];
};
