import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
import {useDispatch, useSelector} from "react-redux";
import {selectBookCount} from "../../store/user/selectors";
import {userSlice} from "../../store/user";

function Counter({target, bookId, price}) {
    const dispatch = useDispatch();
    const count = useSelector((state) => selectBookCount(state, bookId));

    return (
        <div
            className={classnames(
                styles.counter,
                target === "market" ? styles.counter_market : styles.counter_annotation
            )}
        >
            <button
                onClick={() => {
                    dispatch(userSlice.actions.removeBook(bookId));
                    dispatch(userSlice.actions.removePrice(price));
                }}
                className={styles.btn}
                disabled={(count || 0) === 0}
            >
                -
            </button>
            <p className={styles.counter_text}>{count || 0}</p>
            <button
                onClick={() => {
                    dispatch(userSlice.actions.addBook(bookId))
                    dispatch(userSlice.actions.addPrice(price))
                }}
                className={styles.btn}>

                +
            </button>
        </div>
    );
}

export default Counter;