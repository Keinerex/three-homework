import {Statuses} from "../../constants/statuses";

export const selectBookModule = (state) => state.book;

export const selectBooksIds = (state) =>
    Object.values(selectBookModule(state).ids);

export const selectIsBooksLoading = (state) =>
    selectBookModule(state).status === Statuses.inProgress;

export const selectBookById = (state, bookId) =>
    selectBookModule(state).entities[bookId];

