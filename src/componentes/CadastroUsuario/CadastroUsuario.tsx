/*import React from 'react'
import { Grid, TextField, Button, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

import './CadastroUsuario.css'


function CadastroUsuario() {

    return (
        <Grid container className="bg-cadastro">
            <Grid item xs={12} sm={12} >

                <Box display="flex" justifyContent="center" alignItems="center" height="90vh" >

                    <Box className='cardForm'>
                        <form>
                            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'> Cadastrar </Typography>
                            <TextField id="nome" label='Nome' variant='outlined' name='name' margin='normal' fullWidth />
                            <TextField id="usuario" label='Usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                            <TextField id="senha" label='Senha' variant='outlined' name='usuario' margin='normal' type='password' fullWidth />
                            <TextField id="confirmarSenha" label='Confirmar Senha' variant='outlined' name='confirmarSenha' type='password' margin='normal' fullWidth />
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

export default CadastroUsuario;*/