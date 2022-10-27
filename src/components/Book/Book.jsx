import React from 'react';
import classnames from "classnames";
import styles from "./styles.module.css"

function Book(props) {
    return (
        <article className={classnames(styles.card)}>
            <p>{props.children}</p>
            <p>{props.children}</p>
            <p>{props.children}</p>
            <p>{props.children}</p>
        </article>
    );
}

export default Book;