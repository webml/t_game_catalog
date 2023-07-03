import styles from "./NotFound.module.scss";
import { HomeButton } from "../../components/HomeButton";

export const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <HomeButton />
    </div>
  );
};
