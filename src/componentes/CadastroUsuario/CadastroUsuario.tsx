import React, {useState, useEffect, ChangeEvent }from 'react';
import { useNavigate } from 'react-router-dom';
import { cadastroUsuario } from '../../services/Service';
import { Grid, TextField, Button, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import User from '../../models/User';

import './CadastroUsuario.css';


function CadastroUsuario() {


    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            alert('Usuario cadastrado com sucesso')
        } else {
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    return (
        <Grid container className="bg-cadastro">
            <Grid item xs={12} sm={12} >

                <Box display="flex" justifyContent="center" alignItems="center" height="90vh" >

                    <Box className='cardForm'>
                        <form onSubmit={onSubmit}>
                            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'> Cadastrar </Typography>
                            <TextField  defaultValue={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="nome" label='Nome' variant='outlined' name='name' margin='normal' fullWidth />
                            <TextField  defaultValue={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label='Usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                            <TextField defaultValue={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label='Senha' variant='outlined' name='usuario' margin='normal' type='password' fullWidth />
                            <TextField defaultValue={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id="confirmarSenha" label='Confirmar Senha' variant='outlined' name='confirmarSenha' type='password' margin='normal' fullWidth />
                        </form>

                        <Box className='btn-cad' >
                            <Button variant='contained' color='primary' className='btnCadastrar'>
                                Cadastrar
                            </Button>

                            <Link to='/login' className='textLink'>
                                <Button type='submit' variant='contained' color='secondary' className='btnCancelar' >
                                    Cancelar
                                </Button>
                            </Link>

                        </Box>

                    </Box>

                </Box>
            </Grid>
        </Grid>
    )
}

export default CadastroUsuario;