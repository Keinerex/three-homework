import React, {useState} from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Books from "../../components/Books/Books";
import {Outlet} from "react-router-dom";

function MarketPage() {
    return (
        <main className={classnames(styles.main)}>
            <Navigation/>
            <Outlet/>
        </main>
    );
}

export default MarketPage;
