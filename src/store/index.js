import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {categorySlice} from "./category";
import {bookSlice} from "./book";
import {reviewSlice} from "./review";
import {cartSlice} from "./cart";

export const store = configureStore({
    reducer: combineReducers({
        category: categorySlice.reducer,
        book: bookSlice.reducer,
        review: reviewSlice.reducer,
        cart: cartSlice.reducer,
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

})