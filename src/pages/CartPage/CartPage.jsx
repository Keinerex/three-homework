import React from 'react';
import Bill from "../../components/Bill/Bill";
import styles from "./styles.module.css"
import classnames from "classnames";

function CartPage() {
    return (
        <main className={classnames(styles.main)}>
            <Bill />
        </main>
    );
}

export default CartPage;