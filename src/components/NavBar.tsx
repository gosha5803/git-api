import React, { useState } from 'react';
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom';
import { AccountCircle } from '@mui/icons-material';
import { useActions } from '../hooks/useDispatch';
import { useTypedSelector } from '../hooks/useTypedSelector';

const NavBar: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    // Сейчас я вытащу экшн для измененния стейта прямо в компонент, в котором подобная логика, возможно не долждна определяться, но пока что оставю его здесь
    const {logout} = useActions()
    const {token} = useTypedSelector(state => state.auth.user)
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
      };

    const logoutHandler = () => {
        logout()
        setAnchorEl(null)
    }

    return (
        <>
        {token ? 
        <Box sx={{ margin: 0}}>
        <AppBar position='static' >
            <Toolbar 
            sx={{backgroundColor: '#2f2b2b'}}
            >   
                <Typography component={'div'} sx={{flexGrow:1}}>
                    <NavLink to={'/'}>
                    <Button variant='text' sx={{fontWeight:700, color:'white'}}>Seacrh</Button>
                    </NavLink>

                    <NavLink to='fav' color='white'>
                        <Button variant='text' sx={{fontWeight:700, color:'white'}}>Favourites</Button>
                    </NavLink>
                </Typography>
                <div>
                    <IconButton
                    size='large'
                    color='inherit'
                    onClick={handleClick}
                    >
                        <AccountCircle/>
                    </IconButton>
                    <Menu
                        open = {!!anchorEl}
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        // keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        onClose={() => setAnchorEl(null)}
                    >
                        <MenuItem
                        onClick={logoutHandler}
                        >Logout</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
        </Box> 
        :
        <Box sx={{ margin: 0}}>
        <AppBar position='static' >
            <Toolbar 
            sx={{backgroundColor: '#2f2b2b'}}
            >   
                <Typography 
                variant='h4'
                component={'div'} sx={{flexGrow:1}}>
                    Login
                </Typography>
                
            </Toolbar>
        </AppBar>
        </Box> 
        }
        </>
    );
};

export default NavBar;