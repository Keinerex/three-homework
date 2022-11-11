import React from 'react';
import Book from "../Book/Book";
import classnames from "classnames";
import styles from "./styles.module.css"
import {useSelector} from "react-redux";

import {selectCartIds} from "../../store/cart/selectors";

function BooksCart() {


    const bookIds = useSelector((state) => selectCartIds(state))

    if (!bookIds) {
        return null;
    }


    return (
        <section className={classnames(styles.books)}>
            {bookIds.map((bookId) => (
                <Book
                    bookId={bookId}
                    target={"market"}
                    key={bookId}
                />
            ))}
        </section>
    );
}

export default BooksCart;