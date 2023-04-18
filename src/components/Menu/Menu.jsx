import React from 'react';
import classnames from "classnames";
import styles from "./styles.module.css";
import {NavLink} from "react-router-dom";

function Menu() {
    return (
        <nav className={classnames(styles.navigation)}>
            <NavLink
                to="/profile/personal"
                key="profile"
                className={({isActive}) => classnames(
                    {[styles.active]: isActive},
                    styles.select_link
                )}>
                Личные данные
            </NavLink>
            <NavLink
                to="/profile/orders"
                key="orders"
                className={({isActive}) => classnames(
                    {[styles.active]: isActive},
                    styles.select_link
                )}>
                Заказы
            </NavLink>
            <NavLink
                to="/profile/bonus"
                key="bonus"
                className={({isActive}) => classnames(
                    {[styles.active]: isActive},
                    styles.select_link
                )}>
                Бонусы и скидки
            </NavLink>
            <NavLink
                to="/profile/favourite"
                key="favourite"
                className={({isActive}) => classnames(
                    {[styles.active]: isActive},
                    styles.select_link
                )}>
                Отложенное
            </NavLink>
            <NavLink
                to="/profile/logout"
                key="logout"
                className={classnames(styles.logout, styles.select_link)}>
                Выйти
            </NavLink>
        </nav>
    );
}

export default Menu;