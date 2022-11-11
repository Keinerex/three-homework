import React from "react";
import styles from "./styles.module.css";
import classnames from "classnames";
import {useSelector} from "react-redux";
import {selectReviewById} from "../../store/review/selectors";

function Review({ id }) {
    const review = useSelector((state) => selectReviewById(state, id))

    if (!review){
        return <span>Loading</span>
    }
  return (
    <div className={classnames(styles.review)}>
      <h3 className={styles.title}>{review.user}</h3>
      <span>{review.text}</span>
    </div>
  );
}

export default Review;