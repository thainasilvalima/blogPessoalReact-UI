import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';



function NavBar() {
    return (
        <>
            <AppBar className='nv-menu' position="static">
                <Toolbar className='container-menu'>
                    <Typography variant="h6">
                        ButterFly
                    </Typography>
                    <Typography variant="h6" >
                        Home
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar;