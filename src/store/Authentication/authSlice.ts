import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAuth } from "./types";
import { IUser } from "../../models/user";

const initialState: IAuth = {
    user: {} as IUser
}

const authSlice = createSlice({
    name:'authSlice',
    initialState,
    reducers: {
        logout: (state: IAuth, action: PayloadAction) => {
            if (localStorage.getItem('user')) {
                localStorage.removeItem('user')
            }
            return initialState
        },
        setUser: (state: IAuth, action: PayloadAction<IUser>) => {
            state.user = action.payload
        }

    }
})

export const {logout, setUser} = authSlice.actions
export default authSlice.reducer