import React, { useState, useEffect, ChangeEvent } from 'react';
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
                        <form onSubmit={onSubmit} className='form-usuario' >
                            <Typography variant='h3' gutterBottom component='h3' align='center' className='textos1'> Cadastrar </Typography>
                            <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="nome" label='Nome' name='nome' margin='normal' fullWidth />
                            <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label='Usuario' name='usuario' margin='normal' fullWidth />
                            <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label='Senha' name='senha' margin='normal' type='password' fullWidth />
                            <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id="confirmarSenha" label='Confirmar Senha' name='confirmarSenha' type='password' margin='normal' fullWidth />

                            <Box className='btn-cad' display="flex" justifyContent="center" >
                                <Button className='btnCadastrar' type='submit'>
                                    Cadastrar
                                </Button>
                                <Box mx={1} >
                                    <Link to='/login' className='textLink' >
                                        <Button className='btnCancelar'  >
                                            Cancelar
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>

                        </form>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default CadastroUsuario;