import {categorySlice} from "./index";
import {prepareData} from "../util";
import {selectCategories} from "./selectors";

export const LoadCategoriesIfNotExists = (dispatch, getState) => {
        if (selectCategories(getState())?.length > 0){
            console.log("get categories from store")
            return;
        }
    fetch('/api/categories')
        .then(response => response.json())
        .then(categories => {
            dispatch(categorySlice.actions.successLoading(prepareData(categories)))
            console.log("get categories from server")
        })
        .catch(() => {})
}