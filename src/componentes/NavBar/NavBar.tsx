import { AppBar, Toolbar, Typography } from '@material-ui/core'

import './NavBar.css'

function NavBar() {
    return (
        <>
            <AppBar position="static" className='bg-menu'>
                <Toolbar className='container'>
                    <Typography className='title' variant="h6">
                        Fly like a Butterfly
                    </Typography>
                    <Typography className='title' variant="h6">
                        Home
                    </Typography>
                    <Typography className='title' variant="h6">
                       Contato
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar