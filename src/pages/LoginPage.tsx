import React from 'react';
import LoginForm from '../components/LoginForm';
import { loginApi } from '../api/login/loginApi';

const LoginPage = () => {
    const [login, {data: user}] = loginApi.useLazyLoginUserQuery()

    return (
        <div>
            <LoginForm
            login={login}
            />
        </div>
    );
};

export default LoginPage;