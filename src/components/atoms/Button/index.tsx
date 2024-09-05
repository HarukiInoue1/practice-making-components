import { FC } from "react";
import styles from "./index.module.scss";

type Props = {
  buttonText: string;
  onClick: () => void;
};

export const Button: FC<Props> = ({buttonText, onClick}) => {
  return (
    <>
      <button className={styles.button1} onClick={onClick}>{buttonText}</button>
    </>
  );
};
