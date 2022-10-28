import React, {useState} from 'react';
import classnames from "classnames";
import styles from "./styles.module.css"

function Counter(props) {
    const [count, setCount] = useState(0);
    return (
        <div className={classnames(styles.counter)}>
            <button onClick={() => {if (count > 0) setCount(count - 1)}} className={styles.btn}>-</button>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)} className={styles.btn}>+</button>
        </div>
    );
}

export default Counter;