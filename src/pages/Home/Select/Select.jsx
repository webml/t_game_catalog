import React from "react";
import styles from "./Select.module.scss";

export const Select = ({ options, updateState }) => {
  const selectChangeHandler = (event) => {
    updateState(event.target.value);
  };

  const selectOptions = options.map((option) => (
    <option value={option} key={option}>
      {option}
    </option>
  ));
  return (
    <div className={styles.container}>
      <select onChange={selectChangeHandler} className={styles.select}>
        {selectOptions}
      </select>
      <div className={styles.arrow}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};
