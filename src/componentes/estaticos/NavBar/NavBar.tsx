
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
                    <Link to="/home" className='cursor'>
                        <Box  >
                            <Typography variant="h6" className='nav-titulo' >
                                Home
                            </Typography>
                        </Box>
                    </Link>

                    <Link to="/login" className='cursor'>
                        <Box  >
                            <Typography variant="h6" className='nav-titulo' >
                                Login
                            </Typography>
                        </Box>
                    </Link>

                    <Link to="/posts" className='cursor'>
                        <Box >
                            <Typography variant="h6" className='nav-titulo' >
                                Postagens
                            </Typography>
                        </Box>
                    </Link>


                    <Link to="/temas" className='cursor'>
                        <Box  >
                            <Typography variant="h6" className='nav-titulo'>
                                Temas
                            </Typography>
                        </Box>
                    </Link>

                    <Link to="/formularioTema" className='cursor'>
                        <Box  >
                            <Typography variant="h6" className='nav-titulo'>
                                Cadastrar Tema
                            </Typography>
                        </Box>
                    </Link>

                    <Link to="/formularioPostagem" className='cursor'>
                        <Box  >
                            <Typography variant="h6" className='nav-titulo'>
                                Cadastrar Postagem
                            </Typography>
                        </Box>
                    </Link>

                    <Box className='cursor' onClick={goLogout} >
                        <Typography variant="h6" className='nav-titulo' >
                            Logout
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar >
        </>
    )
}

export default NavBar;