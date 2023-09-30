import FavouritesPage from "../pages/FavouritesPage"
import react from 'react'
import SearchPage from "../pages/SearchPage"
import LoginPage from "../pages/LoginPage"

export enum RouterPaths {
    SEARCH = '/',
    FAVOURIETES = 'fav',
    LOGIN = '/login'
}

interface IRoute {
    path: string
    Component: react.ComponentType
}

export const privateRoutes: IRoute[] = [
    {path: RouterPaths.FAVOURIETES, Component:FavouritesPage},
    {path: RouterPaths.SEARCH, Component: SearchPage},
]

export const publicRoutes: IRoute[] = [
    {path: RouterPaths.LOGIN, Component:LoginPage}
]