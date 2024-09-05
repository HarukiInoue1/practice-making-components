import { Button } from "@/components/atoms/Button";
import { TopTitle } from "@/components/atoms/TopTitle";
import { NextPage } from "next";


const Home: NextPage = () => {
  return (
    <>
      <TopTitle />
      <Button />

      <div>
        <h1>useEffect テスト用</h1>
      </div>
    </>
  );
};

export default Home;

// cn()が関数
// {[styles.xxx]: function}がclassnamesオブジェクト構文、　キーにクラス名、値がクラスを適用するかどうかの条件
