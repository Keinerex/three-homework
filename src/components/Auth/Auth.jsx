import React, {useState} from 'react';
import {Alert, FormControl, InputLabel, OutlinedInput, Snackbar} from '@mui/material';
import {NavLink} from "react-router-dom";
import axios from "axios";
import classnames from "classnames";
import styles from "./styles.module.css";

function Auth({setRefresh, refresh}) {

    const [open, setOpen] = useState(false)
    const [data, setData] = useState({
        status: "info",
        text: "Ожидание ответа сервера"
    })

    return (
        <main className={classnames(styles.main)}>
            <form className={classnames(styles.form)}
                  name="auth_form"
                  onSubmit={(event) => {
                      event.preventDefault();
                      const form = document.forms["auth_form"]
                      setData({
                          status: "info",
                          text: "Ожидание ответа сервера"
                      })
                      setOpen(true)
                      axios.post("/api/login", {
                          username: form.username.value,
                          password: form.password.value,
                      })
                          .then((response) => {
                              if (response.data.status) {
                                  setData({
                                      status: "success",
                                      text: "Успешно"
                                  })
                              }
                              setRefresh(!refresh)
                          })
                          .catch((response) => {
                              setData({
                                  status: "error",
                                  text: "Неверный логин или пароль"
                              })
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
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={() => {
                    setOpen(false)
                }}
            >
                <Alert severity={data.status} sx={{width: '100%'}}>
                    {data.text}
                </Alert>
            </Snackbar>
        </main>
    );
}

export default Auth;