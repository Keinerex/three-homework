import React from 'react';
import classnames from "classnames";
import styles from "./styles.module.css"
import {selectBookById} from "../../store/book/selectors";
import {selectBookCount} from "../../store/user/selectors";
import {useSelector} from "react-redux";

function BillRow({bookId}) {
    const book = useSelector((state) => selectBookById(state, bookId))
    const count = useSelector((state) => selectBookCount(state, bookId))

    return (
        <li className={classnames(styles.listItem)}><p className={classnames(styles.line)}>{book.title}</p><h4
            className={classnames(styles.line)}>{book.price * count}</h4></li>
    );
}

export default BillRow;