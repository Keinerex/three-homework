import React from 'react';
import Book from "../Book/Book";
import classnames from "classnames";
import styles from "./styles.module.css"

function Books({group}) {
    return (
        <section className={classnames(styles.books)}>
            {group.books.map((book) => <Book name={book.name} authors={book.authors} genre={book.genre} price={book.price} key={book.id} target={"market"}/>)}
        </section>
    );
}

export default Books;