import React, {useState} from 'react';
import classnames from "classnames";
import axios from "axios";
import styles from "./styles.module.css";
import {FormControl, InputLabel, OutlinedInput} from '@mui/material';
import {DatePicker} from "@mui/x-date-pickers";
import dayjs from "dayjs";





function PersonalData() {
    const [date, setDate] = useState(dayjs('2001-01-01'))
    return (
        <form
            name="personal_data_form"
            className={classnames(styles.wrap)}
            onSubmit={(event) => {
                event.preventDefault()
                const form = document.forms["personal_data_form"]
                axios.put("/api/update_userdata", {
                    headers: {
                        "Accept": "application/json",
                        "Content-Type:": "application/json"
                    },
                    body: JSON.stringify({
                        name: form.name.value,
                        surname: form.surname.value,
                        patronymic: form.patronymic.value,
                        date: date.format("DD-MM-YYYY"),
                        email: form.email.value,
                        tel: form.tel.value,
                    })

                })

            }}>
            <FormControl>
                <InputLabel required={true} htmlFor="surname">Фамилия</InputLabel>
                <OutlinedInput required={true} label="Фамилия" id="surname" name="surname"/>
            </FormControl>
            <FormControl>
                <InputLabel required={true} htmlFor="name">Имя</InputLabel>
                <OutlinedInput required={true} label="Имя" id="name" name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="patronymic">Отчество</InputLabel>
                <OutlinedInput label="Отчество" id="patronymic" name="patronymic"/>
            </FormControl>
            <FormControl>
                <DatePicker label="Дата рождения *" format="DD/MM/YYYY" id="date" name="date" required={true} onChange={(value) => {
                    setDate(value)
                }}/>
                    </FormControl>
                    <FormControl>
                    <InputLabel required={true} htmlFor="email">E-mail</InputLabel>
                <OutlinedInput required={true} name="email" label="E-mail" id="email"/>
            </FormControl>
            <FormControl>
                <InputLabel required={true} htmlFor="tel">Телефон</InputLabel>
                <OutlinedInput required={true} name="tel" label="Телефон" type="tel" id="tel"/>
            </FormControl>
            <FormControl>
                <OutlinedInput value="Изменить данные" type="submit" className={classnames(styles.btn)}/>
            </FormControl>
        </form>
    );
}

export default PersonalData;