import React, {useEffect} from 'react';
import classnames from "classnames";
import styles from "./styles.module.css"
import {selectBookById} from "../../store/book/selectors";
import {selectBookCount} from "../../store/user/selectors";
import {useDispatch, useSelector} from "react-redux";
import {loadBookIfNotExists} from "../../store/book/loadBooksIfNotExists";
import {loadUserData} from "../../store/user/loadUserData";

function BillRow({bookId}) {
    const dispatch = useDispatch();
    const book = useSelector((state) => selectBookById(state, bookId))
    const count = useSelector((state) => selectBookCount(state, bookId))
    useEffect(() => {
        dispatch(loadBookIfNotExists(bookId))
    }, [bookId])

    if (!book) {
        return <h1>Loading</h1>
    }

    return (
        <li className={classnames(styles.listItem)}><p className={classnames(styles.line)}>{book.title}</p><h4
            className={classnames(styles.line)}>{book.price * count}</h4></li>
    );
}

export default BillRow;