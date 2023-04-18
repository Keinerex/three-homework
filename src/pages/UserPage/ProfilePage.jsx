import React from 'react';
import classnames from "classnames";
import styles from "./styles.module.css";
import {Outlet} from "react-router-dom";
import Menu from "../../components/Menu/Menu";

function ProfilePage() {
    return (
        <main className={classnames(styles.main)}>
            <Menu/>
            <Outlet/>
        </main>
    );
}

export default ProfilePage;