import React, {useState} from 'react';
import {Alert, FormControl, InputLabel, OutlinedInput, Snackbar} from '@mui/material';
import axios from "axios";
import classnames from "classnames";
import styles from "./styles.module.css";

function Register() {

    const [open, setOpen] = useState(false)
    const [data, setData] = useState({
        status: "info",
        text: "Ожидание ответа сервера"
    })

    return (
        <main className={classnames(styles.main)}>
            <form className={classnames(styles.form)}
                  name="register_form"
                  onSubmit={(event) => {
                      event.preventDefault();
                      const form = document.forms["register_form"]
                      setData({
                          status: "info",
                          text: "Ожидание ответа сервера"
                      })
                      setOpen(true)
                      axios.post("/api/register", {
                          username: form.username.value,
                          password: form.password.value,
                      })
                          .then((response) => {
                              setOpen(false)
                              if (response.data.status) {
                                  setData({
                                      status: "success",
                                      text: "успешно"
                                  })
                              } else {
                                  setData({
                                      status: "error",
                                      text: "Данный логин уже занят"
                                  })
                              }
                              setOpen(true)
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
                    <OutlinedInput value="Зарегистрироваться" type="submit"/>
                </FormControl>
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

export default Register;