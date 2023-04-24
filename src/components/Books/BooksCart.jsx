import React, {useEffect} from 'react';
import Book from "../Book/Book";
import classnames from "classnames";
import styles from "./styles.module.css"
import {useDispatch, useSelector} from "react-redux";

import {selectCartIds} from "../../store/user/selectors";
import {loadUserData} from "../../store/user/loadUserData";

function BooksCart() {
    const dispatch = useDispatch()
    useEffect(() => {
        console.log("load")
        dispatch(loadUserData)
    }, [])
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