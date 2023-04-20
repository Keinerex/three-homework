import {selectCategories, selectCategoryBookIds} from "../category/selectors";
import {prepareData} from "../util";
import {bookSlice} from "./index";
import {selectBooksIds} from "./selectors";
import axios from "axios";

Array.prototype.hasAll = function (a) {
    var hash = this.reduce(function (acc, i) {
        acc[i] = true;
        return acc;
    }, {});
    return a?.every(function (i) {
        return i in hash;
    });
};

export const loadBooksByCategoryIfNotExists = (categoryId) => (dispatch, getState) => {
    if (selectCategories(getState()).length === 0) {
        return;
    }
    if (selectBooksIds(getState()).hasAll(selectCategoryBookIds(getState(), categoryId))) {
        console.log("get books from store")
        return
    }

    dispatch(bookSlice.actions.startLoading());
    console.log("get books from server")
    axios.get(`/api/books/?category_id=${categoryId}`)
        .then((response) => response.data)
        .then((books) => {
            dispatch(bookSlice.actions.successLoading(prepareData(books)));
        })
        .catch(() => {
            dispatch(bookSlice.actions.failLoading());
        });
};

export const loadBookIfNotExists = (bookId) => (dispatch, getState) => {

    if (selectBooksIds(getState()).includes(bookId)){
        console.log("get book from store")
        return
    }

    axios.get(`/api/book/?book_id=${bookId}`)
        .then((response) => response.data)
        .then((books) => {
            console.log("get book from server")
            dispatch(bookSlice.actions.successLoading(prepareData([books])));
        })
        .catch((reason) => {
            dispatch(bookSlice.actions.failLoading());
        });
}