import React, {useState, useEffect} from 'react';
import { reposApi } from '../api/repos/reposApi';
import { Select, TextField, Autocomplete, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import {useDebounce} from '../utils/debounced'
import { IRepo } from '../models/repos';

interface IForm {
    autocomplete:string
}

const SearchPage: React.FC = () => {
    const [user, setUser] = useState<string>('')
    const debounce = useDebounce(user)
    const {data: users} = reposApi.useFetchUserByNameQuery(debounce, {
        skip: debounce.length < 1,
        refetchOnFocus: true
    })
    const [fetchRepos, {data: repos}] = reposApi.useLazyFetchReposByUsernameQuery()
    const [gHUsers, setGHUsers] = useState<string[]>([])

    const submitHandler = (data: IForm) => {
        console.log(data)
    }

    useEffect(() => {
        const logins: string[] = []
        users?.forEach(user => {
            logins.push(user.login)
        })
        setGHUsers(logins)
    }, [users])

    const changeHandler = (userName: string | null) => {
        if (userName){
            fetchRepos(userName)
        }
    }

    return (
        <div>
            <Autocomplete
            onChange={(e, newValue) => changeHandler(newValue)}
            inputValue={user}
            onInputChange={(e, newValue) => setUser(newValue)}
            disablePortal
            id="combo-box-demo"
            options={gHUsers}
            sx={{ width: 300 }}
            renderInput={(params) => 
            <TextField
            key={params.id}
            {...params}
            label="UserName" />}
            />
            <Stack>
                {JSON.stringify(repos)}
            </Stack>
        </div>
    );
};

export default SearchPage;