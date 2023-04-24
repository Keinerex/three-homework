
import axios from "axios";
import {selectUser} from "./selectors";

export const sendUserData = () => (dispatch, getState) => {
    if (selectUser(getState())){
        axios.put("/api/update_cart", {
            cart: selectUser(getState()).cart
        })
            .then(response => {})
            .catch(reason => {})
    }

}