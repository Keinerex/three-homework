import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
import icon from "./icon.svg";
import {Link} from "react-router-dom";

function Header() {

    return (
        <header className={classnames(styles.header)}>
            <Link to={"/"} className={classnames(styles.text)}>Магазин</Link>
            <Link to={"/cart"}><img src={icon} alt="cart-icon"/></Link>
        </header>
    );
}

export default Header;
