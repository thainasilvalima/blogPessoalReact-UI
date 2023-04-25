import { Box } from '@mui/material';
import React, { useState, ChangeEvent, useEffect, } from 'react';
import { Button, Grid, TextField, Typography, } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom';
import { api, login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import useLocalStorage from 'react-use-localstorage';
import './Login.css'



function Login() {

    let navigate = useNavigate(); // redireciona o usuário para determinada pagina.
    const [token, setToken] = useLocalStorage('token'); // hooks que vão manipular o nosso local storage para gravaro token.
    const [userLogin, setUserLogin] = useState<UserLogin>( // useState define como uma determinada variavel será inicializada quando o comp for renderizado sempre quando for ter 
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: ''

        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })

    }

    useEffect(() => {
        if (token != '') {
            navigate('/home')
        }
    }, [token])


    async function logar(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            await login(`/usuarios/logar`, userLogin, setToken)
            alert('Usuário logado com sucesso!');

        } catch (error) {
            alert('Dados do usuário inconsistentes. Erro ao logar!');
        }
    }

    return (
        <Grid container className="bg-home" >
            <Grid item xs={12} sm={12}>

                <Box display="flex" justifyContent="center" alignItems="center" height="90vh">

                    <Box className="card" >
                        <Typography className='card-title' variant="h3" align="center" >
                            Login
                        </Typography>

                        <form onSubmit={logar} className='form-login'>
                            <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} className='form-input' id="usuario" name='usuario' label="Usuário" margin='normal' fullWidth />

                            <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} className='form-input' id="senha" name='senha' type="password" label="Senha" margin='normal' fullWidth />

                            <Box > <Button className="form-btn" type='submit' >
                                Acessar
                            </Button> </Box>


                        </form>

                        <Box display='flex' justifyContent='center' marginBottom={3}>
                            <Box marginTop={3}>
                                <Typography variant='subtitle1' gutterBottom align='center' className='text1'>Não tem uma conta?</Typography>

                                <Link to='/cadastrousuario' className='textLink'>
                                    <Typography gutterBottom align='center' className='cadastre-se'> Cadastre-se</Typography> </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>


            </Grid>
        </Grid >
    );
}
export default Login;
