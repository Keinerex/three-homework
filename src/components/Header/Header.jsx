import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
import cartIcon from "./cart-icon.svg";
import profileIcon from "./profile-icon.svg"
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className={classnames(styles.header)}>
            <Link to={"/"} className={classnames(styles.text)}>Магазин</Link>
            <nav>
                <Link to={"/profile"} className={classnames(styles.icon)}><img src={profileIcon} alt="cart-icon"/></Link>
                <Link to={"/cart"} className={classnames(styles.icon)}><img src={cartIcon} style={{width: "32px", height: "32px"}} alt="profile-icon"/></Link>
            </nav>


        </header>
    );
}

export default Header;
