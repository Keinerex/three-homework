import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
import icon from "./icon.svg";

function Header() {
  return (
    <header className={classnames(styles.header)}>
      <h1 className={classnames(styles.text)}>Магазин</h1>
      <img src={icon} alt="cart-icon" />
    </header>
  );
}

export default Header;
