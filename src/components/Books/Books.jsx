import React from 'react';
import Book from "../Book/Book";
import classnames from "classnames";
import styles from "./styles.module.css"

function Books(props) {
    return (
        <section className={classnames(styles.books)}>
            {[1, 2, 3, 4, 5].map((book) => <Book>Lorem Ipsum</Book>)}
        </section>
    );
}

export default Books;