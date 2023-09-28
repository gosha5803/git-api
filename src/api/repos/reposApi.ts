import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IRepo, IResponse } from '../../models/repos'

export const reposApi = createApi({
    reducerPath:'repos',
    baseQuery:fetchBaseQuery({baseUrl: 'https://api.github.com/'}),
    endpoints: build => ({
        fetchUserByName: build.query<IRepo[], string>({
            query: (username: string) => ({
                url:`search/users`,
                params: {
                    q: username,
                    per_page: 10
                }
            }), 
            transformResponse: (res: IResponse<IRepo>) => res.items
        }),
        fetchReposByUsername: build.query<IRepo[], string>({
            query: (username:string) => ({
                url:`users/${username}/repos`,
                params: {
                    _limit: 5
                }
            })
        })
        
    })
})

export const {} = reposApi