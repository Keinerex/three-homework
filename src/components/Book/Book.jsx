import React from 'react';
import classnames from "classnames";
import styles from "./styles.module.css"
import Counter from "../Counter/Counter";

function Book(props) {
    return (
        <article className={classnames(styles.card)}>
            <text className={styles.text}>
                <p>{props.children}</p>
                <p>{props.children}</p>
                <p>{props.children}</p>
                <p>{props.children}</p>
            </text>
            <Counter/>

        </article>
    );
}

export default Book;