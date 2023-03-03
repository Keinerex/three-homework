import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        price: 0,
        books: {

        }
    },
    reducers: {
        addBook: (state, action) => {
            state.books[action.payload] = (state.books[action.payload] || 0) + 1;
        },
        removeBook: (state, action) => {
            state.books[action.payload] =
                state.books[action.payload] === 0 ? 0 : state.books[action.payload] - 1;
        },
        addPrice: (state, action) => {
            state.price += action.payload
        },
        removePrice: (state, action) => {
            state.price -= action.payload
        }
    },
});