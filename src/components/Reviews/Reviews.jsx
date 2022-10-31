import React from 'react';
import Review from "../Review/Review";
import styles from "./styles.module.css"
import classnames from "classnames";

function Reviews({reviews}) {
    return (
        <article className={classnames(styles.reviews)}>
                {reviews.map(review => <Review name={review.name} text={review.text} key={review.id}/>)}
        </article>
    );
}

export default Reviews;