import React, {useEffect} from "react";
import Review from "../Review/Review";
import styles from "./styles.module.css";
import classnames from "classnames";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loadReviewsIfNotExists} from "../../store/review/loadReviewsIfNotExists";
import {selectBookReviewIds, selectIsReviewsLoading} from "../../store/review/selectors";


function Reviews() {
    const {bookId} = useParams()

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadReviewsIfNotExists(bookId))
    }, [bookId])

    const reviewIds = useSelector((state) => selectBookReviewIds(state, bookId))
    const isLoading = useSelector((state) => selectIsReviewsLoading(state))

    if (isLoading) {
        return <span>Loading</span>
    }

    return (
        <article className={classnames(styles.reviews)}>
            {
                reviewIds?.map((reviewId) => (
                    <Review key={reviewId} id={reviewId}/>
                ))}
        </article>
    );
}

export default Reviews;