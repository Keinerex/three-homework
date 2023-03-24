import React, {useEffect} from 'react';
import Book from "../Book/Book";
import classnames from "classnames";
import styles from "./styles.module.css"
import {useDispatch, useSelector} from "react-redux";
import {loadBooksByCategoryIfNotExists} from "../../store/book/loadBooksIfNotExists";
import {selectCategoryBookIds, selectCategoryIds} from "../../store/category/selectors";
import {selectIsBooksLoading} from "../../store/book/selectors";
import {useParams} from "react-router-dom";
import {RingLoader} from "react-spinners";

function Books({target}) {

    const dispatch = useDispatch();
    const {categoryId} = useParams();
    const firstId = useSelector((state) => selectCategoryIds(state))[0]

    useEffect(() => {
        dispatch(loadBooksByCategoryIfNotExists(categoryId ? categoryId : firstId))

    }, [categoryId, firstId])


    const bookIds = useSelector((state) => selectCategoryBookIds(state, categoryId))

    const isLoading = useSelector((state) => selectIsBooksLoading(state));

    if (isLoading) {
        return <RingLoader
            color="#000000"
            size={180}
            speedMultiplier={0.5}
            cssOverride={
                {
                    margin: "auto"
                }
            }
        />
    }
    if (!bookIds) {
        return null;
    }


    return (
        <section className={classnames(styles.books)}>
            {bookIds.map((bookId) => (
                <Book
                    bookId={bookId}
                    target={target}
                    key={bookId}
                />
            ))}
        </section>
    );
}

export default Books;