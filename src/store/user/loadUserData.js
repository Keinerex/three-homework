import {userSlice} from "./index";
import {prepareUserData} from "../util";
import {selectUser} from "./selectors";
import axios from "axios";

export const loadUserData = (dispatch, getState) => {
    if (selectUser.username){
        return
    }

    axios.get("/api/get_user_data")
        .then(response => response.data)
        .then(user => {
            if (user.username){
                dispatch(userSlice.actions.successLoading(user))
            }
        })
        .catch(() => {})
}