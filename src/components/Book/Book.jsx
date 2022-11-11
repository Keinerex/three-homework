import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
import Counter from "../Counter/Counter";
import {useSelector} from "react-redux";
import {selectBookById} from "../../store/book/selectors";
import {Link} from "react-router-dom";

function Book({bookId, target}) {


    const book = useSelector((state) => selectBookById(state, bookId));

    if (!book) {
        return <p>Loading</p>
    }

    return (
        <article className={classnames(target === "market" && styles.market_target, styles.card)}>
      <span className={styles.text}>
        <Link to={`/book/${book.id}`} className={classnames(styles.title)}>{book.title}</Link>
        <p>{book.authors.join(", ")}</p>
        <p>{book.genre}</p>
        <p>{book.price}</p>
      </span>
            <Counter target={target} bookId={bookId}/>
        </article>
    );
}

export default Book;