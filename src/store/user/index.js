import { createSlice } from "@reduxjs/toolkit";
import {Statuses} from "../../constants/statuses";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        status: Statuses.idle,
        cart: {
            price: 0,
            books: {
            }
        },
        favourite: {
            ids: []
        },
        username: null,
        name: null,
        surname: null,
        patronymic: null,
        email: null,
        tel: null,
        date: null,
    },
    reducers: {
        startLoading: (state, action) => {
            state.status = Statuses.inProgress;
        },
        successLoading: (state, action) => {
            state.status = Statuses.success;
            state.username = action.payload.username;
        },
        failLoading: (state, action) => {
            state.status = Statuses.failed;
        },
        addBook: (state, action) => {
            state.cart.books[action.payload] = (state.cart.books[action.payload] || 0) + 1;
        },
        removeBook: (state, action) => {
            state.cart.books[action.payload] =
                state.cart.books[action.payload] === 0 ? 0 : state.cart.books[action.payload] - 1;
        },
        addPrice: (state, action) => {
            state.cart.price += action.payload
        },
        removePrice: (state, action) => {
            state.cart.price -= action.payload
        }
    },
});