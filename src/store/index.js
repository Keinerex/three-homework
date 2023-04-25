import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {categorySlice} from "./category";
import {bookSlice} from "./book";
import {reviewSlice} from "./review";
import {userSlice} from "./user";


export const store = configureStore({
    reducer: combineReducers({
        category: categorySlice.reducer,
        book: bookSlice.reducer,
        review: reviewSlice.reducer,
        user: userSlice.reducer,
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

})