
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import './NavBar.css';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

function NavBar() {

    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    function goLogout() {
        setToken('')
        alert("Usuário precisa estar logado!")
        navigate('/login')
    }



    return (
        <>
            <AppBar className='nv-menu' position="static">
                <Toolbar className='container'>
                    <Box className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Butterfly
                        </Typography>
                    </Box>

                    <Link to="/posts" className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                    </Link>


                    <Link to="/temas" className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                    </Link>

                    <Link to="/formularioTema" className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Cadastrar Tema
                            </Typography>
                        </Box>
                    </Link>

                    <Box mx={1} className='cursor' onClick={goLogout} >
                        <Typography variant="h6" color="inherit">
                            Logout
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar >
        </>
    )
}

export default NavBar;