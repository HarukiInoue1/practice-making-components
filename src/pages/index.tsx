import { NextPage } from "next";
import styles from "./index.module.scss"
import { TopTitle } from "@/components/atoms/TopTitle";
import { Button } from "@/components/atoms/Button";

const Home: NextPage = () => {
  return (
    <>
      <TopTitle />
      <Button buttonText="ログイン" />
    </>
  );
}

export default Home;