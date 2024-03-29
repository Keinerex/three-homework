import {createSlice} from "@reduxjs/toolkit";
import {Statuses} from "../../constants/statuses";

export const categorySlice = createSlice({
    name: "category",
    initialState: {
        entities: {},
        ids: [],
        status: Statuses.idle
    },
    reducers:{
        startLoading: (state, action) => {
            state.status = Statuses.inProgress;
            state.entities = {};
            state.ids = [];
        },
        successLoading: (state, action) => {
            state.status = Statuses.success
            state.entities = action.payload.entities;
            state.ids = action.payload.ids;
        },
        failLoading: (state, action) => {
            state.status = Statuses.failed;
            state.entities = {};
            state.ids = [];
        },
    }
})