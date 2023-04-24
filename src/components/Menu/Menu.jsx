import React from 'react';
import classnames from "classnames";
import styles from "./styles.module.css";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import {userSlice} from "../../store/user";
import {logoutUser} from "../../store/user/logoutUser";

function Menu() {
    const dispatch = useDispatch();
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
            <a
                onClick={(event) => {
                    event.preventDefault();
                    axios.post("/api/logout")
                        .then(() => {
                            dispatch((state) => logoutUser(state))
                        })
                        .catch(() => {console.log("logout error")})
                }}
                className={classnames(styles.logout, styles.select_link)}>
                Выйти
            </a>
        </nav>
    );
}

export default Menu;