import React from 'react';
import classnames from "classnames";
import styles from "./styles.module.css";
import {FormControl, InputLabel, OutlinedInput} from '@mui/material';
import {DatePicker} from "@mui/x-date-pickers";

function PersonalData() {
    return (
        <form method="post" className={classnames(styles.wrap)}>
            <FormControl>
                <InputLabel required={true} htmlFor="surname">Фамилия</InputLabel>
                <OutlinedInput required={true} label="Фамилия" id="surname" name="surname" defaultValue="Юрков"/>
            </FormControl>
            <FormControl>
                <InputLabel required={true} htmlFor="name">Имя</InputLabel>
                <OutlinedInput required={true} label="Имя" id="name" defaultValue="Владислав"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="patronymic">Отчество</InputLabel>
                <OutlinedInput label="Отчество" id="patronymic" defaultValue="Юрьевич"/>
            </FormControl>
            <FormControl>
                <DatePicker label="Дата рождения *" id="date" required={true}/>
            </FormControl>
            <FormControl>
                <InputLabel required={true} htmlFor="email">E-mail</InputLabel>
                <OutlinedInput required={true} label="E-mail" id="email" defaultValue="email"/>
            </FormControl>
            <FormControl>
                <InputLabel required={true} htmlFor="tel">Телефон</InputLabel>
                <OutlinedInput required={true} label="Телефон" type="tel" id="tel" defaultValue="tel"/>
            </FormControl>
            <FormControl>
                <OutlinedInput type="submit"/>
            </FormControl>
        </form>
    );
}

export default PersonalData;