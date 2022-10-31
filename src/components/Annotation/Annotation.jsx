import React from 'react';
import classnames from "classnames";
import styles from "./styles.module.css"

function Annotation({annotation}) {
    return (
        <article className={classnames(styles.card)}>
            <h3>Аннотация</h3>
            <span>{annotation}</span>
        </article>
    );
}

export default Annotation;