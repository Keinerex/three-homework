import {userSlice} from "./index";

export const logoutUser = (dispatch, getState) => {
    dispatch(userSlice.actions.logout())
}