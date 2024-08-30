import { NextPage } from "next";
import styles from "./index.module.scss";
import { TopTitle } from "@/components/atoms/TopTitle";
import { Button } from "@/components/atoms/Button";
import { Counter } from "@/components/molecules/Counter";
import { useEffect, useState } from "react";
import cn from "classnames";
import { useShowCounter } from "@/hooks/useShowCounter";

const Home: NextPage = () => {
  const [changeBgc, setChangeBgc] = useState(false);

  const [showCounter, handleButtonClick] = useShowCounter();

  useEffect(() => {
    setChangeBgc((prev) => !prev);
  }, [showCounter]);

  return (
    <>
      <TopTitle />
      <Button
        buttonText="カウントコンポーネントの呼び出し"
        onClick={handleButtonClick}
      />
      <div
        className={cn({
          [styles.test]: changeBgc,
        })}
      >
        test
      </div>
      {showCounter && <Counter />}
    </>
  );
};

export default Home;
