import React from "react";
import styles from "./Title.module.scss";

export const Title = (props) => {
  const { text = "" } = props;

  return <h3 className={styles.title}>{text}</h3>;
};
