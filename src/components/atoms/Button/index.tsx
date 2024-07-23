import { useRouter } from "next/router";
import { FC } from "react";
import styles from "./index.module.scss"



export const Button: FC<{buttonText:string}> = ({buttonText}) => {

  return (
    <>
      <button className={styles.button1}>{buttonText}</button>
    </>
  );
};
