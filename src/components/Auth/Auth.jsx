import React from 'react';
import {FormControl, InputLabel, OutlinedInput} from '@mui/material';
import {NavLink} from "react-router-dom";
import axios from "axios";
import classnames from "classnames";
import styles from "./styles.module.css";

function Auth({setRefresh, refresh}) {
    return (
        <main className={classnames(styles.main)}>
            <form className={classnames(styles.form)}
                  name="auth_form"
                  onSubmit={(event) => {
                      event.preventDefault();
                      const form = document.forms["auth_form"]
                      axios.post("/api/login", {
                              username: form.username.value,
                              password: form.password.value,
                      })
                      .then(() => {
                          setRefresh(!refresh)
                      })

                  }}
            >
                <FormControl>
                    <InputLabel required={true} htmlFor="username">Имя пользователя</InputLabel>
                    <OutlinedInput required={true} label="Имя пользователя" id="username" name="username"/>
                </FormControl>
                <FormControl>
                    <InputLabel required={true} htmlFor="password">Пароль</InputLabel>
                    <OutlinedInput required={true} type="password" label="Пароль" id="password" name="password"/>
                </FormControl>
                <FormControl>
                    <OutlinedInput value="Войти" type="submit"/>
                </FormControl>
                <NavLink
                    to="/register"
                    className={classnames(styles.link)}>
                    Зарегистрироваться
                </NavLink>
            </form>
        </main>
    );
}

export default Auth;