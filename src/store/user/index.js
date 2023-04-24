import { createSlice } from "@reduxjs/toolkit";
import {Statuses} from "../../constants/statuses";
import {initialCartState} from "../../constants/states";

export const userSlice = createSlice({
    name: "user",
    initialState: initialCartState,
    reducers: {
        startLoading: (state, action) => {
            state.status = Statuses.inProgress;
        },
        successLoading: (state, action) => {
            state.status = Statuses.success;
            state.username = action.payload.username;
            state.name = action.payload.name;
            state.surname = action.payload.surname;
            state.patronymic = action.payload.patronymic;
            state.email = action.payload.email;
            state.tel = action.payload.tel;
            state.date = action.payload.date;
            state.cart = action.payload.cart;
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
        },
        logout: (state, action) => {
            console.log("logout")
            state.status = initialCartState.status;
            state.favourite = initialCartState.favourite;
            state.username = initialCartState.username;
            state.name = initialCartState.name;
            state.surname = initialCartState.surname;
            state.patronymic = initialCartState.patronymic;
            state.email = initialCartState.email;
            state.tel = initialCartState.tel;
            state.date = initialCartState.date;
        }
    },
});