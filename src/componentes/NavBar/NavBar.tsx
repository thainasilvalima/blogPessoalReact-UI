
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import './NavBar.css'



function NavBar() {
    return (
        <>
            <AppBar className='nv-menu' position="static">
                <Toolbar className='container'>
                    <Typography variant="h6" className='titulos' >
                        Home
                    </Typography>
                    <Typography variant="h6"  className='titulos'>
                        Cadastre-se
                    </Typography>
                    <Typography variant="h6"  className='titulos'>
                        Contato
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar;