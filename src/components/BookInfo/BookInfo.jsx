import React from 'react';
import Book from "../Book/Book";
import Annotation from "../Annotation/Annotation";
import Reviews from "../Reviews/Reviews";
import styles from "./styles.module.css"
import classnames from "classnames";

function BookInfo({book}) {
    return (
        <main className={classnames(styles.main)}>
            <Book name={book.name} authors={book.authors} genre={book.genre} price={book.price} key={book.id}
                  target={"annotation"}/>
            <Annotation annotation={book.annotation}/>
            <Reviews reviews={book.reviews}/>
        </main>
    );
}

export default BookInfo;