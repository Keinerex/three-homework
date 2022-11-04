import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";

function Review({ name, text }) {
  return (
    <div className={classnames(styles.review)}>
      <h3 className={styles.title}>{name}</h3>
      <span>{text}</span>
    </div>
  );
}

export default Review;