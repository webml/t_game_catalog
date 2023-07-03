import React, { useState } from "react";
import styles from "./Home.module.scss";
import { useGetGamesQuery } from "../../redux";
import { Loader } from "../../components/Loader";
import { Card } from "./Card";
import { Select } from "./Select/";

export const Home = () => {
  const { data = [], isLoading } = useGetGamesQuery();

  const [count, setCount] = useState(12);
  const [providerFilter, setProviderFilter] = useState("Provider");
  const [currencyFilter, setCurrencyFilter] = useState("Price");

  if (isLoading) return <Loader />;

  const sortGames = Object.values(data);
  sortGames.sort((a, b) => a.collections.popularity - b.collections.popularity);

  const providerOptions = ["Provider"];
  for (let i = 0; i < sortGames.length; i++) {
    if ("provider" in sortGames[i]) {
      if (!providerOptions.includes(sortGames[i].provider)) {
        providerOptions.push(sortGames[i].provider);
      }
    }
  }

  const currencyOptions = ["Price"];
  for (let i = 0; i < sortGames.length; i++) {
    if ("real" in sortGames[i]) {
      const currency = Object.keys(sortGames[i].real);
      currency.map(
        (item) => !currencyOptions.includes(item) && currencyOptions.push(item)
      );
    }
  }

  const filterGames = (game) => {
    if (providerFilter === "Provider" && currencyFilter === "Price") {
      return true;
    }

    if (
      providerFilter === "Provider" &&
      Object.keys(game.real).includes(currencyFilter)
    ) {
      return true;
    }

    if (game.provider === providerFilter && currencyFilter === "Price") {
      return true;
    }

    if (
      game.provider === providerFilter &&
      Object.keys(game.real).includes(currencyFilter)
    ) {
      return true;
    }

    return false;
  };

  const getGamesList = (games) => {
    const gameList = [];
    let i = 0;
    games.map(
      (game) =>
        i !== count &&
        filterGames(game) &&
        gameList.push(
          <Card
            key={sortGames.indexOf(game)}
            game={game}
            imgPath={Object.keys(data).find((key) => data[key] === game)}
          />
        ) &&
        i++
    );
    return gameList;
  };

  const buttonHandleClick = () => {
    setCount(count + 12);
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.filters}>
          <Select options={providerOptions} updateState={setProviderFilter} />
          <Select options={currencyOptions} updateState={setCurrencyFilter} />
        </div>
        <div className={styles.cards}>{getGamesList(sortGames)}</div>
        <button onClick={buttonHandleClick} className={styles.button}>
          Показать еще
        </button>
      </div>
    </div>
  );
};
