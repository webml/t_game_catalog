import React from "react";
import styles from "./Cover.module.scss";
import { Link } from "react-router-dom";

export const Cover = ({ alt, img }) => {
  return (
    <Link to={img}>
      <img
        className={styles.img}
        src={`https://cdn2.softswiss.net/i/s2/${img}.png`}
        alt={alt}
      />
    </Link>
  );
};
