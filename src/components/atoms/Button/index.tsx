import { useRouter } from "next/router";
import { FC } from "react";
import styles from "./index.module.scss";

export const Button: FC<{ buttonText: string; onClick: () => void }> = ({
  buttonText, onClick
}) => {
  return (
    <>
      <button className={styles.button1} onClick={onClick}>{buttonText}</button>
    </>
  );
};
