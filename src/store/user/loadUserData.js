import {userSlice} from "./index";
import axios from "axios";

export const loadUserData = (dispatch, getState) => {
    axios.get("/api/get_user_data")
        .then(response => response.data)
        .then(user => {
            if (user.username) {
                dispatch(userSlice.actions.successLoading(user))
            }
        })
        .catch(() => {
        })
}