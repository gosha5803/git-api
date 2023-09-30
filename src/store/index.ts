import { configureStore } from "@reduxjs/toolkit";
import {combineReducers} from 'redux'
import { reposApi } from "../api/repos/reposApi";
import authReducer from './Authentication/authSlice'
import { loginApi } from "../api/login/loginApi";

const rootReducer = combineReducers({
    [reposApi.reducerPath]: reposApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    auth: authReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleWare => getDefaultMiddleWare().concat(reposApi.middleware, loginApi.middleware)
})

export type AppStore = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch