import { Box } from '@mui/material';
import React, { useState, ChangeEvent, useEffect, } from 'react';
import { Button, Grid, TextField, Typography, } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import useLocalStorage from 'react-use-localstorage';
import './Login.css'



function Login() {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
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



        useEffect(() => {
            if (token != '') {
                navigate('/home')
            }
        }, [token])

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const resposta = await api.post(`/usuarios/logar`, userLogin)
            setToken(resposta.data.token)

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
                    <Typography className='card-title' variant="h4" align="center" >
                        Login
                    </Typography>

                    <form onSubmit={onSubmit}>
                        <TextField defaultValue={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} className='form-input' variant='outlined' id="usuario" name='usuario' label="Usuário" margin='normal' fullWidth />

                        <TextField defaultValue={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} className='form-input' variant='outlined' id="senha" type="password" label="Senha" margin='normal' fullWidth />

                    </form>
                    <Button className="form-btn" type='submit' variant='contained'>
                        Acessar
                    </Button>

                    <Box display='flex' justifyContent='center' marginBottom={3}>
                        <Box marginTop={3}>
                            <Typography variant='subtitle1' gutterBottom align='center' className='text1'>Não tem uma conta?</Typography>

                            <Link to='/cadastrousuario' className='btnCadastro'>
                                <Typography gutterBottom align='center'> Cadastre-se</Typography> </Link>
                        </Box>


                    </Box>
                </Box>
            </Box>


        </Grid>
    </Grid >
);
}
export default Login;
