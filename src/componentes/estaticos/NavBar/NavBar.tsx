
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import './NavBar.css';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <AppBar className='nv-menu' position="static">
                <Toolbar className='container'>
                <Box className='cursor'>
                        <Typography variant="h6" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Postagens
                        </Typography>
                    </Box>

                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Temas
                        </Typography>
                    </Box>

                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Cadastrar Tema
                        </Typography>
                    </Box>
                    
                    <Link to='/login' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>
                    </Link>
                </Toolbar>
            </AppBar >
        </>
    )
}

export default NavBar;