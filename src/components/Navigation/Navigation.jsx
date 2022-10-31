import React, {useState} from 'react';
import classnames from "classnames";
import styles from "./styles.module.css"

function Navigation({groups, setActive, active}) {

    return (
        <nav className={classnames(styles.navigation)}>
            {
                groups.map((group) => <a key={group.id} onClick={() => {
                    setActive(group);
                }} className={classnames(active === group ? styles.active : "", styles.select_link)}>{group.name}</a>)
            }
        </nav>
    );
}

export default Navigation;