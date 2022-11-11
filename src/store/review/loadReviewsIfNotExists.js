import {prepareData} from "../util";
import {reviewSlice} from "./index";
import {selectBookReviewIds, selectReviewIds, selectReviews} from "./selectors";
import {selectBookById} from "../book/selectors";

Array.prototype.hasAll = function (a) {
    var hash = this.reduce(function (acc, i) {
        acc[i] = true;
        return acc;
    }, {});
    return a?.every(function (i) {
        return i in hash;
    });
};

export const loadReviewsIfNotExists = (bookId) => (dispatch, getState) => {
    if (selectBookById(getState(), bookId).length === 0){
        return;
    }
    if (selectReviewIds(getState())?.hasAll(selectBookReviewIds(getState(), bookId))) {
        console.log("get reviews from store")
        return
    }

    dispatch(reviewSlice.actions.startLoading());
    console.log("get reviews from server")
    fetch(`https://fastapi-starter.keinerex.repl.co/api/reviews/?book_id=${bookId}`)
        .then((response) => {
            return response.json()
        })
        .then((reviews) => {
            dispatch(reviewSlice.actions.successLoading(prepareData(reviews)));
        })
        .catch(() => {
            dispatch(reviewSlice.actions.failLoading());
        });
};