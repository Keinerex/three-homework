import React, {useState} from 'react';
import classnames from "classnames";
import styles from "./styles.module.css"

function Counter({target}) {
    const [count, setCount] = useState(0);
    return (
        <div className={classnames(styles.counter, target === "market" ? styles.counter_market : styles.counter_annotation)}>
            <button onClick={() => {if (count > 0) setCount(count - 1)}} className={styles.btn} disabled={count === 0}>-</button>
            <p className={styles.counter_text}>{count}</p>
            <button onClick={() => setCount(count + 1)} className={styles.btn}>+</button>
        </div>
    );
}

export default Counter;