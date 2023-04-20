import React from 'react';
import classnames from "classnames";
import styles from "./styles.module.css";
import {Button, FormControl, InputLabel, OutlinedInput} from '@mui/material';
import {DatePicker} from "@mui/x-date-pickers";


function PersonalData() {
    return (
        <form className={classnames(styles.wrap)}>
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
                <DatePicker label="Дата рождения *" id="date" name="date" required={true}/>
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