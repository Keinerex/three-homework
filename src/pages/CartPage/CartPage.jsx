import React from 'react';
import Bill from "../../components/Bill/Bill";
import styles from "./styles.module.css"
import classnames from "classnames";
import BooksCart from "../../components/Books/BooksCart";

function CartPage() {
    return (
        <main className={classnames(styles.main)}>
            <Bill />
            <BooksCart/>
        </main>
    );
}

export default CartPage;