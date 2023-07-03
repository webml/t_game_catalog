import React from "react";
import styles from "./Card.module.scss";
import { Cover } from "./Cover/";
import { Title } from "./Title/";

export const Card = ({ game, imgPath, updateState }) => {
  return (
    <div className={styles.card}>
      <Cover img={imgPath} alt={game.title} />
      <div className={styles.card__info}>
        <Title text={game.title} />
      </div>
    </div>
  );
};
