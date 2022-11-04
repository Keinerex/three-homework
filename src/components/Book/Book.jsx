import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
import Counter from "../Counter/Counter";

function Book({ name, authors, genre, price, target }) {
  return (
    <article className={classnames(styles.card)}>
      <span className={styles.text}>
        <h2>{name}</h2>
        <p>{authors.join(", ")}</p>
        <p>{genre}</p>
        <p>{price}</p>
      </span>
      <Counter target={target} />
    </article>
  );
}

export default Book;