import React, {useEffect} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import FavouritesPage from '../pages/FavouritesPage';
import SearchPage from '../pages/SearchPage';
import { RouterPaths, privateRoutes, publicRoutes } from '../router';
import { useSelector } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useDispatch';

const AppRouter: React.FC = () => {
    const {token} = useTypedSelector(state => state.auth.user)
    const {setUser} = useActions()

    useEffect(() => {
        const userJson = localStorage.getItem('user')
        
        console.log(userJson)
        if (userJson?.length){
            setUser(JSON.parse(userJson))
        }
    }, [])

    return (
        <>
        {token ? 
        <>
            <Routes>
                {privateRoutes.map(route => 
                    <Route key={route.path} path={route.path} Component={route.Component}/>
                )}
            </Routes>
        </>
        :
        <>
            <Routes>
                {publicRoutes.map(route => 
                    <Route key={route.path} path={route.path} Component={route.Component}/>
                )}
            </Routes>

        </>
        }
        </>
    );
};

export default AppRouter;