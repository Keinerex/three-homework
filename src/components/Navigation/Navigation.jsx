import React from 'react';
import classnames from "classnames";
import styles from "./styles.module.css"

function Navigation(props) {
    const books = ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"]
    return (
        <nav className={classnames(styles.navigation)}>
            {
                books.map((book) => <a>{book}</a>)
            }
        </nav>
    );
}

export default Navigation;