import { useEffect, useState } from "react";

export const useShowEffect = (showCounter:boolean):boolean => {
  const [changeStyles, setChangeStyles] = useState(false);
  useEffect(() => setChangeStyles((prev) => !prev), [showCounter]);

  return changeStyles;
}