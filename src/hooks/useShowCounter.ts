import { useState } from "react";

export const useShowCounter = (
  initialValue: boolean = false
): [boolean, () => void] => {
  const [showCounter, setShowCounter] = useState(initialValue);

  const handleButtonClick = () => {
    setShowCounter((prev) => !prev);
  };

  return [showCounter, handleButtonClick];
};
