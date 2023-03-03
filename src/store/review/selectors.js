import {Statuses} from "../../constants/statuses";
import {selectBookModule} from "../book/selectors";

export const selectReviewModule = (state) =>
    state.review;

export const selectReviews = (state) =>
    Object.values(selectReviewModule(state).entities)

export const selectReviewIds = (state) =>
    Object.values(selectReviewModule(state).ids)

export const selectReviewById = (state, reviewId) =>
    selectReviewModule(state).entities[reviewId];

export const selectIsReviewsLoading = (state) =>
    selectReviewModule(state).status === Statuses.inProgress;

export const selectBookReviewIds = (state, bookId) =>
    selectBookModule(state).entities[bookId]?.reviews;
