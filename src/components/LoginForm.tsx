import { Box, Button, IconButton, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import {VisibilityOff, Visibility} from '@mui/icons-material'
import { useForm } from 'react-hook-form';
import { formValidators } from '../utils/formValidators';
import { useNavigate } from 'react-router-dom';

export interface ILoginForm {
    email:string
    password:string
}

interface LoginProps {
    login: (data:ILoginForm) => void
}

const LoginForm: React.FC <LoginProps> = ({login}) => {
    const [passwordIsVisible, setPasswordIsVisble] = React.useState(false)
    const form = useForm<ILoginForm>()
    const {register, formState, handleSubmit} = form
    const {errors} = formState
    const navigate = useNavigate()

    function submitHamdler (data: ILoginForm) {
        login(data)
        navigate('/', {relative: 'route'})
    }

    return (
        <Box
        width={400}
        margin={'100px auto'}
        bgcolor={'#fff'}
        sx={{padding:'40px 20px',
        // border:'1px solid rgb(52, 51, 51)'
        }}
        borderRadius={'10px'}
        // justifyContent={'center'}
        >
            <form
            noValidate
            onSubmit={handleSubmit(submitHamdler)}
            >
                <Stack
                spacing={4}
                alignItems='center'
                >
                    <Typography
                    variant='h4'
                    color='rgb(52, 51, 51)'
                    >Login</Typography>
                    <TextField
                    label='email'
                    type='email'
                    error={!!errors.email?.message}
                    helperText={errors.email?.message}
                    {...register('email', formValidators.emailValidator)}
                    />
                    <Typography
                    component={'span'}
                    position={'relative'}
                    left={'20px'}
                    >
                        <TextField
                        type={passwordIsVisible ? 'text' : 'password'}
                        label='password'
                        error = {!!errors.password?.message}
                        helperText={errors.password?.message}
                        {...register('password', formValidators.passwordValidator)}
                        />
                        <IconButton
                        sx={{
                            position:'relative',
                            top:'4px'
                        }}
                        onClick={() => setPasswordIsVisble(prev => !prev)}
                        >
                            {passwordIsVisible ? <VisibilityOff/> : <Visibility/>}
                        </IconButton>
                    </Typography>
                    {/* <TextField/> */}
                    <Button 
                    type='submit'
                    variant='contained' 
                    color='secondary'>Войти/Зарегестрироваться</Button>
                </Stack>
            </form>
        </Box>
    );
};

export default LoginForm;