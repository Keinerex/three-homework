import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
import {useSelector} from "react-redux";
import {selectBookById} from "../../store/book/selectors";

function Annotation({ annotation }) {

  return (
    <article className={classnames(styles.card)}>
      <h3>Аннотация</h3>
      <span>{annotation}</span>
    </article>
  );
}

export default Annotation;