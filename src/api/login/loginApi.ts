import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IUser } from '../../models/user'
import { ILoginForm } from '../../components/LoginForm'
import { setUser } from '../../store/Authentication/authSlice'

export const loginApi = createApi({
    reducerPath:'login/api',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:1234'}),
    endpoints: build => ({
        loginUser: build.query<IUser, ILoginForm>({
            query: (registerData: ILoginForm) => ({
                url:'users'
            }),
            transformResponse: (response: IUser[]) => response[0],
            async onQueryStarted(arg, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled
                    localStorage.setItem('user', JSON.stringify(data))
                    dispatch(setUser(data))
                } catch (e) {
                    console.log(e)
                }
            }
        }),
    })
})
