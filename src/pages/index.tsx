import { Button } from "@/components/atoms/Button";
import { TopTitle } from "@/components/atoms/TopTitle";
import { Counter } from "@/components/molecules/Counter";
import { useShowCounter } from "@/hooks/useShowCounter";
import classNames from "classnames";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useShowEffect } from "@/hooks/useShowEffect";

const Home: NextPage = () => {
  const [showCounter, handleShowCounter] = useShowCounter();
  console.log(`showCounterの状態は${showCounter}`);
  
  const changeStyles = useShowEffect(showCounter);
  console.log(`showCounterの状態は${showCounter}`);

  return (
    <>
      <TopTitle />
      <Button onClick={handleShowCounter} buttonText="カウンター表示" />
      <div
        className={classNames(styles.teststyle, {
          [styles.test]: changeStyles,
        })}
      >
        <h1>useEffect テスト用</h1>
      </div>
      {showCounter && <Counter />}
    </>
  );
};

export default Home;

// cn()が関数
// {[styles.xxx]: function}がclassnamesオブジェクト構文、　キーにクラス名、値がクラスを適用するかどうかの条件
