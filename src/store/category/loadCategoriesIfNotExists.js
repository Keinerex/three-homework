import {categorySlice} from "./index";
import {prepareData} from "../util";
import {selectCategories} from "./selectors";
import axios from "axios";

export const LoadCategoriesIfNotExists = (dispatch, getState) => {
        if (selectCategories(getState())?.length > 0){
            console.log("get categories from store")
            return;
        }
    axios.get('/api/categories')
        .then(response => response.data)
        .then(categories => {
            dispatch(categorySlice.actions.successLoading(prepareData(categories)))
            console.log("get categories from server")
        })
        .catch(() => {})
}