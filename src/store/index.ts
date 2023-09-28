import { configureStore } from "@reduxjs/toolkit";
import {combineReducers} from 'redux'
import { reposApi } from "../api/repos/reposApi";

const rootReducer = combineReducers({
    [reposApi.reducerPath]: reposApi.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleWare => getDefaultMiddleWare().concat(reposApi.middleware)
})