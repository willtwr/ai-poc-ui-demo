import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

function Header() {
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge="start" color='inherit' aria-label='menu' sx={{ mr:2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant='h6' component="a" sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    color: 'inherit',
                    textDecoration: 'none'
                }}>
                    Draw
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;