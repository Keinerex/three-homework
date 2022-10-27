import React from 'react';
import IconCart from "../IconCart/IconCart";
import classnames from "classnames";
import styles from './styles.module.css';

function Header(props) {
    return (
        <header className={classnames(styles.header)}>
            <h1 className={classnames(styles.text)}>Магазин</h1>
            <IconCart/>
        </header>
    );
}

export default Header;