
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import './NavBar.css';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/reducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';


function NavBar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "colored",
            progress: undefined,
        })
        navigate('/login')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar className='nv-menu' position="static">
            <Toolbar className='container' variant="dense">

            <Link to="/perfil" className='cursor'>
                    <Box  >
                        <Typography variant="h6" className='nav-titulo' >
                            Perfil
                        </Typography>
                    </Box>
                </Link>
                <Link to="/home" className='cursor'>
                    <Box  >
                        <Typography variant="h6" className='nav-titulo' >
                            Home
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

                <Link to='/contato' className='cursor' >
                    <Typography variant="h6" className='nav-titulo'>
                        Contato
                    </Typography>
                </Link>

                <Box className='cursor' onClick={goLogout} >
                    <Typography variant="h6" className='nav-titulo' >
                        Logout
                    </Typography>
                </Box>

            </Toolbar>
        </AppBar >
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default NavBar;