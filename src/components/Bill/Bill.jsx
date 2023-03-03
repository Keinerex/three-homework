import React from 'react';
import styles from "./styles.module.css"
import classnames from "classnames";
import {useSelector} from "react-redux";
import {selectCartIds, selectPrice} from "../../store/cart/selectors";
import BillRow from "../BillRow/BillRow";

function Bill() {
    const bookIds = useSelector((state) => selectCartIds(state))
    const price = useSelector((state) => selectPrice(state))
    return (
        <section className={classnames(styles.bill)}>
            <ul className={classnames(styles.list)}>
                <h3>Ваш заказ:</h3>
                {bookIds.map((bookId) => (
                    <BillRow bookId={bookId} key={`result-${bookId}`}></BillRow>
                ))}
            </ul>
            <div className={classnames(styles.result)}>
                <h2>{`Итого:\t${price} `}&#8381;  </h2>
                <button className={classnames(styles.buy)}>Купить</button>
            </div>
        </section>
    );
}

export default Bill;