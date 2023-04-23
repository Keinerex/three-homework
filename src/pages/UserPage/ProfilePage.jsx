import React, {useEffect, useState} from 'react';
import classnames from "classnames";
import styles from "./styles.module.css";
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";
import Menu from "../../components/Menu/Menu";
import Auth from "../../components/Auth/Auth";
import {loadUserData} from "../../store/user/loadUserData";


import {selectUser} from "../../store/user/selectors";

function ProfilePage() {

    const dispatch = useDispatch();
    const user = useSelector((state) => selectUser(state))
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        dispatch(loadUserData)
    }, [refresh])

    if (user.username) return (
        <main className={classnames(styles.main)}>
            <Menu/>
            <Outlet/>
        </main>
    );

    return (
        <Auth
            setRefresh={setRefresh}
            refresh={refresh}/>
    )
}

export default ProfilePage;