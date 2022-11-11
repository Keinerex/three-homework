import React, {useEffect} from "react";
import styles from "./styles.module.css";
import classnames from "classnames";
import Annotation from "../../components/Annotation/Annotation";
import Book from "../../components/Book/Book";
import Reviews from "../../components/Reviews/Reviews";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectBookById} from "../../store/book/selectors";
import {loadBookIfNotExists} from "../../store/book/loadBooksIfNotExists";

function BookPage() {
    const {bookId} = useParams()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBookIfNotExists(bookId))
    }, [bookId])

    const book = useSelector((state) => selectBookById(state, bookId));

    if (!book){
        return <p>Loading</p>
    }

    return (
        <main className={classnames(styles.main)}>
            <Book
                bookId={bookId}
                target={"annotation"}
            />
            <Annotation annotation={book.annotation}/>
            {book.reviews && <Reviews />}
        </main>
    );
}

export default BookPage;
